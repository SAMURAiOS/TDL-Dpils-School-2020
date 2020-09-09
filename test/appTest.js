const assert = require('chai').assert;

const app = require('../app.js');

describe('App',function()
{
    it('app should return hello',function()
    {
        assert.equal(app.sayhello(),'hello');
    });
    it('app sayHello should return string',function()
    {
        assert.typeOf(app.sayhello(),'string');
    });
    it('app should accept value1 and value2',function()
    {
        assert.equal(app.addNumber(4,2),6)
    });
    it('app should compare numbers if they are above value', function()
    {
        assert.isAbove(app.addNumber(3,7),5);
    });
});

// describe('App',function)
// {
//     it('app should accept value1 and value2',function(value1, value2)
//     {
//         assert.
//     })
// }