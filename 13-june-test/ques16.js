function multiply(nums, callback){
    let reults = nums*2;
    callback(reults);
}

function callback(result){
    console.log(`answer is ${result}`);
}

multiply(5,callback);