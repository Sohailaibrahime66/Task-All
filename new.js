// 3--------------------------------------------
function areAnagrams(str1, str2) { 
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyMap = {};
    for (let char of str1) {
        if (char in frequencyMap) {
            frequencyMap[char] += 1;
        }
        else {
            frequencyMap[char] = 1;
        }
    }
    for (let char of str2) {
        if (char in frequencyMap) {
            frequencyMap[char] -= 1;
        }
            else {
                return false;
            }
    }
        return true;
}
    console.log(areAnagrams('listen', 'silent')); // Output: true


// 4------------------------------------------------
function calculateMean(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log(calculateMean([1, 2, 3, 4, 5]))

// 5---------------------------------

// function getSeason(month) {
//     switch (month.toLowerCase()) {
//       case 'september':
//       case 'october':
//       case 'november':
//         return 'Autumn';
//       case 'december':
//       case 'january':
//       case 'february':
//         return 'Winter';
//       case 'march':
//       case 'april':
//       case 'may':
//         return 'Spring';
//       case 'june':
//       case 'july':
//       case 'august':
//         return 'Summer';
//       default:
//         return 'Invalid month';
//     }
// }

// const userInput = prompt("Enter a month:");
  
// const season = getSeason(userInput);

// if (season === 'Invalid month') {
//     alert("Invalid month entered.");
// }
// else {
//     alert(`The season for ${userInput} is ${season}.`);
// }

// 6----------------------
function factorial(n) {
    if (n === 0) {
      return 1; 
    } else {
      return n * factorial(n - 1);
    }
  }
  const result = factorial(5); 
  console.log(result); 
// 7-----------------------------------------------
function duplicate(arr) {
    return arr.concat(arr);
    }
console.log(duplicate([1 , 2 , 3 , 4]))  

// 8----------------------------------------------
function emptyArray(arr) {
    arr.length = 0;
    return arr;
}
console.log(emptyArray([1 , 2 , 3 , 4 , 5 ,]))

// 2. Using splice method
function emptyArray(arr) {
    arr.splice(0, arr.length);
    return arr;
}
console.log(emptyArray([1 , 2 , 3 , 4 , 5 ,]))

// Using pop method
function emptyArray(arr) {
    while (arr.length > 0) {
        arr.pop();
        }
        return arr;
        }
        console.log(emptyArray([1 , 2 , 3 , 4 , 5 ,]))
// Using length property
function emptyArray(arr) {
    return arr.filter(() => false);
    }
    console.log(emptyArray([1 , 2 , 3 , 4 , 5 ,]))
    










