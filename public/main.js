// START Boilerplate FROM app-app

// const main = () => {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }
//
// document.addEventListener('DOMContentLoaded', main)

// END Boilerplate


// GIVEN A STRING, COUNT THE WORDS THAT ARE repeated
// COUNT THE NUMBER OF TIME EACH WORD IS REPEATS


const INPUT = 'The quick brown fox jumped under the nearby tree. What the fox did next suprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree.'

// OUTPUT:
  // the: 8,
  // quick: 1,
  // brown: 1,
  // etc.



// PEDAC

 // P: Given an input string
 // P: split up string and count the number of words tht repeate
 // P: store those repeated words and display the number of times
        // the word is repeated

    // E/ D:


// A: Given input
// A: split up into array of seperated words
// A: loop over that array
    // A: for each index, determine if that is the first instance
        // A: if first of word, continue loop
        // A: if repeat of word, store that word in a new variable
        // A: .length of the new variable

        // A: Remove the decimals and all non alapha characters including spaces
          // NO PERIODS included

// REFACTORED FROM INTERVIEW INCORPORATING THE NEW MAPS FUNCTIONALITY

let lowerCaseStr = INPUT.toLowerCase()
// console.log(lowerCaseStr)
let strpdStr = lowerCaseStr.replace(/[^\w\s]/gi, '')
let splitStr = strpdStr.split(" ")
// console.log(splitStr)
console.log(strpdStr)

let repeatedWords = {}
let words = new Map()
// let word = ''
let wordNum = 0
// let count = 0


// console.log(words)


// for (let word of splitStr) {
//   console.log(word)

  // now want to figure out the count of each words
  // we need to have a way to track the instance of occurance for each word - the number of time that word appears in the STRING
  // let count = 0

// }

/* ===========================================
     START solution with ES6 Map
   =========================================== */


for (let i = 0; i < splitStr.length; i++) {
    let count = 1
    if (words.has(splitStr[i])) {
        count += 1
        // let count = words.splitStr[i]
        words.set(splitStr[i], count)
        // console.log(count)
        // words.set(splitStr[i], count)

        // console.log('if statemet thrown')
    } else {
      count = 1
      // console.log('else statemet thrown')
      // words.set(splitStr[i], count)
      words.set(splitStr[i], count)
    }

}
console.log(words)


/* ===========================================
     END solution with ES6 Map
   =========================================== */


// splitStr.forEach((wd, i) => {
  // console.log(`word: "${word}", index: ${i}`)
// console.log(words)

// })

    // for ( let [key, val] of words.entries()) {
    //   // console.log(key, val)
    // }





  //
  // if (!words[splitStr[i]]) {
  //   count += 1
  //   console.log(count)
  // }

  // console.log(`${word}`)
  // console.log(splitStr[i])
  // word = word

  // for (let wd of splitStr) {
    // console.log(wd)
  // }



  // if (`${word}` === splitStr[i]) {
  //   console.log('TESTING')
  // }
  // })

  // words.forEach((wd, index) => {
    // console.log(wd, word)

    // if ( words.has(splitStr[i])) {
    //   // console.log('yes')
    //   let count = word[splitStr[i]]
    //   console.log(count)
    // } else {
    //   // console.log('no')
    // }
  // })

  // console.log(words)


// })

// console.log(words)




  // if (words.has(splitStr[i])) {
  //   let count = word[splitStr[i]]
  //   // console.log(count)
  //   // count += 1
  //   // console.log('true')
  // } else {
  //   console.log('false')
  // }

  // words.forEach((key, val) => {
  //   if (words.has(splitStr[i])) {
  //     let count = 0
  //     count += 1
  //     // console.log(key)
  //     val = count
  //     // console.log(val)
  //   } else {
  //     val = 1
  //   }
  // })


  // if (word === splitStr[i]) {
  //   let count = 0
  //   count += 1
  //   console.log('success')
  // }
  //   else {
  //     console.log('not yet')
  // }

// })










// BELOW IS THE WORK DONE IN THE INTERVIEW WITH KEN FROM CAPCO


// let splitStr = INPUT.split(' ');
// console.log(INPUT.split(' '))
// let repeateWord = 0
// let repeatedWords = {
    // word: '',
    // duplicate: 0
// }
// let repeatedWords = {}
//



/* ===========================================
     START solution with ES6 Map
   =========================================== */


// for (let i = 0; i < splitStr.length; i++) {
//     // let prevIndex = i - 1
//     // console.log(splitStr[i])
//
//     if (repeatedWords.hasOwnProperty(splitStr[i])) {
//         let count = repeatedWords[splitStr[i]]
//         // console.log(count)
//         count += 1
//         repeatedWords[splitStr[i]] = count
//     } else {
//         // jsObj{'key' + i} = 'example ' + 1;
//         repeatedWords[splitStr[i]] = 1
//     }
// }
// console.log(repeatedWords)

/* ===========================================
     END solution with ES6 Map
   =========================================== */




    // splitStr.map((a, b) => {
    //     console.log(string)
    // })


        // for (let word of repeatedWords) {
        //     console.log(repeatedWords)

        //         if (word)
            // if (splitStr[i] === repeatedWords[j].word) {
            //     console.log(repeatedWords[j].word)

            // }






    // for (let word in repeatedWords) {

    // }
    // if (splitStr[i] === repeatedWords.word ) {
    //     repeateWord += 1

    // } else if (split)
    //     repeateWord = 0
    //     repeatedWords.push(splitStr[i])
    //     repeateWord += 1
    //     // console.log(repeatedWords)
    // } else if (splitStr[i] !== splitStr[prevIndex]) {
    //     repeateWord = 0
    //     repeatedWords.push(splitStr[i])
        // console.log(repeateWord)
        // console.log(repeatedWords)
    // }


// let reducer = splitStr.reduce((a,b) => {
//     if (a == b) {
//     // console.log(b)
//     console.log(true)
//     }
// })

// repeatedWords.reduce(reducer)










function sides(literals, ...expressions) {
    let str = literals
    let input = expressions
    console.log(input)
}
