function solve(arr) {
    let step = Number(arr.pop());
    let resultArr = arr.reduce((acc, el, idx) => {
        if(idx % step === 0) {
            acc.push(el);
        }
        return acc;
    }, []);

    console.log(resultArr.join('\n'));
}
solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)