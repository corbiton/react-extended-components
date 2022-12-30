import MapConfig from "./MapConfig";

type FilterConfig = MapConfig & { predicate: (item: any, index: number, list: any[]) => boolean }

export default FilterConfig;
