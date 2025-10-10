// prompt('Input a value');
// let numaruleste=prompt('Input a value');
// console.log(numaruleste);
console.log('main.js loaded...')

// debugger;


//user input a value
let distInKm=prompt("Input the number of kilometers");
distInKm=Number(distInKm);
//processing instructions
let distInMiles= distInKm*0.62;

//display message from user
alert(`${distInKm} km is:${distInMiles} in miles.`);

//

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10) + 1;
