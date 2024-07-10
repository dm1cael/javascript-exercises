const sumAll = function(start, end) {
    let sum = 0;
    if(start < 0 || typeof(end) != 'number') return 'ERROR';

    if(start > end) {
        let hold = end;
        end = start;
        start = hold;
    }

    console.log('here')
    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
