const convertToCelsius = function(temperature) {
  const conversion = (temperature - 32) * 5/9;
  if(conversion % 1 != 0) return Number(conversion.toFixed(1));
  
  return conversion;
};

const convertToFahrenheit = function(temperature) {
  const conversion = (temperature * 9/5) + 32;
  if(conversion % 1 != 0) return Number(conversion.toFixed(1));
  
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
