const removeFromArray = function(array, ...valueToRemove) {
    const valuesToRemove = Array.from(valueToRemove);
    let repeat;

    valuesToRemove.forEach((number) => {
        repeat = repeatAmount(array, number);
        for(let i = 0; i < repeat; i++) {
            let index = array.indexOf(number);
            if(index != -1) array.splice(index, 1);
        }
    });

    return array;
};

function repeatAmount(array, value) {
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] == value) {
            count++;
        }
    }

    return count;
}

// Do not edit below this line
module.exports = removeFromArray;
