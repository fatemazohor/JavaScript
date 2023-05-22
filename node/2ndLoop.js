// let userName="java";
// let password="srfs5";
// if(userName=="java"){
    
//     if(password=="srfs35"){
//         console.log("Welcome "+userName);
//     }
//     else{
//         console.log("password incorrect");
//     }
// }

// else{
//     console.log("username not found");
// }

// // grade point assign.

// let number=2;

// if(number>=100){
//     console.log("Invalid Number");

// }
// else if(number>=80){
//     console.log("A+");

// }
// else if(number>=70){
//     console.log("A");
// }
// else if(number>=60){
//     console.log("A-");
// }
// else if(number>=50){
//     console.log("B");
// }
// else if(number>=40){
//     console.log("C");
// }
// else if(number>=33){
//     console.log("D");
// }
// else if(number>=0){
//     console.log("F");
// }
// else{
//     console.log("Invalid Number");
// }

// switch statement

// let day=3;

// switch(day){
//     case 1:
//         console.log("Saturday");
//         break;
//     case 2:
//         console.log("Sunday");
//         break;
//     case 3:
//         console.log("Monday");
//         break;
//     case 4:
//         console.log("Tuesday");
//         break;
//     case 5:
//         console.log("Wednesday");
//         break;
//     case 6:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("invalid");
// }

// prime number

let n=97;
let counter=0;

for(let i=1; i<=n; i++){
    if(n%i==0){
        counter=counter+1;
        // console.log(counter);
    }
    else{

    }   
}
if(counter==2){
    console.log("Prime Number");
}
else{
    console.log("NOT prime number");
}

// Swapping

let number1=0;
let number2=1;
let sum=0;
console.log(number1+"\n"+number2);

for(let i=3; i<=8;i++){
    sum=number1+number2
    console.log(sum);
    number1=number2;
    number2=sum;
    
}
