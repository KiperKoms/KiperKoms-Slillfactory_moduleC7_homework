const getReversString = require('./functionString')

describe("test getReversString function", () => {
    it("should revers Привет", () => {
        const result = getReversString("Привет");
        expect(result).toBe('тевирП')
    });
    it("should revers Hello", () => {
        const result = getReversString("Hello");
        expect(result).toBe('olleH')
    });
    it("should revers 123", () => {
        const result = getReversString("123");
        expect(result).toBe('321')
    });
    it("should revers А роза упала на лапу азора", () => {
        const result = getReversString("А роза упала на лапу азора");
        expect(result).toBe('ароза упал ан алапу азор А')
    });
});