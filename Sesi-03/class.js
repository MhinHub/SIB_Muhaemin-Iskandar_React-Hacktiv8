import colors from 'colors'; // Hanya untuk menampilkan warna di terminal
colors.enable() 

// ES6


// Mendefinisikan class

export default class Employee {
    constructor(name){ // Constructor
        this._name = name;
    }
    getName(){
        return this._name;
    }
    doWork(){
        return this._name + ' is working.';
    }
}

let tony = new Employee('Tony');
console.log(tony.doWork().bgYellow + '-class'); // 'Scott is working.'

// Class Inheritance
export class Manager extends Employee {
    constructor(name, department){
        super(name); // Method super digunakan untuk mengakses method dari class induk
        this._department = department;
    }
    getDepartment(){
        return this._department;
    }
}

let stark = new Manager('Stark', 'Engineering');
console.log(stark.getDepartment().bgYellow + '-inheritece'); // 'Engineering'


