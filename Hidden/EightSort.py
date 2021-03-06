#Insertion Sort
def insert_sort(lists):
    count = len(lists)
    for i in range(1, count):
        key = lists[i]
        j =  i - 1
        while j >= 0 :
            if lists[i] > key:
                list[j+1] = list[j]
                lists[j] = key
            j -= 1
    return lists


#Shell Sort
def shell_sort(lists):
    count = len(lists)
    step = 2
    group = count / step
    while group > 0:
        for i in range(0, group):
            j = i+ group
            while j < group:
                k = j-group
                key = lists[i]
                while k >= 0:
                    if lists[k] > key:
                        lists[k + group] = lists[k]
                        lists[k] = key
                    k -= group
                j += group
        group /= step
    return lists


#Bubble Sort
def bubble_sort(lists):
    count = len(lists)
    for i in range(0, count):
        for j in range (i+1, count):
            if lists[i] > lists[j]:
                lists[i], lists[j] = lists[j], lists[i]
    return lists


#Quick Sort // !!! expected case: O(nlog(n)); worst case: O(n^2)
def quick_sort(list, left, right):
    if left >= right:
        return lists
    key = lists[left]
    low = left
    hight =  right
    while left < right:
        while  left <  right and lists[right] >= key:
            right -= 1
        lists[left] = lists[right]
        while left < right and lists[left] <= key:
            left += 1
        lists[right] = lists[left]
    lists[right] = key
    quick_sort(lists, low, left-1)
    quick_sort(lists, left+1, high)
    return lists


#Selection Sort
def select_sort(lists):
    count  = len(lists)
    for i in range(0, count):
        min = i
        for j in range(i+1, count):
            if lists[min] > lists[j]:
                min = j
        lists[min], lists[i] = lists[i], lists[min]
    return lists


#Heap Sort
def adjust_heap(lists, i, size):
    lchild = 2*i +1
    rchild = 2*i + 2
    max = i
    if i < size / 2:
        if lchild < size and lists[lchild] > lists[max]:
            max = lchild
        if rchild< size and lists[rchild] > lists[max]:
            max = rchild
        if max != i:
            lists[max], lists[i] = lists[i], lists[max]
            adjust_head(lists, max, size)

def build_heap(lists, size):
    for i in range(0, (size/2))[::-1]:
        adjust_heap(lists, i, size)
    
def heap_sort(lists):
    size = len(lists)
    build_heap(lists, size)
    for i in range(0, size)[::-1]:
        lists[0], lists[i] = lists[i], lists[0]
        adjust_heap(lists, 0, i)


#Merge Sort // worst case: O(n)
def merge(left, right):
    i, j = 0, 0
    result = []
    while i < len(left) and j < len(right):
        if left(i) <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result += left[i:]
    result += right[j:]
    return result

def merge_sort(lists):
    if len(lists) <= 1:
        return lists
    num  = len(lists) / 2
    left  = merge_sort(lists[:num])
    right = merge_sort(lists[num:])
    return merge(lefrt, right)


#Radix Sort
import math
def radix_sort(lists, radix=10):
    k = int(math.ceil(math.log(max(lists), radix)))
    bucket = [[]for i in range(radix)]
    for i in range(1, k+1):
        for j in lists:
            bucket[j/(radix**(i-1)) % (radix**i)].append(j)

        del lists[:]
        for z in bucket:
            lists += z
            del z[:]
    return lists



