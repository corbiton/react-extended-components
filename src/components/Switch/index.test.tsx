import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '.';

describe('Switch Component', () => {
    it('should render child when matching switch case is found', () => {
        const Component = () => <Switch value={1}>
            <Switch.Case when={1}>
                <h1>Child 1</h1>
            </Switch.Case>
            <Switch.Case when={2}>
                <h1>Child 2</h1>
            </Switch.Case>
            <Switch.Default>
                <h1>Default Child</h1>
            </Switch.Default>
        </Switch>;

        const { getByText } = render(<Component />);
        const elem = getByText(/child 1/i);

        expect(elem).toBeInTheDocument();
        expect(() => getByText(/Child 2/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Default Child/i)).toThrow('Unable to find an element');
    });

    it('should render children when matching switch case is found', () => {
        const Component = () => <Switch value={1}>
            <Switch.Case when={1}>
                <h1>Child 1</h1>
                <h1>Hello World</h1>
            </Switch.Case>
            <Switch.Case when={2}>
                <h1>Child 2</h1>
            </Switch.Case>
            <Switch.Default>
                <h1>Default Child</h1>
            </Switch.Default>
        </Switch>;

        const { getByText } = render(<Component />);
        const elem1 = getByText(/child 1/i);
        const elem2 = getByText(/hello world/i);

        expect(elem1).toBeInTheDocument();
        expect(elem2).toBeInTheDocument();
        expect(() => getByText(/Child 2/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Default Child/i)).toThrow('Unable to find an element');

    });

    it('should render default case child no matching switch case is found', () => {
        const Component = () => <Switch value={10}>
            <Switch.Case when={1}>
                <h1>Child 1</h1>
                <h1>Hello World</h1>
            </Switch.Case>
            <Switch.Case when={2}>
                <h1>Child 2</h1>
            </Switch.Case>
            <Switch.Default>
                <h1>Default Child</h1>
            </Switch.Default>
        </Switch>;

        const { getByText } = render(<Component />);
        const elem1 = getByText(/Default Child/i);
        expect(() => getByText(/Child 1/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Child 2/i)).toThrow('Unable to find an element');

        expect(elem1).toBeInTheDocument();
    });

    it('should render default case children no matching switch case is found', () => {
        const Component = () => <Switch value={10}>
            <Switch.Case when={1}>
                <h1>Child 1</h1>
                <h1>Hello World</h1>
            </Switch.Case>
            <Switch.Case when={2}>
                <h1>Child 2</h1>
            </Switch.Case>
            <Switch.Default>
                <h1>Default Child</h1>
                <h1>Hello React</h1>
            </Switch.Default>
        </Switch>;

        const { getByText } = render(<Component />);
        const elem1 = getByText(/Default Child/i);
        const elem2 = getByText(/hello react/i);

        expect(elem1).toBeInTheDocument();
        expect(elem2).toBeInTheDocument();
        expect(() => getByText(/Child 1/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Child 2/i)).toThrow('Unable to find an element');
    });

    it('should return null when no default case is passed', () => {
        const Component = () => <Switch value={10}>
            <Switch.Case when={1}>
                <h1>Child 1</h1>
                <h1>Hello World</h1>
            </Switch.Case>
            <Switch.Case when={2}>
                <h1>Child 2</h1>
            </Switch.Case>
        </Switch>;

        const { getByText } = render(<Component />);

        expect(() => getByText(/Child 1/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Hello World/i)).toThrow('Unable to find an element');
        expect(() => getByText(/Child 2/i)).toThrow('Unable to find an element');
    });
});