// Code your solution in this file!
// declarations!
const comapanyName = 'Scuber';
let mostProfitableNeigghbourhood = 'Chelsea';
let comapanyCeo = 'Susan Smith';


const assert = require('chai').assert;
//importing the asset module.
const {comapanyName, mostProfitableNeighbourhood, companyCeo} = require('.index');
//variable import

describe('index.js', function(){
    //test 1 --- the company name should be scuber.
    it('should set companyName to Scuber',function(){
        assert.equal(comapanyName, 'Scuber');

    })
});

//test 2 --correct defination.
it('should define companyName as a const', function(){
    assert.match(comapanyName.toString(), /^Scuber$/);

})
//The third test:-- correct defination of profitable neigbourhood.
it('should set mostProfitableNeighbourhood to Chelsea', function(){
    assert.match(mostProfitableNeighbourhood.toString(),/^Chelsea$/);

});

//test 4 --using let to define.
it('should define mostProfitableNeigghbourhood using let', function(){
    assert.match(mostProfitableNeighbourhood.toString(),/^Chelsea/)
;
});


//Test 5 -- company ceo shoould be equal to Susan Smith.
it('should set companyCeo to Susan Smith', function(){
    assert.equal(comapanyCeo, 'Susan Smith');

});

//test 6 -- companyCeo defination using let.
it('companyCeo should be defined using let', function(){
    assert.match(companyCeo.toString(),/^Susan Smith$/);
});