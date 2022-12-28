import { render } from "../../utils";

const Branch = ({ condition, children }:
    { condition: boolean, children: JSX.Element[] }): JSX.Element | null => {

    const IfChild = children[0].type === Branch.If ? children[0] : children[1];
    const ElseChild = children[0].type === Branch.Else ? children[0] : children[1];

    return condition ? IfChild : ElseChild;
};

Branch.If = ({ children }: { children: JSX.Element | JSX.Element[] }) => render(children);

Branch.Else = ({ children }: { children: JSX.Element | JSX.Element[] }) => render(children);


export default Branch;
