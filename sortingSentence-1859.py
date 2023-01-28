class Solution(object):
    def sortSentence(self, s):
        """
        :type s: str
        :rtype: str
        """
        myDict=dict()
        s=s.split(' ')
        myLine=''
        for word in s:
            myDict[word[-1]]=word[:-1]
        for i in range(len(s)-1):
            myLine=myLine+str(myDict[str(i+1)])+" "
        myLine=myLine+str(myDict[str(len(s))])
        return myLine
