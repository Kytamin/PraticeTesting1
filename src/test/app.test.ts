import {Calculator} from '../app'

describe("add function", () => {
    test("add two number", () => {
        expect(Calculator.add(1, 2)).toBe(3);
    });
});