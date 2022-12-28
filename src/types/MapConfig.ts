type MapConfig = {
    id: string;
    element: React.FC<any>;
    items: any[],
    dataKey: string;
    [x: string | number | symbol]: unknown;
};

export default MapConfig;

