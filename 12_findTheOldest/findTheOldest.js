function getAge(birth, death) {
    const currentYear = new Date().getFullYear();

    if(death == undefined) return currentYear - birth;
    return death - birth;
}

const findTheOldest = function(array) {
    return array.reduce((previous, current) => {
        let previousAge = getAge(previous.yearOfBirth, previous.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        if(currentAge > previousAge) return current;
        return previous;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
