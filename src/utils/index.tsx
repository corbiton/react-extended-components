export const render = (children: JSX.Element | JSX.Element[]) => {
    if (Array.isArray(children)) {
        return <>{children}</>
    }
    return children;
};
