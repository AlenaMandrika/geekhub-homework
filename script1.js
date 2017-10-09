// Array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1] і цикл while

var arr_1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var max = arr_1[0];
var i = 0;
while (i < arr_1.length){
    if (arr_1[i] > max){
        max = arr_1[i];
    }
    i++;
}
console.log ('max = ' + max);

var arr_2 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var min = arr_2[0];
var i = 0;
while (i < arr_2.length){
    if (arr_2[i] < min){
        min = arr_2[i];
    }
    i++;
}
console.log('min = ' + min);

var arr_3 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];
var sum = 0;
var i = 0;
while (i < arr_3.length){
    sum += arr_3[i];
    i++;
}
console.log('sum = ' + sum);


// Array = [-1,-8,-2] і цикл while

var arr_4 = [-1,-8,-2];
var max = arr_4[0];
while (i < arr_4.length){
    if (arr_4[i] > max){
        max = arr_4[i];
    }
    i++;
}
console.log ('max = ' + max);

var arr_5 = [-1,-8,-2];
var min = arr_5[0];
var i = 0;
while (i < arr_5.length){
    if (arr_5[i] < min){
        min = arr_5[i];
    }
    i++;
}
console.log ('min = ' + min);

var arr_6 = [-1,-8,-2];
var sum = 0;
var i = 0;
while (i < arr_6.length){
    sum += arr_6[i];
    i++;
}
console.log ('sum = ' + sum);


// Array = [1,7,3] і цикл while

var arr_7 = [1,7,3];
var max = arr_7[0];
var i = 0;
while (i < arr_7.length){
    if (arr_7[i] > max){
        max = arr_7[i];
    }
    i++;
}
console.log ('max = ' + max);

var arr_8 = [1,7,3];
var min = arr_8[0];
while (i < arr_8.length){
    if (arr_8[i] < min){
        min = arr_8[i];
    }
    i++;
}
console.log ('min = ' + min);

var arr_9 = [1,7,3];
var sum = 0;
var i = 0;
while (i < arr_9.length){
    sum += arr_9[i];
    i++;
}
console.log ('sum = ' + sum);


// Array = [1,undefined,3,5,-3] і цикл while

var arr_10 = [1,undefined,3,5,-3];
var max = arr_10[0];
var i = 0;
while (i < arr_10.length){
    if (arr_10[i] > max){
        max = arr_10[i];
    }
    i++;
}
console.log ('max = ' + max);

var arr_11 = [1,undefined,3,5,-3];
var min = arr_11[0];
var i = 0;
while (i < arr_11.length){
    if (arr_11[i] < min){
        min = arr_11[i];
    }
    i++;
}
console.log ('min = ' + min);

var arr_12 = [1,undefined,3,5,-3];
var sum = 0;
var i = 0;
while (i < arr_12.length){
    if (typeof arr_12[i] !== 'undefined') {
        sum += arr_12[i];
    }
    i++;
}
console.log ('sum = ' + sum);


// Array = [1,NaN,3,5,-3] і цикл while

var arr_13 = [1,NaN,3,5,-3];
var max = arr_13[0];
var i = 0;
while (i < arr_13.length){
    if (arr_13[i] > max){
        max = arr_13[i];
    }
    i++;
}
console.log ('max = ' + max);

var arr_14 = [1,NaN,3,5,-3];
var min = arr_14[0];
var i = 0;
while (i < arr_14.length){
    if (arr_14[i] < min){
        min = arr_14[i];
    }
    i++;
}
console.log ('min = ' + min);

var arr_15 = [1,NaN,3,5,-3];
var sum = 0;
var i = 0;
while (i < arr_15.length){
    if(!isNaN(arr_15[i])) {
        sum += arr_15[i];
    }
    i++;
}
console.log ('sum = ' + sum);




