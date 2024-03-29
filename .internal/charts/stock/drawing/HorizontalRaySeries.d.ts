import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { IPoint } from "../../../core/util/IPoint.js";
import type { Line } from "../../../core/render/Line.js";
import type { Template } from "../../../core/util/Template.js";
import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
export interface IHorizontalRaySeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IHorizontalRaySeriesSettings extends ISimpleLineSeriesSettings {
    /**
     * Value field to use for calculations.
     *
     * @default "value"
     */
    field: "open" | "value" | "low" | "high";
}
export interface IHorizontalRaySeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class HorizontalRaySeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IHorizontalRaySeriesSettings;
    _privateSettings: IHorizontalRaySeriesPrivate;
    _dataItemSettings: IHorizontalRaySeriesDataItem;
    protected _tag: string;
    protected _updateSegment(index: number): void;
    protected _updateLine(line: Line, hitLine: Line, p11: IPoint, _p22: IPoint, p1: IPoint, _p2: IPoint): void;
    protected _setXLocation(): void;
    protected _handlePointerMoveReal(): void;
    protected _handlePointerClickReal(event: ISpritePointerEvent): void;
    protected _updateExtensionLine(line: Line, template: Template<any>): void;
}
//# sourceMappingURL=HorizontalRaySeries.d.ts.map