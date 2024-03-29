import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
export interface ITrendLineSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface ITrendLineSeriesSettings extends ISimpleLineSeriesSettings {
    /**
     * Value field to use for calculations.
     *
     * @default "value"
     */
    field: "open" | "value" | "low" | "high";
}
export interface ITrendLineSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class TrendLineSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: ITrendLineSeriesSettings;
    _privateSettings: ITrendLineSeriesPrivate;
    _dataItemSettings: ITrendLineSeriesDataItem;
    protected _tag: string;
    protected _updateSegment(index: number): void;
    protected _setXLocation(): void;
}
//# sourceMappingURL=TrendLineSeries.d.ts.map