function calculateSum(arr, callback){
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum = sum + arr[i];
    }
    callback(sum);
}

function callback(result){
    console.log(`sum is ${result}`);
}

calculateSum([2,4,6,8], callback);