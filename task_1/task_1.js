const evenOddcount = (array) => {
    let arrOnlyNumbers = array.filter( element => typeof(element) === 'number');

    let odd = 0;
    let even = 0;
    let zero = 0;
    let result;

    for(let i = 0; arrOnlyNumbers.length > i; i++) {
        if (arrOnlyNumbers[i] === 0) {
        zero++;
        } else if(arrOnlyNumbers[i] % 2 === 0) {
        even++;
        } else {
        odd++;
        }
    }
    return result = 'even numbers: ' + even + ', odd numbers: ' + odd + ', zero symbols: ' + zero;
    }

let massiv = [1, 2, 6, 0, 0, 7, NaN];
console.log(evenOddcount(massiv));