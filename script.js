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

/*function greet()
{
    console.log('hello there');
}

/*greet();
greet();
greet();
*/
//function expression

/*const speak = function(name = 'Maris', surname = 'Petrov')
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

/*const bill = function(product, tax)
{
    let total = 0;
    for (let i = 0;i < product.length;i++)
    {
        total += product[i] + product[i] * tax;
    }
    return total;
}*/
//console.log(`Your bill is: ${bill(50)}`);

/*const bill = (product,tax) =>
{
    let total = 0;
    for (let i = 0;i < product.length;i++)
    {
        total += product[i] + product[i] * tax;
    }
    return total;
}*/

/*let people = ['Max', 'Deniss', 'Alex', 'Ivan'];

for (let i = 0; i < people.length;i++)
{
    console.log(people[i]);
}

people.forEach(person => 
    {
        console.log(person);
    });
*/
///Task

/*let mas = [89, 46, -4, 46, 35];

function insertSort(mas) 
{
    let n = mas.length;
        for (let i = 1; i < n; i++) 
        {
            let currentposition = mas[i];
            let j = i-1; 
            while ((j > -1) && (currentposition < mas[j])) 
            {
                mas[j+1] = mas[j];
                j--;
            }
            mas[j+1] = currentposition;
            console.log(mas);
        }
    return mas;
}

insertSort(mas);
console.log(`Sorted array: ${mas}`);*/

////////////Objects

/*let user =  
{
    name: 'Aleksandrs',
    age: 23,
    email: 'test@tesdevlab.com',
    location: 'Latvia',
    blogs: ['Why 2020 is the best year','Why burgers are good?'],
    // login: function()
    // {
    //     console.log('The user logged in');
    // },
    login()
    {
        console.log('The user logged in');
    },
    // logout: function()
    // {
    //     console.log('The user logged out');
    // },
    logout()
    {
        console.log('The user logged out');
    },
    logBlogs() 
    {
        this.blogs.forEach(x => 
            {
                console.log(x);
            });
    }
};
console.log(user.logBlogs());*/
/*user.name = 'Alex';
console.log(user.logBlogs());

const key = 'age';
console.log(user[key]);
*/


/*let car =
{
    label: 'Audi',
    fuel: 'Gas',
    control: 'automatic',
    doorop: function()
    {
        console.log('You successfully opened a door');
    },
    doorcl: function()
    {
        console.log('You successfully closed the door');
    }
};
console.log(car.label);
console.log(car.doorop());*/

//////////////Math objects
/*
console.log(Math);
console.log(Math.PI);

const number = 7.8;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

///random
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

let array = 
[
    {
        name: 'Alex',
        age: 23
    },
    {
        name: 'Max',
        age: 24
    }
]
console.log(array[0].name);

let letters =
[
    {title: 'A', score: 1},
    {title: 'K', score: 9},
    {title: 'B', score: 6},
    {title: 'C', score: 14},
    {title: 'D', score: 2},
    {title: 'E', score: 8},
    {title: 'F', score: 5},
]

scrabble = function(letters)
{
    let sum = 0;
    letters.forEach(element => 
    {
        sum += element.score;
    });
    return sum;
}
console.log(scrabble(letters));*/

//primitive type vs reference type
//primitive type

/*let scoreOne = 50;
let scoreTwo = scoreOne;

scoreOne = 100;
console.log(`ScoreOne: ${scoreOne},  scoreTwo: ${scoreTwo}`);

//reference type

let userOne = {name: 'Alex', age: 23}
let userTwo = userOne;

console.log(userOne,userTwo);
userTwo.age = 40;

console.log(userOne,userTwo);*/

//Function

/*let object = {a: 1, b: 1};
let objArray = [];
toArray = function(object)
{
    for (let i = 0; i < objArray.length; i++) 
    {
        const object = array[i];
    }
    return objArray;
}
console.log(objArray);*/

//Function toArray
//Accepts object
//returns Array
//object - {a: 1, b: 2}
//returns - [["a", 1], ["b", 2]]
//add code to file toArray.js 
//and push to Github

