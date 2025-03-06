// 1.String
// Length Method

let sample= "Nayeem";
console.log(sample);

let test=sample.length;
console.log(test);

// Index Method

let sample1= "Nayeem";
let test1=sample1[0];
console.log(test1);

// charAT Method

let sample2= "Nayeem";
let test2=sample2.charAt(0);
console.log(test2);

// Concat Method

let sample3= "Mohamed";
let sample4= "Nayeem";

console.log(sample3.concat(sample4));
console.log(sample3.concat(" ",sample4));
console.log (sample3+sample4);

// Includes Method

let sample5= "Mohamed Nayeem";
console.log(sample5.includes("n"));

let email="mohammednayeem379@gmail.com";
console.log(email.includes("@"));

// toUpperCase

let sample6= "mohamed";
console.log(sample6.toUpperCase());

// toLowerCase

let sample7= "NAYEEM";
console.log(sample7.toLowerCase());

// trim Method

let sample8= "    Nayeem    ";
console.log(sample8.trim());


// 2.Numbers
// Integers & Decimals

let sample9= 10;
console.log(sample9);

// 3.Boolean
// True or False

let isJavaScriptFun=true;
let isSkyGreen=false;
console.log(typeof isJavaScriptFun);


// 4.Undefined
let x;
console.log (x);
console.log(typeof x);

// 5.Null
let y=null
console.log(y);
console.log(typeof y);

// 6.Symbol
let symbol1=Symbol("symbol");
let symbol2=Symbol("symbol");
console.log(symbol1===symbol2);