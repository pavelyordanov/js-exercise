function aggregate (arr) {
    console.log(arr.reduce((acc,c) => acc+c, 0));

    console.log(arr.reduce((acc,c) => acc > c ? c : acc, Number.MAX_SAFE_INTEGER));

    console.log(arr.reduce((acc,c) => acc < c ? c : acc, Number.MIN_SAFE_INTEGER));

    console.log(arr.reduce((acc,c) => acc*c, 1));

    console.log(arr.reduce((acc,c) => acc+c, ''));
}   

aggregate([2, 3, 10, 5])