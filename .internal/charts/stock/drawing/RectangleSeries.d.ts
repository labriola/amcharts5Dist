import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { DataItem } from "../../../core/render/Component.js";
import { DrawingSeries, IDrawingSeriesSettings, IDrawingSeriesPrivate, IDrawingSeriesDataItem } from "./DrawingSeries.js";
export interface IRectangleSeriesDataItem extends IDrawingSeriesDataItem {
}
export interface IRectangleSeriesSettings extends IDrawingSeriesSettings {
}
export interface IRectangleSeriesPrivate extends IDrawingSeriesPrivate {
}
export declare class RectangleSeries extends DrawingSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IRectangleSeriesSettings;
    _privateSettings: IRectangleSeriesPrivate;
    _dataItemSettings: IRectangleSeriesDataItem;
    protected _index: number;
    protected _di: Array<{
        [index: string]: DataItem<IRectangleSeriesDataItem>;
    }>;
    protected _tag: string;
    protected _handleBulletDragged(event: ISpritePointerEvent): void;
    protected _handlePointerClick(event: ISpritePointerEvent): void;
    protected _handlePointerMove(event: ISpritePointerEvent): void;
    protected _addPoints(event: ISpritePointerEvent, index: number): void;
    protected _addPoint(valueX: number | null, valueY: number | null, corner: string, index: number): any;
}
//# sourceMappingURL=RectangleSeries.d.ts.map