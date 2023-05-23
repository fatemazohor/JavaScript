// // while loop: when start point is not clear. Use only one condition.
// let n=3;
//   while(n<=5){
//      console.log(n);
//      n++;
// }


// // do while loop:
// do{
//     console.log(n);
//     n++;
// }while(n<10);


// print 1-50 number except numbers where number%3==0 && number%5==0
// Solve01: While Loop
let m=1;
while(m<=50){
    if(m%3==0 && m%5==0){
        m++;
        continue;
    }
    else{
        console.log(m);
    }
    m++;
}


// Solve02:For loop 
for(let i=1; i<=50;i++){
    if(i%3==0 && i%5==0){

    }
    else{
        console.log(i);

    }
    
}

