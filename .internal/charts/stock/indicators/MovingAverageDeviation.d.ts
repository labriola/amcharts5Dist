import type { IIndicatorEditableSetting } from "./Indicator.js";
import { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { ColumnSeries } from "../../xy/series/ColumnSeries.js";
export interface IMovingAverageDeviationSettings extends IChartIndicatorSettings {
    /**
     * Increasing color.
     */
    increasingColor?: Color;
    /**
     * Decreasing color.
     */
    decreasingColor?: Color;
    /**
     * Type of the moving average.
     *
     * @default "simple"
     */
    type?: "simple" | "weighted" | "exponential" | "dema" | "tema";
    /**
     * How units are calculated.
     *
     * @default "points"
     */
    unit?: "points" | "percent";
}
export interface IMovingAverageDeviationPrivate extends IChartIndicatorPrivate {
}
export interface IMovingAverageDeviationEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class MovingAverageDeviation extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IMovingAverageDeviationSettings;
    _privateSettings: IMovingAverageDeviationPrivate;
    _events: IMovingAverageDeviationEvents;
    /**
     * Indicator series.
     */
    series: ColumnSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): ColumnSeries;
    _updateChildren(): void;
    _prepareChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=MovingAverageDeviation.d.ts.map