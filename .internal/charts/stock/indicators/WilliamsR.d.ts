import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { IValueAxisDataItem } from "../../xy/axes/ValueAxis.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries, ILineSeriesAxisRange } from "../../xy/series/LineSeries.js";
export interface IWilliamsRSettings extends IChartIndicatorSettings {
    /**
     * A value for "overbought" threshold.
     */
    overBought?: number;
    /**
     * A value for "oversold" threshold.
     */
    overSold?: number;
    /**
     * A color for "overbought" section.
     */
    overBoughtColor?: Color;
    /**
     * A color for "oversold" section.
     */
    overSoldColor?: Color;
}
export interface IWilliamsRPrivate extends IChartIndicatorPrivate {
}
export interface IWilliamsREvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class WilliamsR extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IWilliamsRSettings;
    _privateSettings: IWilliamsRPrivate;
    _events: IWilliamsREvents;
    overBought: DataItem<IValueAxisDataItem>;
    overSold: DataItem<IValueAxisDataItem>;
    overSoldRange: ILineSeriesAxisRange;
    overBoughtRange: ILineSeriesAxisRange;
    /**
     * Indicator series.
     */
    series: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    protected _afterNew(): void;
    _createSeries(): LineSeries;
    _updateChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=WilliamsR.d.ts.map