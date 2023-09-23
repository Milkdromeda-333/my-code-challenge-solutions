var containsDuplicate = function (nums) {
    // return true if an integer is preent in nums 2 >= times, false otherwise

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i]) {
            return true;
        }
    }
    return false;
};

// const sample = [1, 2, 3, 1]; // true
// const sample = [1, 2, 3, 4]; // false
const sample = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; // true

console.log(containsDuplicate(sample));
