
sumDigits=n=>[...Math.abs(n)+''].map(Number).reduce((a,v)=>{return a+v});
sumDigits=n=>Math.abs(n).toString().split("").map(Number).reduce((a,v)=>{return a+v});
const sumDigits = number => Math.abs(number).toString().split("").map(Number).reduce((accumulator, value) => {return accumulator + value});

/*
Status: Solved
*/