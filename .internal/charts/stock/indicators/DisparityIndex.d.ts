import type { IIndicatorEditableSetting } from "./Indicator.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IDisparityIndexSettings extends IChartIndicatorSettings {
    /**
     * Type of the moving average.
     *
     * @default "simple"
     */
    movingAverageType?: "simple" | "weighted" | "exponential" | "dema" | "tema";
}
export interface IDisparityIndexPrivate extends IChartIndicatorPrivate {
}
export interface IDisparityIndexEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class DisparityIndex extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IDisparityIndexSettings;
    _privateSettings: IDisparityIndexPrivate;
    _events: IDisparityIndexEvents;
    /**
     * Indicator series.
     */
    series: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): LineSeries;
    _prepareChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=DisparityIndex.d.ts.map