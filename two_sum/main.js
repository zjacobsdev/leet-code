/* Two Sum: Easy --> Attempt 1: 3/30/2020

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

var twoSum = function(nums, target) {



    for(let i = 0; i <= nums.length; i++){

        let sumArr = []
        let result = []

        let subArr =  nums.slice(i+1)
        console.log(subArr)
      sumArr = subArr.map( (element) => { return i + element })
        console.log(sumArr)
        result = sumArr.forEach((element,j) =>{
            if(element === target){
                console.log(i,j)
                return i,j
            }
        })
    }

    
}


////////Test Cases///////

twoSum([2,7,11,15], 9) // 0,1 
// twoSum([1,2,3,4], 7)  //  3,4
// twoSum([20,11,3,13,12], 33) // 0,3
// twoSum([0,-5,10,21], 5)  // 1,2