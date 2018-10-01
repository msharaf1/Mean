function Max(arr){
    var max = 0;
    for (var i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
}

// Max([-100, 1, 6, -8, 9, 500, 3300]);

function Min(arr){
    var min = 0;
    for (var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(min);
}

// Min([-100, 1, 6, -8, 9, 500, 3300]);

function Sum(arr){
    var sum =0;
    for (var i = 0; i < arr.length; i++){
        sum = arr[i] + sum;
        }
    console.log(sum);
}

// Sum([10, 20, 10, 5, 10, -5]);


function Avg(arr){
    var sum =0;
    for (var i = 0; i < arr.length; i++){
        sum = arr[i] + sum;
        }
    var avg = sum/arr.length;
    console.log(avg);
}

Avg([10, 20, 10, 5, 10, -5]);