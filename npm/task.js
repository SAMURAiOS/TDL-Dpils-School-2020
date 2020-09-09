let rectangle =
{
    edgeOne: 10,
    edgeTwo: 2,
    getArea: function()
    {
        console.log(`Ractangle area value = ${this.edgeOne*this.edgeTwo} default rectangle value of edge one is = ${this.edgeOne} and edge two = ${this.edgeTwo}`);
    },
    getInfo: function()
    {
        console.log(`Rectangle edge1: ${this.edgeOne} edge2: ${this.edgeTwo}`);
    }
};
console.log(rectangle.getArea());
let circle = 
{
    radius: 32,
    getArea: function()
    {
        console.log(`Cicle radius sum: ${2*Math.PI*this.radius} default radius value: ${this.radius}`);
    },
    getInfo: function()
    {
        console.log(`Circle radius: ${this.radius}`);
    }
};
console.log(circle.getArea());
let square = 
{
    edge: 4,
    getArea: function()
    {
        console.log(`Square edge value ${this.edge*this.edge} Square default value ${this.edge}`);
    },
    getInfo: function()
    {
        console.log(`Square edge1: ${this.edge}`);
    }
};
console.log(square.getArea());