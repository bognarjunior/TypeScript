interface Carro {  
  readonly motor: string;
  readonly portas: number;
  combustivel: string;
  cor?: string;
  airBag?: boolean;
}

let omega: Carro = {
  motor: "4.1", 
  portas: 2, 
  combustivel: "Gasolina"
}

omega.cor = "preta";
omega.combustivel = "Gás";

/**
 * A IDE de desenvolvimento apontará um erro,
 * pois motor é readonly
 */
//omega.motor = "3.0";

console.log(omega);

class Animal {
  name: string;
    constructor(name: string) { 
      this.name = name; 
    }
    move(distance: number = 0) {
      console.log(`${this.name} se move por ${distance}m.`);
    }
}

class Dog extends Animal {
  constructor(name: string) { 
    super(name); 
  }

  move(distance = 15) {
    console.log("Corre...");
    super.move(distance);
  }
}

let buddy = new Dog("Buddy");

buddy.move();

//Public, Private, Protected
class Person {
  public name: string;
  private _age: number;
  protected height: number;
  
  public get age() : number {
    return this._age;
  }

  public set age(v : number) {
    this._age = v;
  }
}

class Employee extends Person{
  setHeight(height: number){
    this.height = height;
  }
}

let employee = new Employee();
employee.name = "Bognar";
employee.age = 35;
employee.setHeight(1.84);

//Indicará erro
//employee._age = 35;
//employee.height = 1.84;

console.log(employee)