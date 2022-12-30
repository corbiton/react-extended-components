import FilterConfig from "../../types/FilterConfig";

const Filter = ({ config }: { config: FilterConfig }) => {
    const componentConfig: any = { ...config };
    delete componentConfig.items;
    delete componentConfig.dataKey;
    delete componentConfig.element;
    delete componentConfig.id;
    delete componentConfig.predicate;

    const filteredItems = config.items.filter(config.predicate);

    return <>
        {filteredItems.map((item, index, arr) => {
            const key = config.id ? item[config.id] : index;
            const props = {
                ...componentConfig,
                key,
                [config.dataKey]: item
            };
            return <config.element {...props} />;
        })}
    </>;
};

export default Filter;

