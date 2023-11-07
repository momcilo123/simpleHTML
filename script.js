function reverseNumber (num) {
    let splited = num.toString().split('').reverse().join('')

}

function countOfVowels (str) {
    let total = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          total = total + 1
        }
    }
    return total

}

function squareDigits (num) {
    let nString = num.toString().split('')
    let toNum = parseInt(nString)
    let total = [];
    for (i = 0; i<toNum.length; i++) {
        toNum[i] = toNum[i] * toNum[i]
        total.push(toNum[i])
    }
    return total
}

/*
    "1234567"
    "1","2","3","4","5","6","7"
    1,2,3,4,5,6,7
    7,6,5,4,3,2,1
    7654321

*/ 

function DNAStrand(dna){
    let total = "";
    for (i = 0; i <dna.length; i++) {
    switch (dna) {
        case "A":
            total.push("T")
            break;
        case "T":
            total.push('A');
            break;
        case "C":
            total.push("G")
            break;
        case "G":
            total.push("C")
            break;

    }
}
}

/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */


function sumTwoSmallestNumbers(numbers) {  
      let sorted = numbers.sort((a,b) => a-b)
      return sorted

}


/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number. */



function getSum(a,b) {
    let total = 0;
    for (i = 0; i<b.length; i ++) {
        total = total + a[i]
    }
}


function expandedForm(num) {
    let str = num.toString()
    let total1 = str[0]
    let total2 = str[1]
    let total3 = str[2]
    for (i=1; i<str.length; i++) {
        total1 = total1 + 0   
    }
    for (i = 2; i <str.length; i++) {
        total2 = total2 + 0
    }
    for (i = 3; i <str.length; i++) {
      total3 = total3 + 0
    }
   console.log(total1 + "+" + total2 + "+" + total3)
    
 }
 
 console.log(expandedForm([13323]))