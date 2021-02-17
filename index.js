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