// console.log(Math.PI);

// 1.Math.round()

// let x = Math.round(4.5);
// let y = Math.round(4.2);
// let z = Math.round(4.8);

// console.log(x);
// console.log(y);
// console.log(z);

// 1.Math.floor()

// let x = Math.floor(4.5);
// let y = Math.floor(4.2);
// let z = Math.floor(4.8);

// console.log(x);
// console.log(y);
// console.log(z);

// 1.Math.ceil()

// let x = Math.ceil(4.55465412);
// let y = Math.ceil(4.2);
// let z = Math.ceil(4.8);

// console.log(x);
// console.log(y);
// console.log(z);

// 1.Math.trunc()

// let x = Math.trunc(4.55465412);
// let y = Math.trunc(4.2);
// let z = Math.trunc(4.8);

// console.log(x);
// console.log(y);
// console.log(z);


// let x = Math.trunc(-40.8);
// let y = Math.floor(-40.08);

// console.log(x);
// console.log(y);


// Math.sign()

// let x = Math.sign(56);
// let y = Math.sign(-56);
// let z = Math.sign(0);

// console.log(x);
// console.log(y);
// console.log(z);


// let x = Math.pow(18, 5); //64
// console.log(18**5);
// console.log(x);

// let x = Math.sqrt(3125); //64
// console.log(x);


// let x= Math.abs(-45);
// console.log(x);


// let x = Math.min(45,54,4,54,5);
// console.log(x);

// let x = Math.min.apply(null ,[45 , 12 , 32]);
// console.log(x);

// Random

let n = Math.random();
// console.log(x*10);

function randomNum(min , max){
    // val = n* (max - min)
    val = n*(max - min) + min;
    return val
}

console.log(Math.round(randomNum(1000 , 10000)));







