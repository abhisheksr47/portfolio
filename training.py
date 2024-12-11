def remove_zero():
    list=[1,2,3,0,6,0,7,0]

    for lst in list:
        if lst==0:
            list.remove(lst)
            list.append(lst)
    print(list)

def prime_within_range():
    lower=100
    upper=200
    for num in range(lower,upper+1):
        if num>1:
            for i in range(2,num):
                if (num %i) == 0:
                    break
            else:
                print(num)

def reversed_text():
    text='python'
    reversedd=text[::-1]
    print(reversedd)

def remove_nonalphanumeric():
    import re
    text='Got it! If you want to remove spaces but keep the digit'
    filteredtext=re.sub(r"[xA-Z]",'_',text)
    print(filteredtext)
    
def number_conversion():
    s=""
    num=int(input())
    while num>0:
        r=num%8
        s=str(r)+s
        num=num//8
    print(int(s))

def aabbbcc():
    output=''
    str='a2b4c5'
    for char in str:
        if char.isalpha():
            var=char
        else:
            num=int(char)
            output=output+(var*num)
    print(output)

def countprint():
    str='wife wife hose before wife hose hose keep good hose'

    lst=str.split()
    print(lst)
    count=dict()

    for char in lst:
        if char in count:
            count[char]+=1
        else:
            count[char]=1
    print(count)

    for key in count:
        if count[key]>=3:
            print(key,end=' ')


def test_addition(self):
    calc = Calculator()
    self.assertEqual(calc.add(2, 3), 5)  # The function is called at runtime and validated dynamically

import unittest

# Define the Calculator class with an add method
class Calculator:
    def add(self, a, b):
        return a + b

# Test class that will contain the unit tests
class TestCalculator(unittest.TestCase):
    
    # Test case for the add method
    def test_addition(self):
        calc = Calculator()
        # Assertion to check if 2 + 3 equals 5
        self.assertEqual(calc.add(2, 3), 5)  # The function is called at runtime and validated dynamically
    
    # Test case for addition with negative numbers
    def test_add_negative(self):
        calc = Calculator()
        # Assertion to check if -1 + -1 equals -2
        self.assertEqual(calc.add(-1, -1), -2)
    
    # Test case for addition with zero
    def test_add_zero(self):
        calc = Calculator()
        # Assertion to check if 0 + 0 equals 0
        self.assertEqual(calc.add(0, 0), 0)
    
    # Test case for addition with a large number
    def test_add_large_numbers(self):
        calc = Calculator()
        # Assertion to check if 1000000 + 5000000 equals 6000000
        self.assertEqual(calc.add(1000000, 5000000), 6000000)

# Run the tests when the script is executed
if __name__ == "__main__":
    unittest.main()

