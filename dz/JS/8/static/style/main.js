// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let arrUsers = [
  new User(1, "andriy", "iva", "andriy@mail.com", 380677312533),
  new User(2, "vasa", "afasg", "shsn @mail.com", 380677312533),
  new User(3, "ira", "asg", "asdndnvy@mail.com", 380677312533),
  new User(4, "anna", "ag", "tlkghfh@mail.com", 380677312533),
  new User(5, "boda", "asghhfda", "drjkdrkm@mail.com", 380677312533),
  new User(6, "taras", "ashf", "rthopni@mail.com", 380677312533),
  new User(7, "katya", "hjip;iug", "drntseutndriy@mail.com", 380677312533),
  new User(8, "nazar", "idjg", "driyrky@mail.com", 380677312533),
  new User(9, "eva", "hfj", "qurtfklgc@mail.com", 380677312533),
  new User(10, "nastya", "drjnfg", "wa4ytjs@mail.com", 380677312533),
];
console.log(arrUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let UsersParny = arrUsers.filter((a) => a.id % 2 === 0);
console.log(UsersParny);

let UsersPoZrostannu = arrUsers.sort((a, b) => a.id - b.id);
console.log(UsersPoZrostannu);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let arrClients = [
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
    "agadf",
    "afgvav",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
    "afagv",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
    "favgav",
    "sagadvb",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
    "avvsv",
    "vwava",
    "agagv",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
  new Client(1, "iea", "jobap", "faui@mail.com", 380677312533, [
    "tea",
    "bread",
    "kola",
  ]),
];

console.log(arrClients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let arrClientsOrderLenght = arrClients.sort(
  (a, b) => a.order.length - b.order.length
);
console.log(arrClientsOrderLenght);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль їдемо зі швидкістю ${максимальна швидкість} на годину
//     -- info () - яка виводить всю інформацію про автомобіль в форматі назва поля - значення поля
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, vurobnyk, createyear, maxSpeed, vDvugyna) {
        this.model = model;
        this.vurobnyk = vurobnyk;
        this.createyear = createyear;
        this.maxSpeed = maxSpeed;
        this.vDvugyna = vDvugyna;
        this.drivers = []
        }
        drive  () {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`
        };
        info  () {
            console.log('***Info***');
        for (const key in this) {
        console.log( `${key} - ${JSON.stringify(this[key])}`);
        }
            console.log('***Info***');
        };
        increaseMaxSpeed  (newSpeed) {
            const speed = this.maxSpeed + newSpeed
            if (speed < 0) {
                this.maxSpeed =  0
            } else {
                this.maxSpeed = speed
            }
        }
        changeYear  (newValue) {
            this.createyear = newValue;
        };
        addDriver  (name,age,exp) {
            this.drivers.push(new Driver (name,age,exp ))
         };
   
}

class Driver {
    constructor (name,age,exp) {
this.name = name
this.age = age
this.exp = exp
    }
}

let car1 = new Car("audi", "germany", 1998, 200 , "15l");
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20 );
console.log(car1);
car1.changeYear(2000);
console.log(car1);
car1.addDriver('Max',19,1);
car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль їдемо зі швидкістю ${максимальна швидкість} на годину
//     -- info () - яка виводить всю інформацію про автомобіль в форматі назва поля - значення поля
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, vurobnyk, createyear, maxSpeed, vDvugyna) {
//         this.model = model;
//         this.vurobnyk = vurobnyk;
//         this.createyear = createyear;
//         this.maxSpeed = maxSpeed;
//         this.vDvugyna = vDvugyna;
//         this.drivers = []
//         }
//         this.drive = function   () {
//             return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//         };
//         this.info = function   () {
//             console.log('***Info***');
//         for (const key in this) {
    // if (typeof this[key]=== 'function') continue;
//         console.log( `${key} - ${JSON.stringify(this[key])}`);
//         }
//             console.log('***Info***');
//         };
//         this.increaseMaxSpeed = function   (newSpeed) {
//             const speed = this.maxSpeed + newSpeed
//             if (speed < 0) {
//                 this.maxSpeed =  0
//             } else {
//                 this.maxSpeed = speed
//             }
//         }
//         this.changeYear = function  (newValue) {
//             this.createyear = newValue;
//         };
//         this.addDriver = function   (name,age,exp) {
//             this.drivers.push(new Driver (name,age,exp ))
//          };
   
// function Driver (name,age,exp) {
// this.name = name
// this.age = age
// this.exp = exp
// }



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Human {
    constructor (name, age, ) {
this.name = name;
this.age = age;
    }
}

class Popelushka extends Human {
    constructor (name, age,footSize ) {
        super(name, age);
        this.footSize = footSize;
        
    }
}

class Prince extends Human {
    constructor (name, age,bootSize ) {
        super(name, age);
        this.bootSize = bootSize;
        
    }
    findPrincess (arr) {
        for (const candidat of arr){
            if (candidat.footSize ===this.bootSize) {
                return candidat;
            }
        }
    }
}

let popelArr = [
    new  Popelushka ('anna', 38, 38),
    new  Popelushka ('fgk', 58, 37),
    new  Popelushka ('fgkhg', 38, 35),
    new  Popelushka ('fgk', 70, 42),
    new  Popelushka ('fkhg', 37, 32),
    new  Popelushka ('fjfhj', 33, 33),
    new  Popelushka ('fjd', 31, 49),
    new  Popelushka ('fdj', 41, 40),
    new  Popelushka ('adfjfgj', 40, 38),
    new  Popelushka ('atir', 52, 39),
    new  Popelushka ('rtyr', 42, 31)
]

let prince = new Prince ('dima', 18 , 37)

console.log( prince.findPrincess (popelArr));