console.log('Hello world!');
console.log('Hello world!');

let hours = prompt("Please enter the number of hours");
hours = Number(hours);

do {
    hours = prompt("Please enter the number of hours (only digits):");
  } while (!/^\d+$/.test(hours));

let minutes = hours * 60;
let seconds = hours * 3600;

alert(`In ${hours} hours, there are ${minutes} minutes or ${seconds} seconds.`);
