console.log(Symbol('foo') === Symbol('foo')); // false

const symbol = Symbol();

const obj = {
    [symbol]: 'value',
};

// obj['symbol']; // 문자열을 통해 접근 X
obj[symbol];
