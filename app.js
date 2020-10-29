// const car = {
//     make: 'Tesla',
//     model: 'Model S',
//     color: 'blue'
// }

// function start () {
//     return 'Outta here ....';

// }

// function stop() {
//     return 'Push the brakes';
// }


const car = {
    make: 'Tesla',
    model: 'Model S',
    color: 'blue',
    start: function() {
        return 'Outta here...';
    },
    stop: function() {
        return 'Push the brakes';
    }
}

console.log(car.start());


const employee = {
    name: 'Rome Bell',
    role: 'SEI Lead Instructor',
    salary: 100000
}

function salaryIncrease(salary) {
    return salary *1.1;
}

console.log(salaryIncrease(employee.salary));


// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const tuanh = new Human('tu anh', 'huynh');
// const naruto = new Human('naruto', 'uzamaki');
// const tanjiro = new Human('tanjiro', 'kamado');

// Human.prototype.hello = function() {
//     console.log('hello');
// }

// const newUser = tanjiro.hello();


// function Car(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
// }

// const modelS = new Car('Tesla', 'Model S', 'Black');
// const supra = new Car('Toyota', "Supra", 'Red');
// const carrera = new Car('Porshe', 'Carrera', 'White');

// console.log(carrera.model)


class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.hello = function() {
            console.log('My car is a ' + this.make + ' ' + this.model)
        }
    }
}

const carrera = new Car('Porshe', 'Carrera', 'White');

console.log(carrera.model)
carrera.hello();

class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const tanjiro = new Human('tanjiro', 'kamado');
console.log(tanjiro.firstName);