// @type

function foo(value: ?number) {
    return value
}

foo(10); // OK
foo(); // OK
foo(undefined); // OK
foo(null); // OK