var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var omega = {
    motor: "4.1",
    portas: 2,
    combustivel: "Gasolina"
};
omega.cor = "preta";
omega.combustivel = "Gás";
/**
 * A IDE de desenvolvimento apontará um erro,
 * pois motor é readonly
 */
//omega.motor = "3.0";
console.log(omega);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " se move por " + distance + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 15; }
        console.log("Corre...");
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var buddy = new Dog("Buddy");
buddy.move();
//Public, Private, Protected
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (v) {
            this._age = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.setHeight = function (height) {
        this.height = height;
    };
    return Employee;
}(Person));
var employee = new Employee();
employee.name = "Bognar";
employee.age = 35;
employee.setHeight(1.84);
//Indicará erro
//employee._age = 35;
//employee.height = 1.84;
console.log(employee);
//# sourceMappingURL=index.js.map