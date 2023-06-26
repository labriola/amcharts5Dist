import type { IIndicatorEditableSetting } from "./Indicator.js";
import type { XYSeries } from "../../xy/series/XYSeries.js";
import { ChartIndicator, IChartIndicatorSettings, IChartIndicatorPrivate, IChartIndicatorEvents } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
export interface IOnBalanceVolumeSettings extends IChartIndicatorSettings {
    /**
     * Chart's main volume series.
     */
    volumeSeries: XYSeries;
}
export interface IOnBalanceVolumePrivate extends IChartIndicatorPrivate {
}
export interface IOnBalanceVolumeEvents extends IChartIndicatorEvents {
}
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare class OnBalanceVolume extends ChartIndicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IOnBalanceVolumeSettings;
    _privateSettings: IOnBalanceVolumePrivate;
    _events: IOnBalanceVolumeEvents;
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
//# sourceMappingURL=OnBalanceVolume.d.ts.map