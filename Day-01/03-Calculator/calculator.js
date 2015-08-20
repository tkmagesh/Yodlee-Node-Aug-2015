/*Create a calculator object that has the following methods
add(x,y)
subtract(x,y)
multiply(x,y)
divide(x,y)

invoke these methods with sample values and print the results
*/

var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
}

module.exports = calculator;
