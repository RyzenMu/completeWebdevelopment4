import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
import { AJAX } from './helper.js'; 

export const state = {
    receipe : {},
    search : {
      query: '',
      results: [],
      page: 1,
      resultsPerPage : RES_PER_PAGE,
    },
    bookmarks : [],
}

const createRecipeObject - function(data){
  let {recipe} = data.data;
      state.recipe = {
        id : recipe.id,
        title : recipe.title,
        publisher : recipe.publisher,
        sourceUrl : recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients : recipe.ingredients,
        ...(recipe.key && {key: receipe.key}),
      };
}

//forkify api
export const loadReceipe = async function(id){
    try {
      // const data = await getJSON(`${API_URL}/${id}`);
      const res = await AJAX(`${API_URL}/${id}?=key=${KEY}`);
      const data = await res.json();
      state.receipe = createRecipeObject(data);
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      // console.log(res, data);
    
      if(state.bookmarks.some(bookmark => bookmark.id === id))
        state.receipe.bookmarked = true;
      else {
        state.receipe.bookmarked = false;
      }
        console.log(state.recipe); }
        catch(err) {
            alert(err);
            throw err;
        }
}

export const loadSearchResults = async function(query){
  try {
    state.search.query = query;
    
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    
    state.search.results = data.data.receipes.map(rec => {
      return {
        id : rec.id,
        title : rec.title,
        publisher : rec.publisher,
        image: rec.image_url,
        servings: rec.servings,
        cookingTime: rec.cooking_time,
        ingredients : rec.ingredients,
        ...(rec.key && {key: rec.key}),
      }
    });
    state.search.page = 1;
  } catch(err){
    console.error(`${err} ****`);
    throw err;
  }
};

loadSearchResults('pizza');

export const getSearchResultsPage = function(page = state.search.page){
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
}

export const updateServings = function(newServings){
  state.receipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.receipe.servings;
    // newQt = oldQt * newServings / oldServings.
  });
  state.receipe.servings = newServings;
}

const persistBookmarks = function(){
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function(){
  // Add bookmarks
  state.bookmarks.push(receipe);
  // mark current receipe as bookmark
  if(receipe.id === state.receipe.id) state.receipe.bookmarked = true;
  persistBookmarks();
}

export const deleteBookmark = function(id){
  const index = state.bookmarks.findIndex(el => el.id === id)
  state.bookmarks.splice(index, 1);
    // mark current receipe as bookmark
    if(id === state.receipe.id) state.receipe.bookmarked = false;
    persistBookmarks();
}

const init = function() {
   const storage = localStorage.getItem('bookmarks');
   if(storage) state.bookmarks = JSON.parse(storage);
}
init();

const clearBookmarks = function(){
  localStorage.clear('bookmarks');
}
// clearBookmarks();

export const uploadReceipe = async function(newRecipe){
  try {
  const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
    const ingArr = ing[1].split(',').map(el => el.trim());
    if (ingArr.length !== 3) throw new Error('Wrong Ingredient format, please use the correct format')
    const [quantity, unit, description] = ingArr;
    return {quantity : quantity ? +quantity : null, unit, description};
  });
  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url : newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,
  };
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  state.receipe = createRecipeObject(data);
  addBookmark(state.receipe)
}
catch(err){
  throw err;
}
}