## JavaScript常见排序
`2018-07-06`

### 快速排序
- 快排就是找一个基数用来比较, 把比他大的放他前面，比他小的放他后面, 然后把前后两部分重复此方法排序

#### 通俗易懂版本
```javascript
let list = [2, 3, 1, 9, 5, 6, 4, 7, 8];

let quick =  function(arr) {
    if (arr.length < 1) {
        return arr;
    }
    let base = arr[0], left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return arguments.callee(left).concat(base, quick(right))
}

let result = quick(list);
console.log(result)
```

这个方法比较简单，直接创建数组，把比基数小的放前面数组，大的放后面数组。然后利用数组合并就是排序后的数组。但是重复创建了很多数组对象，加上递归的原因，这里对性能是一种严重的浪费。

#### 抽象版本
```javascript
let quickSort = function(arr, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return;
    }

    let left = startIndex, right = endIndex, base = list[startIndex];

    while (left !== right) {
        while (right > left && arr[right] >= base) {
            right--;
        }
        while (left < right && arr[left] <= base) {
            left++;
        }
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }

    arr[startIndex] = arr[right];
    arr[right] = base;

    arguments.callee(arr, startIndex, left - 1);
    arguments.callee(arr, left + 1, endIndex)
}

quickSort(list, 0, list.length - 1);

console.log(list)
```

- 这里就不是利用创建数组归类的方式了，而是直接修改原数组，避免了不必要的创建数组对象。缺点是看起来不是那么明朗。
- 首先缺点一个用来比较的基数（不一定是第一个数）
- 从数组最后向前找比基数小的数，找到一个就停下，此时`right`指向右边第一个比基数小的数。
- 从数组左边向后找比基数大的数，找到一个就停下，此时`left`指向左边第一个比基数大的数。
- 互换这两个数，这就保证了基数两边，左边是小的，右边是大的。
- 当`right`与`left`碰头时，停止。因为此时`left`遍历过的都是比基数小的，`right`遍历过的都是比基数大的，没必要在找下去。
- 能让`right`指针停下来的数肯定是比基数小的数，因为这里基数是第一个，所以基数要与比它小的数换位置。
- 注：`left`停下的时候指向的是大于基数的数，要这个数没用，因为基数已经在第一个了，`left`指向的数肯定在它后面，已经是正确的情况。如果我们取得基数是中间的某个值，这时候就得判断指针位置和数值大小再确定换不换位置。由于外层循环结束时`right`位置使我们需要的位置，所以应该先从右往左开始找小的。如果先由左往右，`left`指向一个比基数大的数停下了，这时候`right`也与`left`相遇了，但这时指向的数是比基数大的数，显然不是我们需要的。先从右开始就不一样了，`right`锁定的是比基数小的，`left`撞上`right`时指向的数就是比基数小的数。
- 换一种说法：先从右找的原因是要找一个比基数小的跟基数换位，实现小的在基数前面。但是这样不能保证基数前面都比他小。所以还需要从前面找找比基数大的，找到了就和已经找到的小的数互换，找不到就是`right`与`left`相遇，循环结束，将基数与`right`指向的数换位。
- 最后把基数两边的数重复上面步骤。

### 归并排序
归并是将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。所以前提是先细化到数组只有一个值，然后才能比较，返回一个两个值的有序数组，将这个含有两个值的有序数组与其他有序数组排序合并得到更大的有序数组，最终达到给整个数列排序的目的。

```javascript
let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];

let mergeSort = arr => {
    if (arr.length < 2) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2),
        left = arr.slice(0, middleIndex),
        right = arr.slice(middleIndex);

    return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length > 0) {
        result.push(left.shift())
    }

    while (right.length > 0) {
        result.push(right.shift())
    }

    return result
}

let result = mergeSort(list)
console.log(result)
```
- merge函数用来给两个有序数组排序并返回一个排序后的数组。
- mergeSort函数用来将接收到的数组递归细化与合并排序，细化到只有一个值的时候数组就是有序数列，排序合并后返回继续排序合并。

### 插入排序
插入排序就像打扑克一样，摸到的第一张牌默认最小。摸第二张牌的时候跟前面的第一张比，看看应该放哪个位置，第三张牌再和前面排序好的两张牌比，一次类推。

```javascript
let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
let insertSort = arr => {
    let len = arr.length, i, j, temp;
    for (i = 1; i < len; i++) {
        temp = arr[i];
        for (j = i - 1; temp < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
}
insertSort(list)
console.log(list)
```
- 这里外层循环相当于摸排，每次都摸一张牌进来。
- 内层循环相当于摸到牌之后跟手上已有的牌比较
- 从后往前比，如果比手上最后一张牌都大，就直接放到最后面
- 如果摸到的牌比手上的牌小就把正在比较的牌往后挪一个位置，腾出一个位置来
- 如果中途发现这张牌比某张牌大的时候就插入当前空位
- 如果一直没找到，就相当于手上牌都向后挪了一个位置，摸到的牌放第一个位置

### 选择排序
不同于冒泡的两两比较立马换位置，选择排序是选一个用来比较的数（通常一开始是第一个），找出后面的数中比他小的数，记录这个数，然后再往后找，找到比这个数更小的数。一次循环结束时，找到的数是基数及基数后面最小的数，然后再跟基数换位置，这样保证了数组第一个数最小的数。然后再从第二个数开始进行同样的遍历。

```javascript
let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
let selectSort = arr => {
    let len = arr.length, i, j, tempIndex;
    for (i = 0; i < len - 1; i++) {
        tempIndex = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[tempIndex]) {
                tempIndex = j;
            }
        }
        if (i !== tempIndex) {
            let temp = arr[i];
            arr[i] = arr[tempIndex];
            arr[tempIndex] = temp;
        }
    }
}
selectSort(list)
console.log(list)
```
- 这里tempIndex记录一轮循环中找到的最小数的索引，默认是次轮循环的第一个数，后面找的更小的就记录成更小值的索引
- 如果最小值不是自己，就将最小值与次轮循环首个值替换，然后最前面的数最小。

### 冒泡排序
两两比较，没什么可讲的。

```javascript
let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
let bubbleSort = arr => {
    let len = arr.length, i, j;
    for (i = 0; i < len - 1; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
bubbleSort(list)
console.log(list)
```