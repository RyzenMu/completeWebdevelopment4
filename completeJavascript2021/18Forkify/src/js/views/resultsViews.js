import previewView from "./previewView";
import View from "./view";
import icons from 'url:../../img/icons.svg';
class ResultsView extends View{
_parentElement = document.querySelector('.results');
_errorMessage = "We could not";
_message = '';
_generateMarkup(){
    return this._data.map(result => previewView.render(result, false)).join('')
   
}
}

export default new ResultsView();