import type { TimeUnit } from "../../../core/util/Time.js";
import type { DateAxis } from "../../xy/axes/DateAxis.js";
import type { AxisRenderer } from "../../xy/axes/AxisRenderer.js";
import { StockControl, IStockControlSettings, IStockControlPrivate, IStockControlEvents } from "./StockControl.js";
import { IDisposer } from "../../../core/util/Disposer.js";
export interface IPeriod {
    timeUnit: TimeUnit | "ytd" | "max";
    count?: number;
    name?: string;
}
export interface IPeriodSelectorSettings extends IStockControlSettings {
    /**
     * A list periods to choose from.
     */
    periods?: IPeriod[];
    /**
     * Hide periods that are longer than the actual data.
     *
     * @default false
     * @since 5.3.9
     */
    hideLongPeriods?: boolean;
}
export interface IPeriodSelectorPrivate extends IStockControlPrivate {
    /**
     * @ignore
     */
    axis?: DateAxis<AxisRenderer>;
    /**
     * @ignore
     */
    deferReset?: boolean;
    /**
     * @ignore
     */
    deferTimeout?: IDisposer;
}
export interface IPeriodSelectorEvents extends IStockControlEvents {
}
/**
 * A pre-defined period selector control for [[StockToolback]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/period-selector/} for more info
 */
export declare class PeriodSelector extends StockControl {
    static className: string;
    static classNames: Array<string>;
    _settings: IPeriodSelectorSettings;
    _privateSettings: IPeriodSelectorPrivate;
    _events: IPeriodSelectorEvents;
    protected _groupChangedDp: IDisposer | undefined;
    protected _groupChangedTo: IDisposer | undefined;
    protected _afterNew(): void;
    protected _initPeriodButtons(): void;
    protected _resetActiveButtons(): void;
    protected _setPeriodButtonStatus(): void;
    _afterChanged(): void;
    protected _getChart(): any;
    protected _getAxis(): any;
    selectPeriod(period: IPeriod): void;
    protected _highlightPeriod(period: IPeriod): void;
}
//# sourceMappingURL=PeriodSelector.d.ts.map