var arr = [undefined, -3, -4];
var min = 0;
var max = 0;
var sum = 0;
for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (min === 0 && max === 0) {
            min = arr [i];
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
        sum += arr[i]
    }
}
console.log('min = ', min);
console.log('max = ', max);
console.log('sum = ', sum);