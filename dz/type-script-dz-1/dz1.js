// 1) створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//         "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     "links": {
//         "article_link": "http://some.com",
//         "video_link": "https://youtu/J442-ti-Dhg"
//     },
//     "rocket": {
//         "rocket_name": "Falcon 9",
//         "first_stage": {
//             "cores": [
//                 {
//                     "flight": 7,
//                     "core": {
//                         "reuse_count": 6,
//                         "status": "unknown"
//                     }
//                 }
//             ]
//         },
//         "second_stage": {
//             "payloads": [
//                 {
//                     "payload_type": "Satellite",
//                     "payload_mass_kg": 15400,
//                     "payload_mass_lbs": 33951.2
//                 }
//             ]
//         }
//     }
// }
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
var IUser = /** @class */ (function () {
    function IUser(name, age, genfer) {
        this.name = name;
        this.age = age;
        this.genfer = genfer;
        this.name = name;
        this.age = age;
        this.genfer = genfer;
    }
    return IUser;
}());
var user = new IUser("max", 15, 'male');
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
;
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
// function  incAge(someUser:string, inc: number): number {
//                 return this.someUser.age+=this.inc
//                 }      
console.log(sum(1, 2));
showSum(2, 3);
// incAge(user, 2)
