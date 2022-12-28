import { render } from "../../utils";

const Switch = ({ value, children }:
    { value: boolean | number | string | object, children: JSX.Element[] }) => {

    const allCases = children.filter((child: JSX.Element) => child.type === Switch.Case);
    const matchingCase = allCases.find((child: JSX.Element) => child.props.when === value);

    if (matchingCase) {
        return matchingCase;
    }

    const defaultCase = children.find((child: JSX.Element) => child.type === Switch.Default);

    return defaultCase || null;
};

Switch.Case = ({ when, children }: { when: any, children: JSX.Element | JSX.Element[] }) => {
    return render(children);
};

Switch.Default = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return render(children);
};


export default Switch;

