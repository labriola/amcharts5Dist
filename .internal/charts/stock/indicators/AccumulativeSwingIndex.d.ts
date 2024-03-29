import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { ILineSeriesAxisRange } from "../../xy/series/LineSeries.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { IValueAxisDataItem } from "../../xy/axes/ValueAxis.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
import { Color } from "../../../core/util/Color.js";
export interface IAccumulativeSwingIndexSettings extends IChartIndicatorSettings {
    /**
     * A "limit move" value.
     */
    limitMoveValue?: number;
    /**
     * Positive color.
     */
    positiveColor?: Color;
    /**
     * Negative color.
     */
    negativeColor?: Color;
}
export interface IAccumulativeSwingIndexPrivate extends IChartIndicatorPrivate {
}
export interface IAccumulativeSwingIndexEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class AccumulativeSwingIndex extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IAccumulativeSwingIndexSettings;
    _privateSettings: IAccumulativeSwingIndexPrivate;
    _events: IAccumulativeSwingIndexEvents;
    /**
     * Indicator series.
     */
    series: LineSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    protected _axisRange?: ILineSeriesAxisRange;
    protected _axisRangeDI?: DataItem<IValueAxisDataItem>;
    _createSeries(): LineSeries;
    _prepareChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=AccumulativeSwingIndex.d.ts.map