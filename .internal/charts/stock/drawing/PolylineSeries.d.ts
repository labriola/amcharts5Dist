import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { IPoint } from "../../../core/util/IPoint.js";
import { DrawingSeries, IDrawingSeriesSettings, IDrawingSeriesPrivate, IDrawingSeriesDataItem } from "./DrawingSeries.js";
export interface IPolylineSeriesDataItem extends IDrawingSeriesDataItem {
}
export interface IPolylineSeriesSettings extends IDrawingSeriesSettings {
}
export interface IPolylineSeriesPrivate extends IDrawingSeriesPrivate {
}
export declare class PolylineSeries extends DrawingSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IPolylineSeriesSettings;
    _privateSettings: IPolylineSeriesPrivate;
    _dataItemSettings: IPolylineSeriesDataItem;
    protected _pIndex: number;
    protected _tag: string;
    protected _handlePointerClick(event: ISpritePointerEvent): void;
    protected _handleBulletDragStop(event: ISpritePointerEvent): void;
    protected _afterDataChange(): void;
    protected _addPoint(event: ISpritePointerEvent): void;
    protected _checkClosing(event: ISpritePointerEvent): void;
    protected _handleClosing(dataItem: DataItem<this["_dataItemSettings"]>, point: IPoint): void;
    protected _updateElements(): void;
}
//# sourceMappingURL=PolylineSeries.d.ts.map