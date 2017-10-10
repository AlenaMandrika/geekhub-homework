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







