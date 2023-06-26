import type { IIndicatorEditableSetting } from "./Indicator.js";
import { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IAroonSettings extends IChartIndicatorSettings {
    /**
     * Color for ups.
     */
    upColor?: Color;
    /**
     * Color for downs.
     */
    downColor?: Color;
}
export interface IAroonPrivate extends IChartIndicatorPrivate {
}
export interface IAroonEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class Aroon extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IAroonSettings;
    _privateSettings: IAroonPrivate;
    _events: IAroonEvents;
    /**
     * Indicator series.
     */
    series: LineSeries;
    /**
     * Indicator series for downs.
     */
    downSeries: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): LineSeries;
    protected _afterNew(): void;
    _updateChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=Aroon.d.ts.map