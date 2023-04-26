let value;

const programmer = {
    name: "Eren Mülkoğlu",
    age: 25,
    email: "riomortensen@gmail.com",
    langs: ["Python","C#","Javascript"],

    adress: {
        city: "Ankara",
        street: "Bahçelievler"
    },

    work :  function() {
        console.log("Programcı Çalışıyor...");
    }


}


value = programmer;

value = programmer.email; // Genel olarak
value = programmer["email"];

value = programmer.langs;
value = programmer.adress.city;

programmer.work();

const programmers = [
    {name: "Eren Mülkoğlu", age:25},
    {name: "Hüseyin", age: 25 }
]

value = programmers[0].name;

console.log(value);