// Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one ‘5’ digit inside the decimal representation of integer N.

const fiveInserter = (original) => {

    const digits = original.toString().split('')
    const insertHere = digits.findIndex(num => Number(num) <= 5)

    if (insertHere > -1) {
        digits.splice(insertHere, 0, '5')
    } else {
        digits.push('5')
    }

    return Number(digits.join(''))
}

console.log(fiveInserter(67891237043599))
console.log(fiveInserter(12341234))
console.log(fiveInserter(99996786666))


// A string is called balanced when every letter occurring in the string, appears both in upper- and lowercase. For example, “CATattac” is balanced (‘a’, ‘c’, and ‘t’ occur in both cases), but “Madam” is not (‘d’ and ‘a’ appear only in lowercase). Note that the number of occurrences does not matter. Write a function: given a string S of length N, returns the length of the shortest balanced fragment of S. If S does not contain any balanced fragments, the function should return -1.

const balFrag = (str, len=str.length) => {

    let shortLen = len
    let shortIndex = -1

    let i = 0
    while (i < len) {

        let j = i
        const chars = {}
        while (j - i < shortLen && j < len) {
            const letter = str[j]

            if (
                !chars[letter.toLowerCase()] 
                && !chars[letter.toUpperCase()]
                ) {
                    chars[letter] = 1
            } else if (
                letter == letter.toUpperCase() 
                && !!chars[letter.toLowerCase()]
                ) {
                    chars[letter.toLowerCase()] = 0
            } else if (
                letter == letter.toLowerCase() 
                && !!chars[letter.toUpperCase()]
                ) {
                    chars[letter.toUpperCase()] = 0
            } 

            if (!Object.values(chars).filter(val => val != 0).length) {
                shortLen = j - i
                shortIndex = i
            }
            j++
        }
        i++
    }
    console.log("check it:", str.substr(shortIndex, shortLen + 1))
    return shortIndex > -1 ? shortLen + 1 : shortIndex
}


// console.log(balFrag("attacCAT"))
console.log(balFrag("catATTAC"))
console.log(balFrag("ASDJKLWQEwjlkasfoiqOerLKDFIasAsdaSGDLeqreWrjkldsfASDTEUPOuISoDpisdFHKLASdasdetjlkqrj"))