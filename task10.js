for(let i =1; i<=200; i++){
     console.log(i);
    if(i>=100){
        break;
    }    
}
let sum =0;
let j=0;
while(true){
    sum=sum+1;
      console.log('Final sum:',sum);
    if(sum>=100){
        break;
    }
    j++
}

for(let n = 1; n <= 100; n++ ){
    if(Number.isInteger(Math.sqrt(n))){
        console.log('First squre number found:',n);
        break
    }
}