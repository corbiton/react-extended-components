import { render } from '.';

describe('utils', () => {
    it('should return one child when only one child is passed', () => {
        const elements = <h1>Hello World</h1>;
        const result = render(elements);

        expect(Array.isArray(result)).toBe(false);
        expect(result).toEqual(elements);
    });

    it('should return one child when only one child is passed', () => {
        const elements = [
            <h1>Hello World</h1>,
            <h2>Hello React</h2>];

        const result = render(elements);

        const expectedResult = <>
            <h1>Hello World</h1>
            <h2>Hello React</h2>
        </>

        expect(result).toEqual(expectedResult);
    });
});
