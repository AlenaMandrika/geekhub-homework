// приклад з function

var arr = [2, -1, 4, 'sdf', NaN, undefined, 4, 7, 9];
function sumArr (arr, action) {
    if (action === 'sum') {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                sum += arr[i]
            }
        }
        return sum;
    }
}
console.log(sumArr(arr,'sum'));



var arr_1 = [2, -1, 4, 'sdf', NaN, undefined, 4, 7, 9];
function maxArr (arr, action) {
    if (action === 'max') {
        var max = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (arr[i] > max) {
                    max = arr[i]}
            }
        }
        return max;
    }
}
console.log(maxArr(arr_1,'max'));



var arr_2 = [2, -1, 4, 'sdf', NaN, undefined, 4, 7, 9];
function minArr (arr, action) {
    if (action === 'min') {
        var min = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (arr[i] < min) {
                    min = arr[i]}
            }
        }
        return min;
    }
}
console.log(minArr(arr_2,'min'));



var arr_3 = [-2, -3, -4];
function sum (arr, action) {
    if (action === 'sum') {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                sum += arr[i]
            }
        }
        return sum;
    }
}
console.log(sum(arr_3,'sum'));



var arr_4 = [-2, -3, -4];
function max (arr, action) {
    if (action === 'max') {
        var max = arr_4[0];
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (arr[i] > max) {
                    max = arr[i]}
            }
        }
        return max;
    }
}
console.log(max(arr_4,'max'));



var arr_5 = [-2, -3, -4];
function min (arr, action) {
    if (action === 'min') {
        var min = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (arr[i] < min) {
                    min = arr[i]}
            }
        }
        return min;
    }
}
console.log(min(arr_5,'min'));



var arr_6 = [undefined, -3, -4];
function max_arr (arr, action) {
    if (action === 'max') {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                var max = arr[i];
                break;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (max < arr[i]) {
                    max = arr[i]
                }
            }
        }
        return max;
    }
}
console.log(max_arr(arr_6,'max'));



var arr_7 = [undefined, -3, -4];
function min_arr (arr, action) {
    if (action === 'min') {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                var min = arr[i];
                break;
            }
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                if (min > arr[i]) {
                    min = arr[i]
                }
            }
        }
        return min;
    }
}
console.log(min_arr(arr_7,'min'));



var arr_8 = [undefined, -3, -4];
function sum_arr (arr, action) {
    if (action === 'sum') {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                sum += arr[i]
            }
        }
        return sum;
    }
}
console.log(sum_arr(arr_8,'sum'));



var arr_9 = [undefined, -3, -4];
var sum = 0;
    min;
    max;
for (i = 0; i < arr_9.length; i++) {
    if (typeof arr_9[i] === 'number' && !isNaN(arr_9[i])) {
        sum += arr_9[i];
        if (min > arr_9[i]) {
            min = arr_9[i]
        }
        if (max < arr_9[i]) {
            max = arr_9[i]
        }
    }
}
console.log('sum = ', sum);
console.log('min = ', min);
console.log('max = ', max);

