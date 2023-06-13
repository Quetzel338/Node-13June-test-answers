var input = "palindrome";
var low =0;
var high = input.length-1;

while(low < high){
    if(input[low] != input [high]){
        return "false";
    }
    else{
        low++;
        high--;
    }

    return "true";
}

