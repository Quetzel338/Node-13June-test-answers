
// count numbers of vowels 
let s = "Hello World";
s.toLowerCase();
let count = 0;
for(let i =0; i<s.length; i++){
    if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i'|| s[i] == 'o'
    || s[i] == 'u' ){
        count++;
    }
}

console.log(count);