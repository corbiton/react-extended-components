import MapConfig from "../../types/MapConfig";

const Map = ({ config }: { config: MapConfig }) => {
    const componentConfig: any = { ...config };
    delete componentConfig.items;
    delete componentConfig.dataKey;
    delete componentConfig.element;
    delete componentConfig.id;

    return <>
        {config.items.map((item, index) => {
            const key = config.id ? item[config.id] : index
            const props = {
                ...componentConfig,
                key,
                [config.dataKey]: item
            };
            return <config.element {...props} />;
        })}
    </>;
};

export default Map;
