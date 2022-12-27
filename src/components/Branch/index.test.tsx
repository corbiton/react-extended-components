import Branch from "./";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ShouldRender', () => {
    it('should render right child when condition is true', () => {
        const Component = () => <Branch condition={1 === 1}>
            <Branch.If>
                <h1>Truthy</h1>
            </Branch.If>
            <Branch.Else>
                <h1>Falsy</h1>
            </Branch.Else>
        </Branch>

        const { getByText } = render(<Component />);

        const elem = getByText(/truthy/i);

        expect(elem).toBeInTheDocument();
    });

    it('should render right child when condition is false', () => {
        const Component = () => <Branch condition={1 !== 1}>
            <Branch.If>
                <h1>Truthy</h1>
            </Branch.If>
            <Branch.Else>
                <h1>Falsy</h1>
            </Branch.Else>
        </Branch>

        const { getByText } = render(<Component />);

        const elem = getByText(/falsy/i);

        expect(elem).toBeInTheDocument();
    });

    it('should render all children of if branch when condition is true', () => {
        const Component = () => <Branch condition={1 === 1}>
            <Branch.If>
                <h1>Truthy</h1>
                <h1>Hello world</h1>
            </Branch.If>
            <Branch.Else>
                <h1>Falsy</h1>
            </Branch.Else>
        </Branch>

        const { getByText } = render(<Component />);

        const elem1 = getByText(/truthy/i);
        const elem2 = getByText(/hello world/i);

        expect(elem1).toBeInTheDocument();
        expect(elem2).toBeInTheDocument();
        expect(() => getByText(/falsy/i)).toThrow('Unable to find an element');
    });

    it('should render all children of else branch when condition is false', () => {
        const Component = () => <Branch condition={1 !== 1}>
            <Branch.If>
                <h1>Truthy</h1>
                <h1>Hello world</h1>
            </Branch.If>
            <Branch.Else>
                <h1>Falsy</h1>
                <h1>Hello React</h1>
            </Branch.Else>
        </Branch>

        const { getByText } = render(<Component />);

        const elem1 = getByText(/falsy/i);
        const elem2 = getByText(/hello react/i);

        expect(elem1).toBeInTheDocument();
        expect(elem2).toBeInTheDocument();
        expect(() => getByText(/hello world/i)).toThrow('Unable to find an element');
        expect(() => getByText(/truthy/i)).toThrow('Unable to find an element');
    });
});

