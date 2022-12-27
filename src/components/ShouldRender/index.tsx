const ShouldRender = ({ condition, children }:
    { condition: boolean, children: JSX.Element | JSX.Element[] }): JSX.Element | null => {

    if (!condition) return null;

    return Array.isArray(children) ?
        <>
            {children}
        </>
        : children;
}

export default ShouldRender;
