/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */
//
//average(2, 6) should return 4
//average(2, 3, 3, 5, 7, 10) should return 5
//average(7, 1432, 12, 13, 100) should return 312.8
//average() should return 0

function average(...nums) {
    let total = 0;
    for(const num of nums){
        total += num;
    }
    result = total/nums.length;
    return result;
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
