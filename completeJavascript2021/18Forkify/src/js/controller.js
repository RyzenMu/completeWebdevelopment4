import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import receipeView from './views/receipeView.js';
import receipeView from './views/receipeView.js';
import searchViews from './views/searchViews.js';
import resultsViews from './views/resultsViews.js';
import bookmarkViews from './views/bookmarkViews.js';
import paginationView from './views/paginationView.js';
import addReceipeView from './views/addReceipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

if(module.hot) {
  module.hot.accept();
}

console.log(icons);
const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function(parentEl) {
  const markup = `
  <div class="spinner">
  <svg>
    <use href="${icons}icon-loader"></use>
  </svg>
  </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}
// API CALL
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    // guard clause
    if (!id) return;
    receipeView.renderSpinner();

    //0 update results view to mark selected search results
    resultsViews.update(model.getSearchResultsPage());
    // renderSpinner(recipeContainer);
    // loading receipe
    await model.loadReceipe(id);
    const {recipe} = model.state;
    // rendering receipe
    receipeView.render(model.state.receipe);
    // const receipeView = new receipeView(model.state.receipe);
    // updating bookmarks view
    debugger;
    bookmarkViews.update(model.state.bookmarks);
    
  } catch (error) {
    alert(error);
    receipeView.renderError();
  }
}

const controlSearchResults = async function() {
  try {
    resultsViews.renderSpinner();
    // get search query
    const query = searchViews.getQuery();
    if(!query) return;

    // load search results
    await model.loadSearchResults(query);
    // resultsViews.render(model.state.search.results);

    // render results
    resultsViews.render(model.getSearchResultsPage( ));

    // render initial pagination 
    paginationView.render(model.state.search);

  } catch(err) {
    console.log(err);
  }
}

controlSearchResults();

const controlPagination = function(goToPage) {
  // render new results
  resultsViews.render(model.getSearchResultsPage(goToPage));

  // render new pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  // update the receipe servings in the state 
  model.updateServings(newServings);
  // update the receipe view
  // receipeView.render(model.state.receipe);
  receipeView.update(model.state.receipe);
};

const controlAddBookmark = function(){
  // add/remove bookmark
  if (!model.state.receipe.bookmarked) model.addBookmark(model.state.receipe);
  else (model.state.receipe.bookmarked) model.deleteBookmark(model.state.receipe.id);
  // update receipe view
  receipeView.update(model.state.receipe);
  //render bookmarks
  bookmarkViews.render(model.state.bookmarks)
}

const controlBookmarks = function(){
  bookmarkViews.render(model.state.bookmarks)
}

const controlAddReceipe = async function(newRecipe){
  try {
    addReceipeView.renderSpinner(); 
    await model.uploadReceipe(newRecipe);
    // render receipe
    receipeView.render(model.state.receipe)
    //render bookmark view
    bookmarkViews.render(model.state.bookmarks);

    // change id in the url
    window.history.pushState(null, '', `#${model.state.receipe.id}`);
    window.history.back()
    // close form window
    setTimeout(function(){
      addReceipeView.toggleWindow();
    }, MODAL_CLOSE_SEC*1000);
  } catch(err){
    addReceipeView.renderError(err.message);
  }
}
const init = function(){
  bookmarkViews.addHandlerRender(controlBookmarks);
  receipeView.addHandlerRender(controlRecipe);
  receipeView.addHandlerUpdateServings(controlServings);
  receipeView.addHandlerAddBookmark(controlAddBookmark);
  searchViews.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addReceipeView.addHandlerUpload(controlAddReceipe);
}


init();
// controlRecipe();
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);



