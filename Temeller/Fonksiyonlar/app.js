// // Fonksiyon Tanımlama

// function merhaba(name = "Bilgi yok",age= "Bilgi Yok") {
//     // if (typeof name === "undefined") name = "Bilgi yok";
//     // if (typeof age === "undefined") age = "Bilgi yok";
//     console.log(`İsim: ${name} Yaşı: ${age}`);
// }

// merhaba("Murat",25); // Fonksiyon Çağrısı (Function Call)
// merhaba("Ayşe",30);
// merhaba();
// merhaba("Kadir");

// function square(x) {
//     return x * x;
//     console.log("Naber"); // Hiçbir zaman çalıştırılmaz.
// }

// function cube(x) {
//     return x*x*x;
// }

// let a = cube(square(12));
// console.log(a);

// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba());

// Function Expression

// const merhaba = function(name) {
//     console.log("Merhaba " + name);
// }

// merhaba("Murat");

// Immediately Invoked Function Expression(IIFE)

// (function(name) {
//     console.log("Merhaba: " + name );
// })("Murat");


const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id ${id} Güncellendi`);
    },
    delete:function(id) {
        console.log(`Id: ${id} Silindi.`);
    }
}

console.log(database.host);
database.add();
database.delete(10);