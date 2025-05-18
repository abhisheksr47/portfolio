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


def balanced():
    a=input('enter string')
    stack=[]
    match_phrase={')':'(','}':'{',']':'['}

    for char in a:
        if char in match_phrase.values():
            stack.append(char)
        elif char in match_phrase.keys():
            if stack and stack[-1]==match_phrase[char]:
                stack.pop()
            else:
                return False
    return not stack

if balanced():
    print('balanced')
else:
    print('not balanced')

