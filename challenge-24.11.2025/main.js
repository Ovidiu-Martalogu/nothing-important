console.log(`loading......`);

/*
let array=[3,8,9,5,6,4,6,2];
let subset=[];
subset.length=5;

for (let i = 0; i < subset.length; i++) {
    subset[i]=array[i];
    
}
console.log(array);
console.log(`This is :${subset}`);

*/
/*
//with for in a function 
function result(array,subset) {
    subset.length = Math.floor(Math.random() * array.length + 1);
    
    for (let i = 0; i < subset.length; i++) {
        subset[i] = array[i];

    }
   
    console.log(` `);
    
    console.log(` `)
    console.log(`The subset of a given array is :${subset}`);
}
result([1, 2, 3, 4, 5, 6, 7, 8, 9],[]);
*/

/*
//with array.slice in a function 
function result(array,subset) {
    subset.length = Math.floor(Math.random() * array.length + 1);
    
    subset = array.slice(0,subset.length);
    console.log(` `);
    
    console.log(` `)
    console.log(`The subset of a given array is :${subset}`);
}
result([1, 2, 3, 4, 5, 6, 7, 8, 9],[]);
*/


//another function with given number of subset.length
function result(array,numberOfSubset) {
         
    let subset = array.slice(0,numberOfSubset);
       
    console.log(` `)
    console.log(`The subset of a given array is :${subset}`);
}
result([1, 2, 3, 4, 5, 6, 7, 8, 9],5);