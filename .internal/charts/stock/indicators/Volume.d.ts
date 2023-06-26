import type { IIndicatorEditableSetting } from "./Indicator.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { ColumnSeries } from "../../xy/series/ColumnSeries.js";
import { Color } from "../../../core/util/Color.js";
export interface IVolumeSettings extends IChartIndicatorSettings {
    /**
     * An icreasing color.
     */
    increasingColor?: Color;
    /**
     * A decreasing color.
     */
    decreasingColor?: Color;
}
export interface IVolumePrivate extends IChartIndicatorPrivate {
}
export interface IVolumeEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class Volume extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IVolumeSettings;
    _privateSettings: IVolumePrivate;
    _events: IVolumeEvents;
    /**
     * Indicator series.
     */
    series: ColumnSeries;
    _editableSettings: IIndicatorEditableSetting[];
    protected _themeTag: string;
    _createSeries(): ColumnSeries;
    _prepareChildren(): void;
    /**
     * @ignore
     */
    prepareData(): void;
}
//# sourceMappingURL=Volume.d.ts.map