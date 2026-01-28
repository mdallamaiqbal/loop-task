/***

Subtask-1:

Find all the odd numbers from 61 to 100.
Subtask-1.2:

Display sum of all the odd numbers from 81 to 131.


 */
let nums =61;
while(nums<100){
    if(nums % 2 !==0){
        console.log('Number is odd:', nums);
    }
    nums++;
}
let sum = 81;
while(sum<=131){
    if(sum % 2 ===1){
        console.log(sum);
    }
    sum++
}
/***

Subtask-2.1:

Find all the even numbers from 78 to 98.

Subtask-2.2:

Display sum of all the even numbers from 206 to 311.

 */
let numbers =78;
while(numbers<=98){
    if(numbers % 2 ===0){
        console.log('Number is even:', numbers);
    }
    numbers++
}

let sumNum = 206;
while(sumNum<311){
    if(sumNum % 2 ===0){
        console.log(sumNum);
    }
    sumNum++;
}