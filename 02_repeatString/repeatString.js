const repeatString = function(text, amount) {
    if(amount < 0) return 'ERROR'
    
    let finalText = '';
    
    for(let i = 0; i < amount; i++) {
        finalText += text; 
    }

    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
