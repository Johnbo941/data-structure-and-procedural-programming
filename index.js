function sumOfDistinct(set1, set2) {
    let combined = set1.concat(set2); //merge both arrays 
    let countMap = {}; //to track element frequency
    let sum = 0;

// count how many times each element appears
for (let i = 0; i < combined.length; i++) {
    let val = combined[i];
    if (countMap[val]) {
        countMap[val] += 1;
    }else {
        countMap[val] = 1;
    }
}

// add only elements that appear once
for (let key in countMap) {
    if (countMap[key] === 1) {
        sum += parseInt(key); //keys are strings, convert to numbers
    }
}
return sum;
}

// test the function

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinct(set1, set2)); //output: 13








// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// Function to check if two vectors are orthogonal
function checkOrthogonal(v1, v2) {
    let product = dotProduct(v1, v2);
    if (product === 0) {
        console.log("The vectors are orthogonal.");
    } else {
        console.log("The vectors are not orthogonal.");
    }
}

// Example vectors
let v1 = [1, 2, -3];
let v2 = [3, 0, 1];

// Call the function
checkOrthogonal(v1, v2);
