import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { DataItem } from "../../../core/render/Component.js";
import { DrawingSeries, IDrawingSeriesSettings, IDrawingSeriesPrivate, IDrawingSeriesDataItem } from "./DrawingSeries.js";
import { Ellipse } from "../../../core/render/Ellipse.js";
import { ListTemplate } from "../../../core/util/List.js";
import { Template } from "../../../core/util/Template.js";
export interface IEllipseSeriesDataItem extends IDrawingSeriesDataItem {
}
export interface IEllipseSeriesSettings extends IDrawingSeriesSettings {
}
export interface IEllipseSeriesPrivate extends IDrawingSeriesPrivate {
}
export declare class EllipseSeries extends DrawingSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: IEllipseSeriesSettings;
    _privateSettings: IEllipseSeriesPrivate;
    _dataItemSettings: IEllipseSeriesDataItem;
    protected _ellipses: Array<Ellipse>;
    protected _tag: string;
    protected _clickPX: number;
    protected _clickVY: number;
    /**
     * @ignore
     */
    makeEllipse(): Ellipse;
    readonly ellipses: ListTemplate<Ellipse>;
    protected _afterNew(): void;
    protected _handleFillDragStop(event: ISpritePointerEvent, index: number): void;
    protected _handleBulletDragged(event: ISpritePointerEvent): void;
    protected _handlePointerClick(event: ISpritePointerEvent): void;
    protected _createElements(index: number, dataItem?: DataItem<IDrawingSeriesDataItem>): void;
    protected _handlePointerMove(event: ISpritePointerEvent): void;
    protected _addPoints(event: ISpritePointerEvent, index: number): void;
    protected _addPoint(valueX: number, valueY: number, corner: string, index: number): void;
    _updateChildren(): void;
    disposeDataItem(dataItem: DataItem<this["_dataItemSettings"]>): void;
    protected _getEllipseTemplate(): Template<any>;
}
//# sourceMappingURL=EllipseSeries.d.ts.map