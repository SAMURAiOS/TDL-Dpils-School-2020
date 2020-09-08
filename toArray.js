const letters = 
{
    a:1, 
    b:2
};
let arr = 10;
{
    console.log(Object.values(letters));
}
const entries = Object.entries(letters);
const array = entries[0].concat(entries[1]);
console.log(array)