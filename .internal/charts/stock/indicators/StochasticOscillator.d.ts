import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { IValueAxisDataItem } from "../../xy/axes/ValueAxis.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IStochasticOscillatorSettings extends IChartIndicatorSettings {
    /**
     * A value for "overbought" threshold.
     */
    overBought?: number;
    /**
     * A value for "oversold" threshold.
     */
    overSold?: number;
    /**
     * A color for "slow" section.
     */
    slowColor?: Color;
    /**
     * Smoothing "k" parameter.
     */
    kSmoothing?: number;
    /**
     * Smoothing "d" parameter.
     */
    dSmoothing?: number;
}
export interface IStochasticOscillatorPrivate extends IChartIndicatorPrivate {
}
export interface IStochasticOscillatorEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class StochasticOscillator extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IStochasticOscillatorSettings;
    _privateSettings: IStochasticOscillatorPrivate;
    _events: IStochasticOscillatorEvents;
    overBought: DataItem<IValueAxisDataItem>;
    overSold: DataItem<IValueAxisDataItem>;
    /**
     * Indicator series.
     */
    series: LineSeries;
    /**
     * Indicator series.
     */
    slowSeries: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    protected _afterNew(): void;
    _createSeries(): LineSeries;
    _prepareChildren(): void;
    _updateChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=StochasticOscillator.d.ts.map