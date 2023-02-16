
function sPramokutnyk (a, b) {
    let s = a * b;
    console.log(s);
    return s;
};

sPramokutnyk (8, 10)

function sKola (r) {
    let s = (r*r)*3.14;
    console.log(s);
    return s;
};

sKola (2)

function sCelindra (r,h) {
    let s = 2*3.14*r*(h+r);
    console.log(s);
    return s;
};

sCelindra (2,2);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function looper (arr) {
    for (const element of arr){
    console.log(element);
    }
}

looper (users);


function paragraf (text) {
    let p = `<p> ${text} </p>`;
    document.write (p);
}

paragraf ('pidar');

function (tex) {
    document.write (`<ul>`);
   
    document.write (`<li> ${tex} </li>`) 
    document.write (`<li> ${tex} </li>`)
    document.write (`<li> ${tex} </li>`)
    
    document.write (`</ul>`)
    
}

list ('dshdj');

function list (text,numIter) {
    document.write (`<ul>`);
    for (let i=0; i<numIter; i++) {
        document.write(`<li> ${text} </li>`);
     }
     document.write (`</ul>`);
}

list ('lox',7);




function obg (qwe) {
    for (const user of qwe) {
    
    document.write (`<div> ${user.name} ${user.age} ${user.status} </div>`);
 }
}

obg (users);

let nombers = [23, 45 ,12, 7, -15 ]

function obg (arr) {
    document.write(`<ul>`)
    for (const user of arr) {
        document.write(`<li>${user} </li>`)
    }
    document.write(`</ul>`)
    
}

obg (nombers);

function minNumb (arrNumb) {
    let min = arrNumb[0];
    for (const nomber of arrNumb) {
        if (min > nomber) {
            min = nomber
        }
    }
    return console.log(min);
    }

minNumb (nombers);


 
function arrSum (arr) {
let sum = 0
for (const nomber of arr) {
    sum = sum + nomber;
}
return console.log(sum);
}

arrSum (nombers);

function swap ( arr, index1, index2) {
    let x = arr[index1]
    let y = arr[index2]

    arr [index1] = y
    arr [index2] = x
    return arr
   
}

console.log( swap (nombers,0,1));

let money = [
    {currency:'USD', value: 40},
    {currency:'EUR', value: 42},
    {currency:'GBP', value: 43}
]

function mom (uah, currency, exitCurrency ) {
for (const item of currency) {
    if (item.currency === exitCurrency) {
        return uah / item.value
    }
}
}

console.log( mom (10000, money, 'USD'));