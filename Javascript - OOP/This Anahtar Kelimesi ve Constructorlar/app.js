// console.log(this); // Global Scope

// const emp1 = {   // Object Literal
//     name: "Mustafa",
//     age: 25,
//     showInfos: function() { console.log("Bilgiler Gösteriliyor");}
// };

// const emp2 = {
//     name:"Ahmet",
//     age:25
// }

// console.log(emp1);

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Mustafa",25,4000);
const emp2 = new Employee("Eren",25,5000);

emp1.showInfos();
emp2.showInfos();