console.log('Hello world!');
console.log('Hello world!');

let hours;
 
do {
    hours = prompt("Please enter the number of hours (only whole numbers):");
  } while (!/^\d+$/.test(hours));
    
hours = Number(hours);

let minutes = hours * 60;
let seconds = hours * 3600;

alert(`In ${hours} hours, there are ${minutes} minutes or ${seconds} seconds.`);
