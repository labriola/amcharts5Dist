import type { DataItem } from "../../../core/render/Component.js";
import { FibonacciSeries, IFibonacciSeriesSettings, IFibonacciSeriesPrivate, IFibonacciSeriesDataItem } from "./FibonacciSeries.js";
export interface IFibonacciTimezoneSeriesDataItem extends IFibonacciSeriesDataItem {
}
export interface IFibonacciTimezoneSeriesSettings extends IFibonacciSeriesSettings {
}
export interface IFibonacciTimezoneSeriesPrivate extends IFibonacciSeriesPrivate {
}
export declare class FibonacciTimezoneSeries extends FibonacciSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IFibonacciTimezoneSeriesSettings;
    _privateSettings: IFibonacciTimezoneSeriesPrivate;
    _dataItemSettings: IFibonacciTimezoneSeriesDataItem;
    protected _tag: string;
    protected _updateSegmentReal(index: number): void;
    protected _setXLocation(dataItem: DataItem<this["_dataItemSettings"]>, value: number): void;
    _updateChildrenReal(): void;
}
//# sourceMappingURL=FibonacciTimezoneSeries.d.ts.map