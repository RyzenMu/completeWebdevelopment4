'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function(country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[2]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(2)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// })};

// getCountryData('portugal');
// getCountryData('usa');

// callbACK HELL

const renderCountry = function(data, className=''){
    const html = `
    <article class="country classname">
          <img class="country__img" src="${data.flags}" />
          <div class="country__data">
            <h3 class="country__name">${data}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(2)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1; // added in finally()
}

// const getCountryDataAndNeighbour = function(country) {
//     //AJAX call country
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         //get country 1
//         renderCountry(data);

//         //get neighbour country
//        const [neighbour] = data.borders;

//        if(!neighbour) return;
//        const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function(){
//         const data2 = JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbour');
//     })
//     })};

//     getCountryDataAndNeighbour(`portugal`);

// promises and fetch api

    //fetch API
    // const request3 = fetch(`https://restcountries.com/v3.1/name/portugal`);
    // console.log(request3);

// consume a promise
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response){
//         console.log(response);
//         return response.json()}).then(function (data) {
//             console.log(data);
//             renderCountry(data[0]);
//         })
// };
// getCountryData('portugal');


const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
}

// helper function
const getJSON = function(url, errroMsg = 'Something went wrong') {
    fetch(url).then(response => {
        log(response);
        if(!response.ok) throw new Error(`Country not found ${response.status}`);
        return response.json()}
        , err => alert(err))
}
//chaining a promise
// const getCountryData = function (country) {
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
//     .then(data => {
//         renderCountry(data[0])
//         const neighbour = data[0].border[0];
        
//         if(!neighbour) throw new Error('No neighbour found');
//         return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'country not found');
//     })
//     .then(data =>renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.error(err)
//         renderError(`something went wrong ${err.message}`);
//     })
//     .finally(()=> {
//     countriesContainer.style.opacity =1;

// });
// };

// btn.addEventListener('click', function(){

//     getCountryData('portugal');
// })


// error handling in javascript

//......

//CODING CHALLENGE 1
// const whereAmI = function(lat, lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//         if(!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//         return res.json()})
//     .then(data => {
//         console.log(data);
//         console.log(`you are in ${data.city}, ${data.country}`);
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`country not found ${res.status}`);
//         return res.json()})
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => console.error(`${err.message}`));
// };
// whereAmI(52.5, 13.381);

// the event loop in practice

// console.log('Test Starrt');
// setTimeout(()=> console.log('0 seconds later'), 0);

// Promise.resolve('Resolved promise 1')
// .then(res => console.log(res))

// Promise.resolve('Resolved promise 2')
// .then(res => {
//     for(let i = 0; i < 1000000000; i++){

//     }
//     console.log(res);
// })
// console.log('Test End');

// Promise
// const lotterypromise = new Promise(function(resolve, reject){
//     console.log('Lottery draw is happening');
//     setTimeout(function(){
//         if(Math.random() >= 0.5) {
//             resolve('you WIN');
//         }else {
//             reject(new Error('You lost your money'));
//         }
//     }, 2000);
// });

// // consuming promise
// lotterypromise
// .then(res => console.log(res))
// .catch(err => console.log(err))

// //promisisfying settimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    })
};
// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }
// ).then(()=> {
//     console.log('waited for 3 seconds');
// })

// Promise.resolve('abc').then( x => console.log(x));
// Promise.reject(new Error('Problem')).catch( x => console.error(x));

//promisifying the Geolocation Api

// navigator.geolocation.getCurrentPosition(
//     position =>console.log(position), 
//     err => console.error(err)
// );

// const getPosition = function(){
//     return new Promise(function(resolve, reject){
//         // navigator.geolocation.getCurrentPosition(
//         //     position =>resolve(position), 
//         //     err => reject(err)
//         // );
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function(lat, lng){
//     getPosition().then(pos => {
//         const {latitude : lat, longitude : lng} = pos.coords;
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);    
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`problem with geocoding ${res.status}`);
//         return res.json()})
//     .then(data => {
//         console.log(data);
//         console.log(`you are in ${data.city}, ${data.country}`);
//         return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//         if(!res.ok) throw new Error(`country not found ${res.status}`);
//         return res.json()})
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => console.error(`${err.message}`));
// };

// document.addEventListener('click', whereAmI);


// coding challenge 2

// promisifying
const imgContainer = document.querySelector('.images')
const createImage = function(imgpath) {
  return new Promise(
    function(resolve, reject){
      const img = document.createElement('img');
      img.src = imgpath;
      img.addEventListener('load', function(){
        imgContainer.append(img);
        resolve(img);
      });

      img.addEventListener('error', function(){
        reject(new Error('Image not found'))
      });

    }
  );
};

// let currentImg;
// createImage('img/img-1.jpg').then(img => {
//   currentImg = img;
//   console.log('image 1 loaded');
//   return wait(2)
// })
// .then(() => {
//   currentImg.style.display = 'none';
//   return createImage('img/img-2.jpg');
// })
// .then((img)=>{
//   currentImg = img;
//   console.log('Image 2 loaded');
//   return wait(2);
// })
// .then(()=> {
//   currentImg.style.display = 'none';
// })
// .catch(err => {
//   console.error(err);
// })

// async await
const loadNPause = async function(){
    try{
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch(err) {
        console.log(err);
    }
}

loadNPause();

// Part 2
const loadAll = async function(imgArr) {
    try{
        const imgs = imgArr.map( async img => await createImage(img));
        const imgsEl = Promise.all(imgs);
        (await imgsEl).forEach(img => img.classList.add('parallel'));
    }catch (err) {
        console.error(err);
    }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

// consume promises using Async and Await

const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(
        //     position =>resolve(position), 
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

// returning values from Aysnc functions
const whereAmI = async function(country) {
    try{
  // geo location
  const pos = await getPosition();
  const {latitude : lat, longitude : lng} = pos.coords;
  // reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`);
  if(!resGeo.ok) throw new Error(`problem getting location data`)
  const dataGeo = await resGeo.json();

  //country data
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
  // console.log(res);
  const data = await res.json();
  renderCountry(data[0]);
  return `You are in ${dataGeo.city}, ${dataGeo.country}`;
}catch(err) {
    console.error(err);
    renderError(`something went wrong ${err}`);
    throw err;
}
}
whereAmI('portugal');
// const city = whereAmI();
// console.log(city);
whereAmI().then(city => console.log(city))
.catch(err => console.error(err.message))
.finally(()=> {
    console.log(`finished getting location`);
});

//async IIFE
(async function(){
    try {
        const city = await whereAmI();
        console.log(city);
    } catch(err){
        console.error(err.message)
    }
    console.log(`finished getting location`);
})();
console.log('First');

// try and catch
try {
    let y = 1;
    const x = 2;
    x = 3;
}catch (err){
    alert(err.message);
}

// running promises in parallel
const get3Countries = async function(c1, c2, c3) {
    try {
        const [data1]  = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        const [data2]  = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        const [data3]  = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);
        console.log(data1.capital, data2.capital, data3.capital);

        //static method
       const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);
        console.log(data.map(d => d[0].capital));
    } catch(err){
        console.error(err);
    }
}

get3Countries('portugal', 'canada', 'tanzania');

// other promise methods
// Promise.race
// Promise.race will return as soon as one promise is rejected
(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/${italy}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${egypt}`),
        getJSON(`https://restcountries.eu/rest/v2/name/${mexico}`),
    ])
    console.log(res[0]);
})();

// reject a promise after certain time
const timeout = function(sec) {
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error(`request took too long`))
        }, sec*1000);
    })
}

Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
    timeout(1),
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));

// promise.allSettled will return when one promise is rejected and shows all promises
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res[0]));

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res[0]));

Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success'),
]).then(res => console.log(res[0]));



