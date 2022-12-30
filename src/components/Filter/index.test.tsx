import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filter from '.';

describe('Map Component', () => {
    it('should render all items from a list which match the given predicate', () => {
        const PresentationComponent = ({ item }: { item: { val: string } }) => <li>{item.val}</li>
        const ContainerComponent = () => {
            const isEven = (item: any, index: number) => index % 2 === 0;
            const items = [{ id: 1, val: 'item 1' }, { id: 2, val: 'item 2' }, { id: 3, val: 'item 3' }];
            const config = { predicate: isEven, items, id: 'id', dataKey: 'item', element: PresentationComponent };

            return <Filter config={config} />
        }

        const { getByText } = render(<ContainerComponent />);
        const elem1 = getByText(/item 1/i);
        const elem3 = getByText(/item 3/i);

        expect(elem1).toBeInTheDocument();
        expect(elem3).toBeInTheDocument();
        expect(() => getByText(/item 2/i)).toThrow('Unable to find an element');
    });

    it('should pass on extra props to presentation component', () => {
        const predicate = () => true;
        const PresentationComponent = ({ item, prop1, prop2 }:
            { item: { val: string }, prop1: string, prop2: string }) => <li>{item.val} {prop1} {prop2}</li>

        const ContainerComponent = () => {
            const items = [{ id: 1, val: 'item 1' },
            { id: 2, val: 'item 2' },
            { id: 3, val: 'item 3' }];

            const config = {
                predicate,
                items, id: 'id',
                dataKey: 'item',
                element: PresentationComponent,
                prop1: 'Property 1',
                prop2: 'Property 2'
            };

            return <Filter config={config} />
        }
        const { getByText, getAllByText } = render(<ContainerComponent />);
        const elem1 = getAllByText(/item 1 Property 1 Property 2/i);
        const elem2 = getByText(/item 2 Property 1 Property 2/i);
        const elem3 = getByText(/item 3 Property 1 Property 2/i);

        expect(elem1).toBeDefined();
        expect(elem2).toBeDefined();
        expect(elem3).toBeDefined();
    });

    it('should render items when list has scalar values', () => {
        const predicate = () => true;
        const PresentationComponent = ({ item }: { item: number }) => <li data-testid="list-item">{item}</li>
        const ContainerComponent = () => {
            const items = [1, 2, 3, 4];
            const config = { predicate, items, dataKey: 'item', element: PresentationComponent };

            return <Filter config={config} />
        }

        const { container, getAllByTestId } = render(<ContainerComponent />);
        getAllByTestId('list-item').forEach((li, index) => {
            expect(li).toHaveTextContent((index + 1).toString());
        });
    });
});