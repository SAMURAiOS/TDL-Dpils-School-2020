/*let age = 29;
let year = 2020;
// let userName every second, third and etc word, will be uppercase 
console.log(age);

age = 50;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);*/

/*console.log('hello world');
let company = 'TestDevLab'
let email = 'deniss28@gmail.com'
console.log(email, company);

let firstName = 'Aleksandrs ';
let lastName = 'Panass';
let fullName = firstName + '--' + lastName;

console.log(fullName);
//gettingcharacter
console.log(firstName[0]);

//lenght
let lenght = lastName.length;
console.log(lenght);

//string methods
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//let result = email.slice(0, 6);
//let result = email.substr(0, email.length);
let result = email.replace('s', 'x');

console.log(result);

//
let numbers = '12345'
let numberOne = numbers[0] + ' ' + numbers[1] + ' ' + numbers[2] + ' ' + numbers[3] + ' ' + numbers[4];
let numberTwo = numbers[4] +  numbers[3] +  numbers[2] + numbers[1] + numbers[0];

console.log(numberOne);
console.log(numberTwo);
//console.log(numbers[8] + [4] + [3] + [2] + [1]);*/

///////////////numbers and math operations

/*let radius = 10;
const pi = 3.14;

//+, -, /, *, **, %

console.log(10/2);
//let result = radius % 3;
//console.log(result);

let circle = pi * radius**2;
console.log(circle);

let formula = 5 * (10-3)**2;
console.log(formula);

let n = 10;
n++;
console.log(n);

let x = 10;
x--;
console.log(x);

let a = 10;
console.log(a-=10);

console.log(5/'Hello');

let humans = 5;
console.log('There is' + ' ' + humans + ' ' + 'humans');

console.log(`There is ${humans} humans`);

let hours = 34;
let minutes = 3600;
let seconds = hours*minutes;
console.log(`There is ${seconds} seconds in ${hours} hours`);*/

//////////////////arrays

/*let names = ['Alex', 'Deniss', 'Max'];
console.log(names);

console.log(names[1]);

let numbers = [1, 2, 3, 4];
let random = ['Alex', 20];
console.log(random.length);

//array methods

let result = names.join('-');
console.log(result);

let resultOne = names.indexOf('Deniss');
console.log(resultOne);

let resultTwo = names.concat(['ken','jun']);
console.log(resultTwo);

let resultThree = names.push('Ivan');
console.log(names);

names.pop();
console.log(names);

let myColor = ['Red', 'Green', 'White'];
console.log(myColor.join(','));
console.log(myColor.join('+'));*/

///////////////////Boolean & comparisons

/*console.log(true, false, 'true', 'false');

let names = ['Deniss','Alex','Max'];
let email = 'test.@gmail.com';

let result = email.includes('gmail');
console.log(result);

let resultOne = names.includes('Alex');
console.log(resultOne);

let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age < 20);
console.log(age > 20);
console.log(age <= 25);
console.log(age >= 25);
console.log(age != 20);

//loose comparison
console.log(age == '25');

//strict compatison
console.log(age === '25');

//

let numberThree = '100';
numberThree = Number(numberThree);
console.log(numberThree + 1);

console.log(typeof numberThree);
console.log(Number('hello'));
console.log(String(50));
console.log(Boolean(0));
//0 false integer
let input = '2010';
input = Number(input);
console.log(`The ${input + 10} the best year`);

console.log(`The ${Number(input) + 10} the best year`);
*/
/////////////////loop
//for

/*for(let i = 0; i < 5;i++)
{
    console.log(i);
}

const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

for(let i = 0; i < names.length;i++)
{
    console.log(names[i]);
}

//while

let j = 0;
while(j < 5)
{
    console.log(`Current number: ${j}`);
    j++;
}

//  if statement

const age = 18;

if (age > 21)
{
    console.log('Welcome to our page');
}

const workers = ['Deniss','Alex','Ina','Maria'];
if (workers.length > 3)
{
    console.log('That is a big company');
}
//else if*/
/*
const password = 'pssw0rd133';

if (password.length > 12 && password.includes('@'))
{
    console.log('Password is strong');
}
else if(password.length > 8 || password.includes('@'))
{
    console.log('password is too short or not strong');
}
else if (!password.length == 10)
{
    console.log('We dont like your password');
}
else
{
    console.log('Password is weak');
}

console.log(!true);
console.log(!false);
//ages

let ages = [9, 18, 35, 15];
let time = 21;
for(let i = 0; i < ages.length;i++)
{
    if (ages[i] >= 18 && time <= 21)
    {
        console.log(`This person can drink alcohol, you are ${ages[i]}`);
    }
    else if (time >= 22)
    {
        console.log(`${ages[i]} can't drink at all`);
    }
    else
    {
        console.log(`This person cannot drink alcohol,you are ${ages[i]}`);
    }
}
///////////////Homework

let numbers = [2, 40 , 8];
//test
for (let i = 0; i <= numbers.length; i++) 
{
   if ((numbers.length + 1) % 2) 
   {
       let result = numbers.reduce((sum, current) => sum + current);
       console.log(`The mean number is ${result / numbers.length}`);
   } 
   else if ((numbers.length +1 ) % 3 ) 
   {
       console.log(`The second biggest number is ${numbers[numbers.length-2]}`);
   } 
   else 
   {
       console.log('Error')
   }
}*/

/////////////Functions

//function declarations

function greet()
{
    console.log('hello there');
}

/*greet();
greet();
greet();
*/
//function expression

const speak = function(name = 'Maris', surname = 'Petrov')
{
    console.log(`Hello ${name} ${surname}`);
};

speak('Deniss');
speak('Aleksandrs');
speak('Ina');

speak();

const calculateArea = function(radius)
{
    let area = 3.14 * radius**2;
    return area;
}

const myCircle = calculateArea(5);
console.log(myCircle);

//arrow functions

const arrowCalculateArea = (radius) => 
{
    return 3.14 * radius**2;
}

console.log(`Area is: ${arrowCalculateArea(10)}`);