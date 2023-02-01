class Solution(object):
    def percentageLetter(self, s, letter):
        """
        :type s: str
        :type letter: str
        :rtype: int
        """
        count = 0
        for i in s:
            if i == letter:
                count += 1
                # print(count)
        # print(float(2)/6)
        return int(float(count) / len(s) * 100)
