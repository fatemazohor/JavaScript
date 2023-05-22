// Loop practise.
for(let i=100; i>=90; i--){
    console.log(i);
}
// Find odd / even number in 100.
for(let i=1; i<=100; i++){
    if(i%2==0){
        
    }
    else{
        console.log(i);
    }
}
// 1-50, divided by 3 or 5.
for(let i=1;  i<=50; i++){
    if(i%3==0 || i%5==0) {
        console.log(i);
    }
   
    else{

    }
}
// 1-50, divided by 3 and 5.
for(let i=1;  i<=50; i++){
    if(i%3==0 && i%5==0) {
        console.log(i);
    }
   
    else{

    }
}
// 
let input=5;
let result=1;
for(let i=input; i>0; i--){
    // result=result*i;
     result*=i;
}
console.log(result);
// factorial
let r=1;
let f=25;
let g=15;
let lcm=1;
for(let i=r; i>0; i++){
if(f%i==0 && g%i==0){
console.log(i);
}
else{
  
}
    lcm*=i;
}
console.log(lcm);