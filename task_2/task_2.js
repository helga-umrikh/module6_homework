const isNumprime = (num) => {
    if (num > 1000) {
        return 'Incorrect data';
    } 
    
    if (num === 0 || num === 1) {
        return 'Not  a prime or a composite number';
    }
    
    if (num === 2) {
        return num + ' is a prime number';
    } 

    if (num % 1 === 0 && num > 0 && num / 1 === 0 && num / num === 0) {
        return num + ' is a prime number';
    } else {
        return num + ' is a composite number';
    }
    
}
    
console.log(isNumprime(67));