//  Array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1] і цикл for

var arr_1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var max = arr_1[0];
for (var i = 0; i < arr_1.length; i++) {
    if (arr_1[i] > max){
        max = arr_1[i];
    }
}
console.log ('max = ' + max);

var arr_2 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var min = arr_2[0];
for (var i = 0; i < arr_2.length; i++) {
    if (arr_2[i] < min){
        min = arr_2[i];
    }
}
console.log ('min = ' + min);

var arr_3 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var sum = 0;
for (var i = 0; i < arr_3.length; i++) {
    sum += arr_3[i]
}
console.log ('sum = ' + sum);


//  Array = [-1,-8,-2] і цикл for

var arr_4 = [-1,-8,-2];
var max = arr_4[0];
for (var i = 0; i < arr_4.length; i++) {
    if (arr_4[i] > max){
        max = arr_4[i];
    }
}
console.log ('max = ' + max);

var arr_5 = [-1,-8,-2];
var min = arr_5[0];
for (var i = 0; i < arr_5.length; i++) {
    if (arr_5[i] < min){
        min = arr_5[i];
    }
}
console.log ('min = ' + min);

var arr_6 = [-1,-8,-2];
var sum = 0;
for (var i = 0; i < arr_6.length; i++) {
    sum += arr_6[i]
}
console.log ('sum = ' + sum);


//  Array = [1,7,3] і цикл for

var arr_7 = [1,7,3];
var max = arr_7[0];
for (var i = 0; i < arr_7.length; i++) {
    if (arr_7[i] > max){
        max = arr_7[i];
    }
}
console.log ('max = ' + max);

var arr_8 = [1,7,3];
var min = arr_8[0];
for (var i = 0; i < arr_8.length; i++) {
    if (arr_8[i] < min){
        min = arr_8[i];
    }
}
console.log ('min = ' + min);

var arr_9 = [1,7,3];
var sum = arr_9[0];
for (var i = 0; i < arr_9.length; i++) {
    sum += arr_9[i]
}
console.log ('sum = ' + sum);


//  Array = [1,undefined,3,5,-3] і цикл for

var arr_10 = [1,undefined,3,5,-3];
var max = arr_10[0];
for (var i = 0; i < arr_10.length; i++) {
    if (typeof(arr_10[i]) === 'undefined') {
        continue;
    }

    if (arr_10[i] > max){
        max = arr_10[i];
    }
}
console.log ('max = ' + max);

var arr_11 = [1,undefined,3,5,-3];
var min = arr_11[0];
for (var i = 0; i < arr_11.length; i++) {
    if (typeof(arr_11[i]) === 'undefined') {
        continue;
    }
    if (arr_11[i] < min){
        min = arr_11[i];
    }
}
console.log ('min = ' + min);

var arr_12 = [1,undefined,3,5,-3];
var sum = 0;
for (var i = 0; i < arr_12.length; i++) {
    if (typeof arr_12[i] !== 'undefined') {
        sum += arr_12[i]
    }
}
console.log ('sum = ' + sum);


//  Array = [1,NaN,3,5,-3] і цикл for

var arr_13 = [1,NaN,3,5,-3];
var max = arr_13[0];
for (var i = 0; i < arr_13.length; i++) {
    if (arr_13[i] > max){
        max = arr_13[i];
    }
}
console.log ('max = ' + max);

var arr_14 = [1,NaN,3,5,-3];
var min = arr_14[0];
for (var i = 0; i < arr_14.length; i++) {
    if (arr_14[i] < min){
        min = arr_14[i];
    }
}
console.log ('min = ' + min);

var arr_15 = [1,NaN,3,5,-3];
var sum = 0;
for (var i = 0; i < arr_15.length; i++) {
    if (!isNaN(arr_15[i])) {
        sum += arr_15[i]
    }
}
console.log ('sum = ' + sum);


var arr_16 = [2,1,4,'sdf',NaN, undefined, 4, 7,9];



