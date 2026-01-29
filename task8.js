//number countdown
for(let i=81;i>=65;i--){
    console.log(i); 
}
//real countdown timer
let n=81;
let timer=setInterval(()=>{
    console.log(n);
    n--;
    if(n<65){
        clearInterval(timer);
    }
},1000);

let j=50;

let Timer=setInterval(()=>{
    console.log(j);
    j--;
    if(j<40){
        clearInterval(Timer);
    }
},500)