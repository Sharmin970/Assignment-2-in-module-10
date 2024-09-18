//Question-1:

function calculateDifference(num1,num2){
    let difference = num1-num2;
    console.log(difference)

}
calculateDifference(20,10);



//Question-2:

function isOdd(number){
    if(number % 2 !==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isOdd(7));
console.log(isOdd(10));



//Question-3:

function findMin(arr){
    return Math.min(...arr);
}
let number = [10,7,55,3,0,-1,-4,-7];
console.log(findMin(number));



//Question-4:

function filterEvenNumbers(numbers){
    return numbers.filter(function(numbers){
        return numbers % 2 === 0
    });
}

let numbersArray = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);



//Question-5:

function sortArrayDescending(arr){
    return arr.sort((a, b) => a - b).reverse();
}

let numbers = [30,55,44,20,11,35,77];
let sortNumbers = sortArrayDescending(numbers);
console.log(sortNumbers);




//Question-6:

function lowercaseFirstLetter(str){
    
    let strArray = str.split('');
    strArray[0] = strArray[0].toLowerCase();
    return strArray.join('');
}
let result = lowercaseFirstLetter("Tangled Javascript");
console.log(result);




//Question-7:

function countVowels(str){
    let vowels = "aeiouAEIOU"
    let result = Array.from(str).filter(function(item){
        return vowels.includes(item);
    });
    return result.length
}
console.log(countVowels("Beautiful Bangladesh"));




//Question-8:

function findAverage(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return arr.length === 0 ? 0 : sum / arr.length;
}
const myArray = [11, 22, 33, 44, 55];
console.log(findAverage(myArray));