const object = new Object();
const object2 = new Object();
object.name = "Mustafa";
console.log(object);

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gösteriliyor...");
    }
    this.toString = function() {
        console.log("Bu bir Employee Objesidir..");
    }
}

const emp1 = new Employee("Mustafa",25);
console.log(emp1);

console.log(emp1.toString());