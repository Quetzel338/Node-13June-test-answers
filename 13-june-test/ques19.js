function getRandomNum(){
    return new Promise((resolve, reject)=>{
        const num= Math.floor(Math.random() * 10)+ 1;
        if(num >= 5){
            resolve(num);
        }else{
            reject("Generated number is less than 5")
        }
    });
}

getRandomNum().then((num) =>{
    console.log(`Random num is ${num}`);
})
.catch((err)=>{
    console.log(err);
})