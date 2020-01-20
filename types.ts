export {};
let message = "welcome";

console.log(message);


//variable types
let isBeginner : boolean = true;
let total: number = 0;
let name: string = 'Rishabh';

let sentence: string = `my name is ${name}`; 
console.log(sentence);
let n : null = null;
let u: undefined = undefined;

let isnew : boolean = null;
let myname:string = undefined;

let list1: number[]= [1,2,3];


let p1 :[string,number]=['chris',22];//cant swap the vaules..fixed values with fixed types


//enum values
enum Color {Red,Green,Blue};
let c:Color = Color.Green;

console.log(c); //gives the enum values starting from 0
//we can change the starting value by declaring == {red =5,green,blue}
//use code friendly enum values


// any type
//if u are unsure of dynamic values
let random : any = 10;
random = true;
random = 'rishabh';

//can call it as a function


//anothr type unknown
let variable: unknown = 10;

//console.log(variable.name);
//(variable as string).toUpperCase();//verfied by us



//see
let a;
a= 10;
a = true;
//works prfectly fine

let b = 10;//inferce the type for us..but only where there is inititalization
//b= true;
//gives error becasue the type is automatically determined by the ts

//uni type
let multitype: number | boolean;//provide inteligence support
multitype = 20;
multitype = true;//uni type has some restrictions but any type dont have any restrictions
//any type
let anytype : any;
anytype = 20;
anytype = true;

//funtions
                                    //return type is also numbers
function add (num1:number,num2:number):number{
    return num1+num2;
}
add(5,10)
//add(2,'10')--givs error


//interfces
interface p11{
    firstname: string;
    lastname:string;//if i use - lastname?:string; -- i made it optional..can introduce or not the last name in p11..
}
//function fname(person:{firstname:string, lastname: string}){
    function fname(person:p11){//this can be done using interface when our domain is heavy
    console.log(`${person.firstname} ${person.lastname}`); 
}
let p11 ={
    firstname : 'bruce',
    lastname:'wayne'
};
fname(p11);


//classes

class employee{          //class name
    employeename: string;
    constructor(name:string){    // a constructor
        this.employeename = name;
    }
    greet(){      // and a method...
        console.log(`Good morning ${this.employeename}`);
    }
}


let newemp = new employee('Rishabh');//introducing new name
console.log(newemp.employeename);
newemp.greet();     // called the method



//class based inheritance

//inherit the properties of class employee

class manager extends employee{
    constructor(managername:string){  //needs to exept the nme paramenter
        super(managername)             //calling base class constructor
    }//manager class constructor calls the employee class constructor to use its properties
    mwork(){
        console.log(`Manager gives the tast`);
    }
}

let m1 = new manager('Bruce');
m1.mwork();
m1.greet();
console.log(m1.employeename);
























