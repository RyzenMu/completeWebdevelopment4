'use strict';

(function(){
  const header = document.querySelector('h1');
  header.style.color = 'red';
  return function(){
    document.querySelector('body').addEventListener('click', function(){
      header.style.color = 'blue';
    });
  }();
})();