const dispNums = (num1, num2) => {

    let counter = num1;
    
    let timeR = setInterval(function() {
        console.log(counter);

        if(counter === num2){
        clearInterval(timeR);
        }
        counter++; 
    }, 1000)
    }

dispNums(3, 7)