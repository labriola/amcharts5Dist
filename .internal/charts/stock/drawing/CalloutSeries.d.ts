import type { Label } from "../../../core/render/Label.js";
import type { Container } from "../../../core/render/Container.js";
import { LabelSeries, ILabelSeriesSettings, ILabelSeriesPrivate, ILabelSeriesDataItem } from "./LabelSeries.js";
import type { DataItem } from "../../../core/render/Component.js";
import { Template } from "../../../core/util/Template.js";
export interface ICalloutSeriesDataItem extends ILabelSeriesDataItem {
    /**
     * Indicates whether callout will attach itself to the closest data item, as
     * opposed to exact location of the click.
     */
    snapToData?: boolean;
}
export interface ICalloutSeriesSettings extends ILabelSeriesSettings {
    /**
     * If set to `true`, callout will attach itself to the closest data item, as
     * opposed to exact location of the click.
     *
     * @default true
     */
    snapToData?: boolean;
}
export interface ICalloutSeriesPrivate extends ILabelSeriesPrivate {
}
export declare class CalloutSeries extends LabelSeries {
    static className: string;
    static classNames: Array<string>;
    _settings: ICalloutSeriesSettings;
    _privateSettings: ICalloutSeriesPrivate;
    _dataItemSettings: ICalloutSeriesDataItem;
    protected _tag: string;
    protected _afterNew(): void;
    protected _tweakBullet2(label: Label, dataItem: DataItem<ICalloutSeriesDataItem>): void;
    protected _tweakBullet(container: Container, dataItem: DataItem<ICalloutSeriesDataItem>): void;
    protected _updatePointer(label: Label): void;
    protected _afterTextSave(dataContext: any): void;
    protected _hideAllBullets(): void;
    protected _getBgTemplate(): Template<any>;
    protected _setXLocation(dataItem: DataItem<this["_dataItemSettings"]>, value: number): void;
}
//# sourceMappingURL=CalloutSeries.d.ts.map