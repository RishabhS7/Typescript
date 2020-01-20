"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "welcome";
console.log(message);
//variable types
var isBeginner = true;
var total = 0;
var name = 'Rishabh';
var sentence = "my name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
var isnew = null;
var myname = undefined;
var list1 = [1, 2, 3];
var p1 = ['chris', 22]; //cant swap the vaules..fixed values with fixed types
//enum values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //gives the enum values starting from 0
//we can change the starting value by declaring == {red =5,green,blue}
//use code friendly enum values
// any type
//if u are unsure of dynamic values
var random = 10;
random = true;
random = 'rishabh';
//can call it as a function
//anothr type unknown
var variable = 10;
//console.log(variable.name);
//(variable as string).toUpperCase();//verfied by us
//see
var a;
a = 10;
a = true;
//works prfectly fine
var b = 10; //inferce the type for us..but only where there is inititalization
//b= true;
//gives error becasue the type is automatically determined by the ts
//uni type
var multitype; //provide inteligence support
multitype = 20;
multitype = true; //uni type has some restrictions but any type dont have any restrictions
//any type
var anytype;
anytype = 20;
anytype = true;
//funtions
//return type is also numbers
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//function fname(person:{firstname:string, lastname: string}){
function fname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p11 = {
    firstname: 'bruce',
    lastname: 'wayne'
};
fname(p11);
//classes
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeename = name;
    }
    employee.prototype.greet = function () {
        console.log("Good morning " + this.employeename);
    };
    return employee;
}());
var newemp = new employee('Rishabh'); //introducing new name
console.log(newemp.employeename);
newemp.greet(); // called the method
//class based inheritance
//inherit the properties of class employee
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this; //calling base class constructor
    } //manager class constructor calls the employee class constructor to use its properties
    manager.prototype.mwork = function () {
        console.log("Manager gives the tast");
    };
    return manager;
}(employee));
var m1 = new manager('Bruce');
m1.mwork();
m1.greet();
console.log(m1.employeename);
