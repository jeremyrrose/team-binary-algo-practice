# Write a function solution that, given an integer N, returns the maximum possible value obtained by inserting one ‘5’ digit inside the decimal representation of integer N.

def five_inserter (original):

    # split the number into ordered array of digits
    digits = [int(n) for n in str(original)]

    # find the earliest index 5 or lower, else -1
    try:
        insert_here = list(map(lambda n: n <= 5, digits)).index(True)
    except:
        insert_here = -1

    digits = digits[0:insert_here] + [5] + digits[insert_here:-1]

    # return an integer derived from the joined digits
    return int(''.join(str(n) for n in digits))

print(five_inserter(67891237043599))
print(five_inserter(12341234))
print(five_inserter(99996786666))
