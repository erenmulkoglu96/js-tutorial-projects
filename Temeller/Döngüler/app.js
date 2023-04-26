// // While Döngüsü

// let = i;
// while(i < 10) {  // Sonsuz Döngü
//     console.log(i);
//     i++;
// }


// let i = 10;
// while(i > 10) {
//     console.log(i);
//     // i--; // i--
//     i-=2;

// }

// // Break ve Continue

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     if (i == 5 ) {
//         break;
//     }
//     i++;
// }

// let i = 0;
// while (i < 10) {  // Sonsuz Döngü
//     if (i == 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// Do while

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i  < 10);

// const langs = ["Python","Javascript","Java"];

// let index = 0;
// while(index < langs.length) {
//     console.log(langs[index]);
//     index++;
// }

// for(let index = 0; langs.length;index++){
// console.log(langs[index]);
// }

// langs.forEach(function(langs,index){
//     console.log(langs,index);
// });

// const users = [
//     {name:"Eren",age:25},
//     {name: "Hüseyin",age:40},
//     {name:"Hasan",age:12}
// ];

// const names = users.map(function(user){
//     return user.name;
// });
// const ages = users.map(function(user){
//     return user.age;
// });
// console.log(names);
// console.log(ages);


// const user = {
//     name:"Mustafa",
//     age:25
// };

// for(let key in user) {
//     console.log(key,user[key]);
// }