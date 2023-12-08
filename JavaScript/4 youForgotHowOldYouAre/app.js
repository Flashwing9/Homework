function calculateAge(birthYear) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yourCurrentAge = currentYear - birthYear;

    console.log(`you are ${yourCurrentAge} years old`);
    return yourCurrentAge;
}
calculateAge(2002);
calculateAge(-356);
calculateAge(2022);