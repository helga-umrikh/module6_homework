const exponentFunc = (num1, num2) => {
    if ((Number.isInteger(num1) && Number.isInteger(num2)) !== true){
    return 'Numbers are not integer!';
    } else {
        let result = num1;
    
    for(let i = 1; i <= (num2-1); i++) {
      result = result * num1;
    }
    return result;
    }

    }

console.log(exponentFunc(3, 3));
console.log(exponentFunc(3.3, 3));