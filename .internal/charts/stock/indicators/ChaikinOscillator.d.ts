import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { XYSeries } from "../../xy/series/XYSeries.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IChaikinOscillatorSettings extends IChartIndicatorSettings {
    /**
     * Main volume series of the [[StockChart]].
     */
    volumeSeries: XYSeries;
    /**
     * Slow period setting.
     */
    slowPeriod?: number;
}
export interface IChaikinOscillatorPrivate extends IChartIndicatorPrivate {
}
export interface IChaikinOscillatorEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class ChaikinOscillator extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IChaikinOscillatorSettings;
    _privateSettings: IChaikinOscillatorPrivate;
    _events: IChaikinOscillatorEvents;
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
//# sourceMappingURL=ChaikinOscillator.d.ts.map