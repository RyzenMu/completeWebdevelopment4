// import {XMLHttpRequest} from 'xmlhttprequest'

// Spread operator
const array1 = ['sf', 'dg', 3, 6];
const array2 = ['gh', 'la', 5, 2];
const array3 = [...array1, ...array2, 'ff', 'cc', 'bb'];
// console.log(array3);
// console.log();
// console.log(array3.length);
console.log();
const obj1 = {
    name : 'jvl code',
    age : 33,
};
const obj2 = {...obj1,
    sex: 'male',
    profession : 'teaching',
}
const obj3 = obj2;
obj3['salary'] = 50000;   
// console.log();
// console.log(obj2);


// Rest operator
// rest operator is nothing but the arguments version of spread operator.

function func1(...arg){
    const array1 = [arg];
    arg.forEach((item) => {
        console.log(item + 10);
    });
};

// func1(12, 13, 14, 88);

// destructuring
const hobbies = ['sports', 'cooking', 'programming', 'fishing', 'travelling'];
const [h1, h2, ...others] = hobbies;

// console.log(h1, h2, others);

const {name, age, sex, ...oothers} = obj3;
// console.log(name, age, sex, oothers);

// Asynchronous code
// 1. setTimeout
setTimeout(()=>{console.log(1);}, 1000);
setTimeout(()=>{console.log(2);}, 1000);
setTimeout(()=>{console.log(3);}, 1000);
setTimeout(()=>{console.log(4);}, 1000);
setTimeout(()=>{console.log(5);}, 1000);
setTimeout(()=>{console.log(6);}, 900);
setTimeout(()=>{console.log(7);}, 800);
setTimeout(()=>{console.log(8);}, 700);
setTimeout(()=>{console.log(9);}, 600);
setTimeout(()=>{console.log(10);}, 500);
setTimeout(()=>{console.log(11);}, 400);
const twelve = setTimeout(()=>{console.log(12);}, 300);

const fetchData = (callback) => {
    setTimeout(()=>{

        callback();
    }
        
        , 2000);
};

setTimeout(()=> {
    fetchData(()=> {
        console.log("data fetched");
    })
}, 3000);

// 2. clearTimeout
clearTimeout(twelve);

// 3.setInterval
// setInterval iterates the callback function after every specified time
const interval = setInterval(() =>{console.log(14);}, 2000);

// 4. clearInterval
setTimeout(() =>{
    clearInterval(interval)}, 5000);


// 5. Promise
const prom1 = new Promise((resolve, reject)=>{
   
    resolve();
    reject();
})

prom1.then(
    ()=>{console.log('I am success 1')},
    ()=>{console.log('I am failure 1');
    }
);

const prom2 = new Promise((resolve,reject)=>{
    // production code
    resolve(()=>{
        fetch('https://googleeee.comkjf');
    });
    reject(()=>{

        fetch('https://google.com');
    }

    );
});

prom2.then( ()=>{
    // consuming code
    console.log('This is successful 2');
}, ()=>{
    console.log('This is failure 2');    
}    
);

// promise example 3
function myDisplayer(some){
    console.log(some);
    
};

const prom3 = new Promise((resolve, reject)=>{
    let x = 10;
    if (x==0){
        resolve();
    }else {
        reject();
    }
});

prom3.then(
    ()=>{myDisplayer('this is success 3')},
    ()=>{myDisplayer('this is failure 3')}
);

// promise example 4
const prom4 = new Promise((resolve, reject) => {
    let x = 15;
    if (x == 5){
        resolve();
    }else{
        reject();
    }
});

prom4.then(()=>{
    setTimeout(()=>{
        console.log("This is success 4");        
    }, 3000);
}, ()=>{
    setTimeout(()=>{
        console.log("This is failure 4");
        
    }, 3000);
});

// waiting for a file in Promise
// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "myCar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(req.responseText);
//         } else {
//             myCallback("Error" + req.status);
//         }
//     }
//     req.send();
// }
// getFile(myDisplayer);

// example using promise
// let myPromise = new Promise(function(myResolve, myReject){
//     let req = new XMLHttpRequest();
//     req.open('GET', "myCar.html");
//     req.onload = function (){
//         if(req.status == 200) {
//             myResolve(req.response);
//         }else {
//             myReject("File not found");
//         }
//     };
//     req.send();
// });

// myPromise.then(
//     function (value) {myDisplayer(value);},
//     function (error) {myDisplayer(error);}
// )

let myPromise =new Promise((myResolve, myReject) => {
    //producing code
    // myResolve('Logesh');
    setTimeout(()=> {
        myReject('muruga');
    }, 7000);
});

myPromise.then((name)=> {
    console.log("my name is " + name);    
    console.log('JVL success');    
}).catch((name)=> {
    console.log("my name is " + name);    
    console.log(' JVL Failed');  
    return 'failure name is ' + name  
}).then((name)=> {
    console.log(name);
    
})


