import type { IIndicatorEditableSetting } from "./Indicator.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IStandardDeviationSettings extends IChartIndicatorSettings {
}
export interface IStandardDeviationPrivate extends IChartIndicatorPrivate {
}
export interface IStandardDeviationEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class StandardDeviation extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IStandardDeviationSettings;
    _privateSettings: IStandardDeviationPrivate;
    _events: IStandardDeviationEvents;
    /**
     * Indicator series.
     */
    series: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): LineSeries;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=StandardDeviation.d.ts.map