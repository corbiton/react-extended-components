import ShouldRender from ".";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ShouldRender', () => {
    it('should render child when condition is true', () => {
        const Component = () => <ShouldRender condition={1 === 1}>
            <h1>Hello World</h1>
        </ShouldRender>

        const { getByText } = render(<Component />);

        const linkElement = getByText(/hello world/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should render children when condition is true', () => {
        const Component = () => <ShouldRender condition={1 === 1}>
            <h1>Hello World</h1>
            <h2>Hello React</h2>
        </ShouldRender>

        const { getByText } = render(<Component />);

        const element1 = getByText(/hello world/i);
        const element2 = getByText(/hello React/i);

        expect(element1).toBeInTheDocument();
        expect(element2).toBeInTheDocument();
    });

    it('should not render child when condition is false', () => {
        const Component = () => <ShouldRender condition={false}>
            <h1>Hello World</h1>
        </ShouldRender>

        const { getByText } = render(<Component />);

        expect(() => getByText(/hello world/i)).toThrow('Unable to find an element');
    });

    it('should not render children when condition is false', () => {
        const Component = () => <ShouldRender condition={false}>
            <h1>Hello World</h1>
            <h2>Hello React</h2>
        </ShouldRender>

        const { getByText } = render(<Component />);

        expect(() => getByText(/hello React/i)).toThrow('Unable to find an element');
        expect(() => getByText(/hello world/i)).toThrow('Unable to find an element');
    });
});

