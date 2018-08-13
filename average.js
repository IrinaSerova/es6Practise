/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let sum = 0;
    for(const num of nums){
        sum += num;
    }
    if (nums.length === 0){
        return 0;
    }else
    result = sum/nums.length;
    return result;
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
