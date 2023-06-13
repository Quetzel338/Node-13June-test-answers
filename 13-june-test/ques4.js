var num = 12345;
var reverse = 0;

while(num > 0){
    var rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num/10);
}

console.log(reverse);