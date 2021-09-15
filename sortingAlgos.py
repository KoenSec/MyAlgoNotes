# insertion sort !!!
# time complexity is O(n^2)
insertlist = [2,3,6,7,4,9]
def insertion_Sort(array):
    for i in range(1,len(array)):
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
    return array

print(insertion_Sort(insertlist))


# Bubble Sort !!!
# Time complexity is O(n^2)
def bubble_Sort(nums):
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(nums)-1):
            if nums[i] > nums[i + 1]:
                nums[i],nums[i + 1] = nums[i + 1],nums[i]
                swapped = True
                return nums

randomlist=[4,8,21,0,54]
print(bubble_Sort(randomlist))


# Selection Sort !!!
# time complexity is O(n^2)
def selectionSort(nums):
    for i in range(len(nums)):
        lowestvalue = i
        for j in range(i+1,len(nums)):
            if nums[j] < nums[lowestvalue]:
                lowestvalue = j
        nums[i],nums[lowestvalue] = nums[lowestvalue],nums[i]
    return nums

list=[1,4,5,2,67,87,23]
print(selectionSort(list))