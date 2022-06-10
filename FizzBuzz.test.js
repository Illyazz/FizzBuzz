const FizzBuzz = require('./FizzBuzz');

describe('Testing both are multiples', () => {
    test('Multiple of Both', () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz");
    expect(FizzBuzz(-15)).toBe("FizzBuzz");
    });
})

describe('Testing multiple of 3', () => {
    test('Multiple of 3', () => {
        expect(FizzBuzz(6)).toBe("Fizz");
        expect(FizzBuzz(6.00)).toBe("Fizz");
    });
})

describe('Testing multiple of 5', () => {
    test('Multiple of 5', () => {
        expect(FizzBuzz(10)).toBe("Buzz");
    });
})

describe('Testing multiple of none', () => {
    test('Multiple of none', () => {
        expect(FizzBuzz(13)).toBe(13);
    });
})
