import { render } from "../../utils";

const ShouldRender = ({ condition, children }:
    { condition: boolean, children: JSX.Element | JSX.Element[] }): JSX.Element | null => {

    if (!condition) return null;

    return render(children);
}

export default ShouldRender;
