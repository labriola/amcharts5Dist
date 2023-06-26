import type { XYSeries } from "../../xy/series/XYSeries.js";
import type { AxisRenderer } from "../../xy/axes/AxisRenderer.js";
import { Indicator, IIndicatorSettings, IIndicatorPrivate, IIndicatorEvents } from "./Indicator.js";
import { StockPanel } from "../StockPanel.js";
import { XYCursor } from "../../xy/XYCursor.js";
import { DateAxis } from "../../xy/axes/DateAxis.js";
import { ValueAxis } from "../../xy/axes/ValueAxis.js";
import { StockLegend } from "../StockLegend.js";
export interface IChartIndicatorSettings extends IIndicatorSettings {
}
export interface IChartIndicatorPrivate extends IIndicatorPrivate {
}
export interface IChartIndicatorEvents extends IIndicatorEvents {
}
/**
 * A base class for chart-based [[StockChart]] indicators.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export declare abstract class ChartIndicator extends Indicator {
    static className: string;
    static classNames: Array<string>;
    _settings: IChartIndicatorSettings;
    _privateSettings: IChartIndicatorPrivate;
    _events: IChartIndicatorEvents;
    panel: StockPanel;
    xAxis: DateAxis<AxisRenderer>;
    yAxis: ValueAxis<AxisRenderer>;
    cursor: XYCursor;
    legend: StockLegend;
    protected _themeTag?: string;
    protected _afterNew(): void;
    protected _dispose(): void;
    hide(duration?: number): Promise<any>;
    show(duration?: number): Promise<any>;
    protected abstract _createSeries(): XYSeries;
}
//# sourceMappingURL=ChartIndicator.d.ts.map