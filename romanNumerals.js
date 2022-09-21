// Roman Numerals
// Difficulty
// Medium

// Concepts
// General, Math


// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal

// Roman

// 1

// I

// 5

// V

// 10

// X

// 50

// L

// 100

// C

// 500

// D

// 1,000

// M

// For example:

// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'


const romanConverts = (num) => {
    let num2 = num
    let push = Math.floor(num2 / 1000)
    let numStr = ""
    for(i = 0; i < push; ++i){
      numStr = numStr + 'M'
    }
    num = num % 1000
  
    let push2 = Math.floor(num / 500)
    for(i = 0; i < push2; ++i){
      numStr = numStr + 'D'
    }
    num = num % 500
  
    num
    let push3 = Math.floor(num / 100)
    for(i = 0; i < push3; ++i){
      numStr = numStr + 'C'
    }
    num = num % 100
  
    let push4 = Math.floor(num / 50)
    for(i = 0; i < push4; ++i){
      numStr = numStr + 'L'
    }
    num = num % 50
  
    let push5 = Math.floor(num / 10)
    for(i = 0; i < push5; ++i){
      numStr = numStr + 'X'
    }
    num = num % 10
  
    let push6 = Math.floor(num / 5)
    for(i = 0; i < push6; ++i){
      numStr = numStr + 'V'
    }
    num = num % 5
  
    let push7 = Math.floor(num / 1)
    for(i = 0; i < push7; ++i){
      numStr = numStr + 'I'
    }
    num = num % 1
  
    return numStr
  }
  
  console.log(romanConverts(100))