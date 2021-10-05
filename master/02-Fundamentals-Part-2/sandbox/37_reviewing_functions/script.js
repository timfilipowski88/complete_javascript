// Reviewing Functions
const calcAge = function(birthYear) {
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementDifference = 65 - age;
  if(retirementDifference > 0) {
    console.log(`${firstName} retires in ${retirementDifference} years.`);
    return retirementDifference;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1988, 'Tim'));
console.log(yearsUntilRetirement(1950, 'Mike'));