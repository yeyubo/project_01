window.onload = function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let eso = new Person("eso", 32);
    console.log(eso.name + eso.age);
}