import type { ISpritePointerEvent } from "../../../core/render/Sprite.js";
import type { DataItem } from "../../../core/render/Component.js";
import type { IPoint } from "../../../core/util/IPoint.js";
import { DrawingSeries, IDrawingSeriesSettings, IDrawingSeriesPrivate, IDrawingSeriesDataItem } from "./DrawingSeries.js";
import { Line } from "../../../core/render/Line.js";
import { ListTemplate } from "../../../core/util/List.js";
import { Template } from "../../../core/util/Template.js";
export interface ISimpleLineSeriesDataItem extends IDrawingSeriesDataItem {
}
export interface ISimpleLineSeriesSettings extends IDrawingSeriesSettings {
    /**
     * Show a dotted line extending from both ends of the drawn line.
     *
     * @default true
     */
    showExtension?: boolean;
}
export interface ISimpleLineSeriesPrivate extends IDrawingSeriesPrivate {
}
export declare class SimpleLineSeries extends DrawingSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: ISimpleLineSeriesSettings;
    _privateSettings: ISimpleLineSeriesPrivate;
    _dataItemSettings: ISimpleLineSeriesDataItem;
    protected _tag: string;
    protected _updateExtension: boolean;
    /**
     * @ignore
     */
    makeLine(): Line;
    readonly lines: ListTemplate<Line>;
    /**
     * @ignore
     */
    makeHitLine(): Line;
    readonly hitLines: ListTemplate<Line>;
    protected _di: Array<{
        [index: string]: DataItem<ISimpleLineSeriesDataItem>;
    }>;
    protected _lines: Array<Line>;
    protected _hitLines: Array<Line>;
    protected _afterNew(): void;
    protected _updateElements(): void;
    protected _updateLine(line: Line, hitLine: Line, p11: IPoint, p22: IPoint, p1: IPoint, p2: IPoint): void;
    protected _handlePointerClickReal(event: ISpritePointerEvent): void;
    protected _handlePointerClick(event: ISpritePointerEvent): void;
    protected _handlePointerMove(event: ISpritePointerEvent): void;
    protected _handlePointerMoveReal(_event: ISpritePointerEvent): void;
    protected _createElements(index: number): void;
    protected _updateExtensionLine(_line: Line, _template: Template<any>): void;
    protected _addTemplates(index: number): void;
    protected _addPoints(event: ISpritePointerEvent, index: number): void;
    protected _addPoint(valueX: number, valueY: number, corner: string, index: number): void;
    disposeDataItem(dataItem: DataItem<this["_dataItemSettings"]>): void;
}
//# sourceMappingURL=SimpleLineSeries.d.ts.map