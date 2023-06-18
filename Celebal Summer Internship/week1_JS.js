//*************************(1)*********************************
//3 types of variable declaration method 
var x,x,z;  //it was used much during period 1995-2015
x=1, y=2, z=3;
console.log(x,y,z);

//new methods which are most used now - let , const
let a,b,c;
a=7,b=8,c=9;
console.log(a,b,c);

const xx=4,yy=5,zz=6; //once declared can't be modified
console.log(xx,yy,zz);


//*************************(2)*********************************
//variable names allowed - (letter, underscore, dollarsign)before names but not any other characters
let name,$name, _name; //--> defined
// let 1name; --> //undefined


//*************************(3)*********************************
// var --> can be reclard again and again
var city="acd"; 
var city="gfd";
console.log(city);

//let --> can't be declared again
let d='temp';
// let d='tempo'; --> not possible
let D='tempo';//case sensitive
console.log(d,D);


//*************************(4)*********************************
//operators - 
//Arithematic - add, subtract, multiply, divide, modulus
let p,q=5; 
p=1+q; //add
q=p-2; //subtract
p=q*3; //multiply
p=p/q; //divide
q=q%p; //modulo
console.log(p,q);

//incemental - increment, decrement
p++;//increment
q--;//decrement

//assignment
p+=q;//addition assignment operator 
p-=q;//subtraction assignment operator
p*=q;//multipication assignment operator
p/=q;//divide assignment operator
p%=q;//mudulo assignment operator

// comparison operator
//==, != , ===(strict equal to), !=, <, >, <=, >=
f=5,g='5';
console.log(f==g, f===g); //=== -> goes on to check the type 

//logical operator - && , || , !
if(5>4 && 4<5) console.log('true');
if(5>4 || 4<5) console.log('false');

//string operator -- concatenate(+)
let p1='qwer';
let q2="ty";
p1+=q2;
console.log(p1);

//conditional operator - (condition) ? exp1 : exp2
console.log((5>4)? 'yes': 'no');

//*************************(5)*********************************
//Data types
//primitive - number, string, boolean, null, undefinedm object
console.log(typeof(5), typeof('5')); //--> number, string

let qqq;
console.log(typeof(qqq)) //--> undefined

//composite - array, object (multivalue store)


//*************************(6)*********************************
//conditional statement - if , else if, if

//switch -- strict comparison(===)
let val="0";

switch(val){
  case 0: console.log('its case 0');
  case "0": console.log('its case"0"');
  case 1: console.log('its case 1');
  case "2": console.log('its case "1"');
}
//since no break statements were used hence it print all the cases starements 
//including the case where the condition becomes true  first time

switch(val){
  case 0: console.log('its case 0');
  break;
  case "0": console.log('its case"0"');
  break;
  case 1: console.log('its case 1');
  break;
  case "2": console.log('its case "1"');
  break;
}
//only print the case where it becomes true

val=5;
switch(val){
  case 0: console.log('its case 0');
  break;
  case "0": console.log('its case"0"');
  break;
  case 1: console.log('its case 1');
  break;
  case "2": console.log('its case "1"');
  break;

  default : console.log('I am the boss');
}
//default satatement executes where no conditions matches

//loops- for, while, do while, for/in, for/of
let person = {
  fname: 'John',
  lname: 'Doe',
  age: 27
};

for(let x in person){
  console.log(x, ":", person[x]);
}

const cars=["BMW", "Volvo", "Audi"];

let data =" ";
for(let x of cars){
data+=x+" ";
}

console.log(data);//-> BMW Volvo Audi




