import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { IValueAxisDataItem } from "../../xy/axes/ValueAxis.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { Color } from "../../../core/util/Color.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries, ILineSeriesAxisRange } from "../../xy/series/LineSeries.js";
export interface IRelativeStrengthIndexSettings extends IChartIndicatorSettings {
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
export interface IRelativeStrengthIndexPrivate extends IChartIndicatorPrivate {
}
export interface IRelativeStrengthIndexEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class RelativeStrengthIndex extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IRelativeStrengthIndexSettings;
    _privateSettings: IRelativeStrengthIndexPrivate;
    _events: IRelativeStrengthIndexEvents;
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
//# sourceMappingURL=RelativeStrengthIndex.d.ts.map