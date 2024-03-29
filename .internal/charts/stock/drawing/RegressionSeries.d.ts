import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
export interface IRegressionSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IRegressionSeriesSettings extends ISimpleLineSeriesSettings {
    /**
     * Value field to use for calculations.
     *
     * @default "value"
     */
    field: "open" | "value" | "low" | "high";
}
export interface IRegressionSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class RegressionSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IRegressionSeriesSettings;
    _privateSettings: IRegressionSeriesPrivate;
    _dataItemSettings: IRegressionSeriesDataItem;
    protected _tag: string;
    protected _updateSegment(index: number): void;
    protected _setXLocation(): void;
}
//# sourceMappingURL=RegressionSeries.d.ts.map