import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
export interface IAverageSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IAverageSeriesSettings extends ISimpleLineSeriesSettings {
    /**
     * Value field to use for calculations.
     *
     * @default "value"
     */
    field: "open" | "value" | "low" | "high";
}
export interface IAverageSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class AverageSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IAverageSeriesSettings;
    _privateSettings: IAverageSeriesPrivate;
    _dataItemSettings: IAverageSeriesDataItem;
    protected _tag: string;
    protected _updateSegment(index: number): void;
    protected _setXLocation(): void;
}
//# sourceMappingURL=AverageSeries.d.ts.map