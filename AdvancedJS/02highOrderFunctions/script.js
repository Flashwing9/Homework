console.log("works");

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then( (res) => res.json())
.then(data => {
  const people = data;
  // console.log(people);
  // fetch all students with ana average grade higher than 3
  const avgGradMin3 = people.filter(people => people.averageGrade >= 3);
  // console.log(avgGradMin3);
  // all female student names with an average grade of 5
  const femaleAvgGrad5 = people.filter((people) => people.gender === "Female" && people.averageGrade === 5)
  .map(people => `${people.firstName}`);
  // console.log(femaleAvgGrad5);
  // all male student full names who live in Skopje and are over 18 years of age
  const maleSkopjeOver18 = people.filter((people) => people.gender === "Male" && people.age >= 18)
  .map(people => `${people.firstName} ${people.lastName}`);
  // console.log(maleSkopjeOver18);
  // average grades of all female students over 24
  const avgGradesFemaleOver24 = people.filter((people) => people.gender === "Female" && people.age >= 24)
  .map(people => `${people.averageGrade}`);
  // console.log(avgGradesFemaleOver24);
  // all male students with name starting with B and average grade over 2
  const maleNameStartsWithBAvgGrade2 = people.filter((people) => people.gender === "Male" && people.averageGrade >= 2 && people.firstName[0] === "B")
  // console.log(maleNameStartsWithBAvgGrade2);
})