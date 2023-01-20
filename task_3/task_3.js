const func = (num1) => { 
    return (num2) => { 
        return num1 + num2;
    };
}

const sumPlusFive = func(5); 

console.log(sumPlusFive(4));


function sum(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

console.log(sum(1)(2);