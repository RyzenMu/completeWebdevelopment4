import View from './view.js';

import icons from 'url:../../img/icons.svg';
import {Fraction} from 'fractional';

class RecipeView extends View{
    _parentElement = document.querySelector('.recipe');
    _data;
    _errorMessage = 'We could not find that receipe. Please try another one!';
    _successmessage = '';
    
   
    addHandlerRender(handler){
      ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
    }

    addHandlerUpdateServings(handler){
      this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.btn--tiny');
        if(!btn) return;
        const {updateTo} = btn.dataset;
        if (+updateTo > 0) handler(updateTo);
      })
    }

    addHandlerAddBookmark(handler){
      this._parentElement.addEventListener('click', function(){
        const btn = e.target.closest('.btn--bookmark');
        if (!btn) return;
        handler();
      })
    }
    _generateMarkup(){
        return `
        <figure class="recipe__fig">
          <img src="${data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings - 1}">
                <svg>
                  <use href="${icons}icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings + 1}">
                <svg>
                  <use href="${icons}icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
            <svg>
              <use href="${icons}icon-bookmark"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

       
            `;
    }
    _generateMarkupIngredient(){
        return `
        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map(ing => {
          return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${icons}icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>`})}`
    }
};

export default new RecipeView();