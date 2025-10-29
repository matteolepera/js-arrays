const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//
//Con Ciclo
// const lastTeachers = teachers.length - 1;

// for (let i = lastTeachers; i >= 0; i--) {
//   const reversedTeachers = teachers[i];
//   console.log(reversedTeachers);
// }
// Metodo Array
// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
//
//Con Metodo Array
// const longNames = teachers.filter(teacherLong => teacherLong.length >= 5);
// console.log(longNames);
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
} console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// let indexEd = teachers.indexOf("Ed");
// teachers.splice(indexEd, 1);
// console.log(teachers);

// for (let i = 0; i < teachers.length; i++) {
//   if (teachers[i] === "Ed") {
//     teachers.splice(i, 1);
//   }
// } console.log(teachers)


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");