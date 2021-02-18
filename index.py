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
