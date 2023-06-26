import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import { SimpleLineSeries, ISimpleLineSeriesSettings, ISimpleLineSeriesPrivate, ISimpleLineSeriesDataItem } from "./SimpleLineSeries.js";
import type { Line } from "../../../core/render/Line.js";
import type { Template } from "../../../core/util/Template.js";
export interface IHorizontalLineSeriesDataItem extends ISimpleLineSeriesDataItem {
}
export interface IHorizontalLineSeriesSettings extends ISimpleLineSeriesSettings {
}
export interface IHorizontalLineSeriesPrivate extends ISimpleLineSeriesPrivate {
}
export declare class HorizontalLineSeries extends SimpleLineSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IHorizontalLineSeriesSettings;
    _privateSettings: IHorizontalLineSeriesPrivate;
    _dataItemSettings: IHorizontalLineSeriesDataItem;
    protected _tag: string;
    protected _updateExtension: boolean;
    protected _handleBulletDragged(event: ISpritePointerEvent): void;
    protected _updateExtensionLine(line: Line, template: Template<any>): void;
    protected _handlePointerMoveReal(): void;
    protected _handlePointerClickReal(event: ISpritePointerEvent): void;
}
//# sourceMappingURL=HorizontalLineSeries.d.ts.map