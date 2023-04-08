// // const func = (str:[]) => {
// //     const s = str.pop();
// // }



// // func (['max', 'mila'])
// console.log("hi");

// interface user<T> {
// name:string;
// age:number;
// status:boolean;
// data:T
// }

// const userOne: user<number[]> = {name:'max', status: true,age:15, data:[1, 2, 3]}

// const userTwo: user<string> = {name:'max', status: true,age:15, data:'sda'}

// const user3: Partial<user<number>> = {name: 'max', data: 12}

// class Userr {
//     // public id: number;
//     // public name:string;
//     // public age: number

//     constructor(public id: number, private namee: string, private  age: number) {
//         this.id = id;
//         this.namee = namee;
//         this.age = age;
//         }
//         getName():string {
//             return this.namee
//         }
// }

// const userr2 = new Userr ( 15, 'afs', 17)

// console.log(userr2.getName);


// interface IShapeActions {
//     area:() => number;
//     perimeter:() => number;
// }

// class Reactengle implements IShapeActions, IGreetuig{
//     constructor (private a: number, private b: number) {
//     }

    
//         print(): void {
//         console.log('heloo');
            
//         }
    
//     area(): number  {
//         return this.a * this.b
//     };
//     perimeter(): number  {
//         return (this.a * this.b)*2
//     }
   
// }

// class Tringle implements IShapeActions {
//     constructor (private a: number, private b: number, private c: number) {
//     }
//     area(): number  {
//         return this.a * this.b/ this.c
//     };
//     perimeter(): number  {
//         return (this.a + this.b)*this.c
//     }
    
// }


// const shapes:IShapeActions[] = [
//     new Tringle (1,3,5),
//     new Reactengle (7,6),
//     new Tringle (7,15,3)
// ]


// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
    
// }

// interface IGreetuig{
//     print:() => void;
// }

// const asd = ():number => {
//     return 18
// }

// // type MyNumber = number|string

// // const asdff:MyNumber = tru

// type MyFuncType = ReturnType <typeof asd>

// const g:MyFuncType = 23
import { userService } from "./services/user.service";

userService.getAll().then(value => value.data).then(users =>{
    for (let user of users)  {
        console.log(user.email);
        
    }
})


enum DaysOfWeek {
    m = 1,
    w = 2,
    s = 3,
    t = 4,
    f = 5
}