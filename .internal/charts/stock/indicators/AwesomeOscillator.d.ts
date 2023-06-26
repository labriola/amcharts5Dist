import type { IIndicatorEditableSetting } from "./Indicator.js";
import { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { ColumnSeries } from "../../xy/series/ColumnSeries.js";
export interface IAwesomeOscillatorSettings extends IChartIndicatorSettings {
    /**
     * Increasing color.
     */
    increasingColor?: Color;
    /**
     * Decreasing color.
     */
    decreasingColor?: Color;
}
export interface IAwesomeOscillatorPrivate extends IChartIndicatorPrivate {
}
export interface IAwesomeOscillatorEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class AwesomeOscillator extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IAwesomeOscillatorSettings;
    _privateSettings: IAwesomeOscillatorPrivate;
    _events: IAwesomeOscillatorEvents;
    /**
     * Indicator series.
     */
    series: ColumnSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): ColumnSeries;
    _updateChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=AwesomeOscillator.d.ts.map