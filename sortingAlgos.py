# insertion sort !!!
list = [2,3,6,7,4,9]
def insertion_Sort(array):
    for i in range(1,len(array)):
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key:
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
    return array

print(insertion_Sort(list))


# Bubble Sort !!!

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

def selectionSort(nums):
    pass