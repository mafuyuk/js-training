// @flow

type MyObject = {
    foo: number,
    bar: string,
    baz: boolean,
};

let obj1: MyObject = {
    foo: 1,
    bar: "hello",
    baz: false,
};

let obj2: MyObject = {
    foo: 2,
    bar: "world",
    baz: true,
};

function foo(val: MyObject): MyObject {
    return val
}