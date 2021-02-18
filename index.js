// Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one ‘5’ digit inside the decimal representation of integer N.

const fiveInserter = (original) => {

    // split the number into ordered array of digits
    const digits = original.toString().split('').map(str => parseInt(str))

    // find the earliest index 5 or lower
    const insertHere = digits.findIndex(num => num <= 5)

    // put the 5 at that index if it exists, else put it at the end
    if (insertHere > -1) {
        digits.splice(insertHere, 0, 5)
    } else {
        digits.push(5)
    }

    // return an integer derived from the joined digits
    return Number(digits.join(''))
}

console.log(fiveInserter(67891237043599))
console.log(fiveInserter(12341234))
console.log(fiveInserter(99996786666))


// A string is called balanced when every letter occurring in the string, appears both in upper- and lowercase. For example, “CATattac” is balanced (‘a’, ‘c’, and ‘t’ occur in both cases), but “Madam” is not (‘d’ and ‘a’ appear only in lowercase). Note that the number of occurrences does not matter. Write a function: given a string S of length N, returns the length of the shortest balanced fragment of S. If S does not contain any balanced fragments, the function should return -1.

const balFrag = (str, len=str.length) => {

    // initial values
    let shortLen = len
    let shortIndex = -1

    for (let i = 0; i < str.length; i++) {

        let j = i
        const chars = {}

        // nested loop -- BAD!
        // but at least the inner loop gets shorter as shortLen grows smaller
        while (j - i < shortLen && j < len) {
            const letter = str[j]

            // if the current letter is not in chars, add it
            if (
                !chars[letter.toLowerCase()] 
                && !chars[letter.toUpperCase()]
                ) {
                    chars[letter] = 1
            // if the current letter is upper and the lower version exists, set to 0
            } else if (
                letter == letter.toUpperCase() 
                && !!chars[letter.toLowerCase()]
                ) {
                    chars[letter.toLowerCase()] = 0
            // if the current letter is lower and the upper version exists, set to 0
            } else if (
                letter == letter.toLowerCase() 
                && !!chars[letter.toUpperCase()]
                ) {
                    chars[letter.toUpperCase()] = 0
            } 

            // if the length of the array of all values !== 0 is 0, then every letter has a match
            if (!Object.values(chars).filter(val => val != 0).length) {
                // update shortLen and shortIndex
                shortLen = j - i
                shortIndex = i
            }
            j++
        }
    }
    console.log("check it:", str.substr(shortIndex, shortLen + 1))
    return shortIndex > -1 ? shortLen + 1 : shortIndex
}


console.log(balFrag("attacCAT"))
console.log(balFrag("catATTAC"))
console.log(balFrag("ASDJKLWQEwjlkasfoiqOerLKDFIasAsdaSGDLeqreWrjkldsfASDTEUPOuISoDpisdFHKLASdasdetjlkqrj"))