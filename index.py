# Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one ‘5’ digit inside the decimal representation of integer N.

def five_inserter (original):

    # split the number into ordered array of digits
    digits = [int(n) for n in str(original)]

    # find the earliest index 5 or lower, else -1
    try:
        insert_here = list(map(lambda n: n <= 5, digits)).index(True)
    except:
        insert_here = len(digits)

    # insert 5 at specified index
    digits = digits[:insert_here] + [5] + digits[insert_here:]

    # return an integer derived from the joined digits
    return int(''.join(str(n) for n in digits))

print(five_inserter(67891237043599))
print(five_inserter(12341234))
print(five_inserter(99996786666))


def five_inserter_two (original):
    
    found = None
    string = ''

    # loop through an ordered array of the digits
    # add a 5 and change found if n <= 5
    for n in str(original):
        if not found and int(n) <= 5:
            string += f'5{n}'
            found = True
        else:
            string += n
    
    if not found:
        string += '5'

    return int(string)

print(five_inserter_two(67891237043599))
print(five_inserter_two(12341234))
print(five_inserter_two(99996786666))


# A string is called balanced when every letter occurring in the string, appears both in upper- and lowercase. For example, “CATattac” is balanced (‘a’, ‘c’, and ‘t’ occur in both cases), but “Madam” is not (‘d’ and ‘a’ appear only in lowercase). Note that the number of occurrences does not matter. Write a function: given a string S of length N, returns the length of the shortest balanced fragment of S. If S does not contain any balanced fragments, the function should return -1.

def min_balanced (input_str):

    min_length = len(input_str)
    start = -1

    for i in range(len(input_str)):

        j = i
        chars = {}

        while j - i < min_length and j < len(input_str):

            letter = input_str[j]

            if not (chars.get(letter.lower()) or chars.get(letter.upper())):
                chars[letter] = 1
            elif letter.isupper() and chars.get(letter.lower()):
                chars[letter.lower()] = 0
            elif letter.islower() and chars.get(letter.upper()):
                chars[letter.upper()] = 0

            if sum(chars.values()) == 0:
                min_length = j - i
                start = i

            j += 1
    
    print('check:', input_str[start : start + min_length + 1])
    return min_length + 1 if start > -1 else start


print(min_balanced("attackCATK"))
print(min_balanced("catATTAC"))
print(min_balanced("ASDJKLWQEwjlkasfoiqOerLKDFIasAsdaSGDLeqreWrjkldsfASDTEUPOuISoDpisdFHKLASdasdetjlkqrj"))
