import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
export interface IQuadrantLineSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IQuadrantLineSeriesSettings extends ISimpleLineSeriesSettings {
    /**
     * Value field to use for calculations.
     *
     * @default "value"
     */
    field: "open" | "value" | "low" | "high";
}
export interface IQuadrantLineSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class QuadrantLineSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IQuadrantLineSeriesSettings;
    _privateSettings: IQuadrantLineSeriesPrivate;
    _dataItemSettings: IQuadrantLineSeriesDataItem;
    protected _tag: string;
    protected _afterNew(): void;
    protected _updateSegment(index: number): void;
    _updateChildren(): void;
    protected _drawFill(): void;
    protected _setXLocation(): void;
    protected _updateLine(): void;
}
//# sourceMappingURL=QuadrantLineSeries.d.ts.map