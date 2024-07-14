const fibonacci = function(index) {
    const formattedIndex = Number(index);
    if(formattedIndex < 0) return 'OOPS'
    if(formattedIndex == 0 || formattedIndex == 1) return formattedIndex;

    let firstNum = 0;
    let secondNum = 1;
    let nextNum = 0;
    let hold = 0;

    for(let i = 0; i < index; i++) {
        if(i != 0) {
            nextNum = firstNum + secondNum;
            hold = secondNum;
            
            secondNum = nextNum;
            firstNum = hold;
        }
    }

    return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
