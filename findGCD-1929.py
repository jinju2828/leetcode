
a, b = min(nums), max(nums)
while a:
	a, b = b % a, a
return b
