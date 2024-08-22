
// Add two numbers 

// const sum = (x,y) =>{
//     return x + y; 
// }
// console.log(sum(5,10));

// With Prompts

// let a = +prompt("Enter first Number");
// let b = +prompt("Enter second Number");

// //let c = a * b ;
// let c = a + b ;

// console.log(c);

// with function

// let a = +prompt("Enter first Number");
// let b = +prompt("Enter second Number");

// const sum = (a,b)=>{
//     return a + b;
// }
// console.log(sum(a,b));


// to find largest number in array 

// const arr = [1,30,59,67,72,86,73];

// let max = arr[0];

// for ( let i=0; i<arr.length; i++){
//     if (arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);

// to find smallest number in array 

// const a = [10,23,35,56,78,45,23];

// let min = a[0];

// for (let i=0;i<a.length;i++){
//     if( a[i]<min){
//         min = a[i]
//     }
// }
// console.log(min);


// to find second largest number in array

// const arr = [4,2,34,44,45,46,76,87,23];

// if (arr[0]>arr[1]){
//     max = arr[0];
//     secondmax = arr[1];
// }else {
//     max = arr[1]
//     secondmax = arr[0];
// }

// for ( let i=0; i<arr.length;i++){
//     if(arr[i]>max){
//         secondmax=max;
//         max = arr[i]
//     }else if(arr[i]>secondmax){
//         secondmax= arr[i];
//     }
// }
// console.log(max)
// console.log(secondmax)


// to find prime number

// const arr = [2,3,4,7,33,42,65,11,13,17];

// let prime = [];

// for (i=0;i<arr.length;i++){
//     if (arr[i]%2!==0){
//         prime.push(arr[i]);
//     }else if ( arr[i]==2){
//         prime.push(arr[i])
//     }
// }
// console.log(prime);


// to find even and odd number

// const arr = [1,32,45,34,26,65,7,8,6,67];

// let even =[];
// let odd =[];

// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }
// console.log(even);
// console.log(odd);


// to find positive and negative number

// const arr = [1,-10,34,9,-18,0];

// let positive = [];
// let negative =[];

// for (let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         positive.push(arr[i]);
//     }else if (arr[i]<0){
//         negative.push(arr[i]);
//     }
// }
// console.log("Positive numbers are :" + positive)
// console.log("negative numbers are :" + negative)


// different way 

// let a = 15;

// if(a>0){
//     console.log("positive number")
// }else if (a==0){
//     console.log("undefined")
// }else{
//     console.log("negative");
// }


// to find palindrome number 

// let string = prompt("enter any word");

// let arr = string.split('');
// //console.log(arr);
//  let revArr = arr.reverse();
//  //console.log(revArr);
// let joinArr = revArr.join('');
// //console.log(joinArr);
// if( string == joinArr){
//     console.log(string + "is a palindrome number")
// }else{
//     console.log(string + "not a palindrome number")
// }


// without built in functions

// let string = prompt("enter any word");
// let a = string.length; 
// let msg = `${string}`+"it is a palindrome";

// for (let i=0;i<a/2;i++){
//    if(string[i] != string[a-1-i]){
//         msg = `${string}`+ "is a not palindrome number";
//    }
//     }

// console.log(msg)


// Fibocanni Series

// let a = 0;
// let b = 1;

// console.log(a)
// console.log(b)

// for ( let i=0; i<8 ; i++){
//     temp = a + b; // 0+1
//     console.log(temp);
//     a = b;        // a = 1 
//     b = temp;     // b = 1 
// }


// swap number

// let a = 10;
// let b = 20;

// [a,b] = [b,a]

// console.log("a = "+a);
// console.log("b = "+b);


// to find factorial 

// let num = prompt("Enter any Number")
// fact = 1;

// for (let i=1;i<=num;i++){
//     fact = fact * i;
//     //console.log(fact);
// }
// console.log(fact);

// by recursion

// let num = prompt("Enter any number")
// var fact=1;
// let factr = (n) => {
//     if (n>num){
//         return;
//     }
//     //let temp = fact;
//     fact = fact * n
//         n++;
//     factr(n);
// }
// factr(1);
// console.log(fact);


// table of num

// let num = 2; 

// for (let i=1;i<=10;i++){
//     // console.log(i);
//     tab = num*i;     
//     console.log(tab)
// }

// input from user

// let num = prompt("Enter any number")

// for (let i=1;i<=10;i++){
//     tab = num*i
//     console.log(tab)
// }
// //console.log(tab);


// armstrong number

// let a = prompt("enter num1")
// let b = prompt("enter num2")

// for (let i=a; i<=b;i++){
//     var temp = i;
//     var noofDigits = i.toString().length;
//     var sum = 0;
//     while ( temp>0){
//         var digit = temp%10;
//         temp =parseInt(temp/10);
//         sum += digit ** noofDigits;
//     }
//     if ( sum == i){
//         console.log(i)
//     }

// }


let a = prompt("enter num1")
let b = prompt("enter num2")

for ( let i=a;i<=b;i++){
    var temp = i;
    var noofDigits = i.toString().length;
    var sum =0;
while (temp >0 ){
    var digit = temp%10;
    temp - parseInt(temp/10);
    sum += digit **noofDigits;
}
if ( sum == i ){
    console.log(i)
}
}
