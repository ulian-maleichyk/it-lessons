
let helloWorld = 'hello world';
let loremIpsum = 'lorem ipsum';
let javascriptIsCool = 'javascript is cool';

console.log(helloWorld.length);
console.log(loremIpsum.length);
console.log(javascriptIsCool.length);

console.log(helloWorld.toUpperCase ());
console.log(loremIpsum.toUpperCase ());
console.log(javascriptIsCool.toUpperCase ());

console.log(helloWorld.toLowerCase ());
console.log(loremIpsum.toLowerCase ());
console.log(javascriptIsCool.toLowerCase ());

let str = ' dirty string   ';
 console.log(str.replaceAll (' ','')); 

 //Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.//
   // let str = 'Ревуть воли як ясла повні';//
    //let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']//

    function stringToarray(str) {
        console.log(str.split (' ')); 
    };

    let str2 = 'Ревуть воли як ясла повні'
    stringToarray(str2); 
 
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]

let arrNumb = [10,8,-7,55,987,-1011,0,1050,0];

let arr = [10,8,-7,55,987,-1011,0,1050,0];
let string = arr.map(item => { return item.toString();});
console.log(string); 

let sortDown = function sortDown(direction) {
    direction.sort ((a,b) => b-a);
}

let sortUp = function sortUp(direction) {
    direction.sort ((a,b) => a-b)
}

sortDown(arrNumb);
 console.log(arrNumb);

 sortUp(arrNumb);
 console.log(arrNumb);

 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
     ]
   // -- відсортувати його за спаданням за monthDuration
   // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
   // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

    let monthDurationDown = coursesAndDurationArray.sort ((a , b) => a.monthDuration - b.monthDuration)
   console.log(monthDurationDown);

   let monthDurationFiveAndMore  = coursesAndDurationArray.filter (mounts => mounts.monthDuration > 5 );
   console.log(monthDurationFiveAndMore);

   let newArrWithId = coursesAndDurationArray.map ((item , index) => {
return {title: item.title , monthDuration: item.monthDuration , id: index + 1   }
   })
  console.log(newArrWithId);

 // описати колоду карт (від 6 до туза без джокерів)
 // - знайти піковий туз
  //- всі шістки
  //- всі червоні карти
  //- всі буби
  //- всі трефи від 9 та більше
 

 let cards = [ 
  {cardSuit:'spade' , value:'6' , color:'black' },
  {cardSuit:'spade' , value:'7' , color:'black' },
  {cardSuit:'spade' , value:'8' , color:'black' },
  {cardSuit:'spade' , value:'9' , color:'black' },
  {cardSuit:'spade' , value:'10' , color:'black' },
  {cardSuit:'spade' , value:'ace' , color:'black' },
  {cardSuit:'spade' , value:'jack' , color:'black' },
  {cardSuit:'spade' , value:'queen' , color:'black' },
  {cardSuit:'spade' , value:'king' , color:'black' },
  {cardSuit:'diamond' , value:'6', color:'red' },
  {cardSuit:'diamond' , value:'7', color:'red' },
  {cardSuit:'diamond' , value:'8', color:'red' },
  {cardSuit:'diamond' , value:'9' , color:'red' },
  {cardSuit:'diamond' , value:'10' , color:'red' },
  {cardSuit:'diamond' , value:'ace' , color:'red' },
  {cardSuit:'diamond' , value:'jack' , color:'red' },
  {cardSuit:'diamond' , value:'queen' , color:'red' },
  {cardSuit:'diamond' , value:'king' , color:'red' },
  {cardSuit:'heart' , value:'6' , color:'red' },
  {cardSuit:'heart' , value:'7' , color:'red' },
  {cardSuit:'heart' , value:'8' , color:'red' },
  {cardSuit:'heart' , value:'9' , color:'red' },
  {cardSuit:'heart' , value:'10' , color:'red' },
  {cardSuit:'heart' , value:'ace' , color:'red' },
  {cardSuit:'heart' , value:'jack' , color:'red' },
  {cardSuit:'heart' , value:'queen' , color:'red' },
  {cardSuit:'heart' , value:'king', color:'red' },
  {cardSuit:'clubs' , value:'6' , color:'black' },
  {cardSuit:'clubs' , value:'7' , color:'black' },
  {cardSuit:'clubs' , value:'8' , color:'black' },
  {cardSuit:'clubs' , value:'9' , color:'black' },
  {cardSuit:'clubs' , value:'10' , color:'black' },
  {cardSuit:'clubs' , value:'ace' , color:'black' },
  {cardSuit:'clubs' , value:'jack' , color:'black' },
  {cardSuit:'clubs' , value:'queen' , color:'black' },
  {cardSuit:'clubs' , value:'king' , color:'black' }
 ]

 let aceSpade = cards.filter (card => card.value === 'ace' && card.cardSuit === 'spade' );
 let allSix = cards.filter (card => card.value === '6'  );
 let allRed = cards.filter (card => card.color === 'red'  );
 let allDiamond = cards.filter (card => card.cardSuit === 'diamond'  );
 let allClubsFromNineAndApper = cards.filter (card => card.cardSuit === 'clubs' && card.value != '6' && card.value != '7' && card.value != '8' );

 console.log(aceSpade);
 console.log(allSix);
 console.log(allRed);
 console.log(allDiamond);
 console.log(allClubsFromNineAndApper);


let posortovany =  cards.reduce ((accumulator, card) => {
if (card.cardSuit === 'spade') {
    accumulator.spades.push(card);
}else if (card.cardSuit === 'diamond') {
    accumulator.diamonds.push(card);
}else if (card.cardSuit === 'heart') {
    accumulator.hearts.push(card);
}else {
    accumulator.clubs.push(card);
}
return accumulator
} ,{spades:[], diamonds:[],  hearts:[], clubs:[]})

console.log(posortovany);

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sass = coursesArray.filter(length => length.modules.includes('sass'));
console.log(sass);

let docker = coursesArray.filter(length => length.modules.includes('docker'));
console.log(docker);