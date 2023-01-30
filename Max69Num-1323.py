class Solution(object):
   def maximum69Number(self, num):
    res = list(str(num))
    for i, n in enumerate(res):
        if n == '6':
            res[i] = '9'
            break
    return int(''.join(res))
