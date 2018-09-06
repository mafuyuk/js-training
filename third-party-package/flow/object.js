// @flow

let obj: {
    foo: number
} = {
    foo: 1,
    bar: 'hello' // 許容できてしまう
};

let obj2: {|foo: number|} = {
    foo: 1,
};