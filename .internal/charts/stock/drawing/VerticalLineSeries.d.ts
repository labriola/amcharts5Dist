import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { Line } from "../../../core/render/Line.js";
import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
import type { Template } from "../../../core/util/Template.js";
export interface IVerticalLineSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IVerticalLineSeriesSettings extends ISimpleLineSeriesSettings {
}
export interface IVerticalLineSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class VerticalLineSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IVerticalLineSeriesSettings;
    _privateSettings: IVerticalLineSeriesPrivate;
    _dataItemSettings: IVerticalLineSeriesDataItem;
    protected _tag: string;
    protected _handleBulletDragged(event: ISpritePointerEvent): void;
    protected _updateSegment(index: number): void;
    protected _handlePointerMoveReal(): void;
    protected _updateExtensionLine(line: Line, template: Template<any>): void;
    protected _handlePointerClickReal(event: ISpritePointerEvent): void;
}
//# sourceMappingURL=VerticalLineSeries.d.ts.map