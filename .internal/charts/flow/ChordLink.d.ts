import { FlowLink, IFlowLinkPrivate, IFlowLinkSettings } from "./FlowLink.js";
import type { DataItem } from "../../core/render/Component.js";
import type { IChordNodesDataItem } from "./ChordNodes.js";
import type { Percent } from "../../core/util/Percent.js";
import type { Chord, IChordDataItem } from "./Chord.js";
import type { IOrientationPoint, IPoint } from "../../core/util/IPoint.js";
export interface IChordLinkSettings extends IFlowLinkSettings {
    /**
     * Source data item.
     */
    source?: DataItem<IChordNodesDataItem>;
    /**
     * target data item.
     */
    target?: DataItem<IChordNodesDataItem>;
    /**
     * Radius of the link at the source.
     */
    sourceRadius?: number | Percent;
    /**
     * Radius of the link at the end (target).
     */
    targetRadius?: number | Percent;
}
export interface IChordLinkPrivate extends IFlowLinkPrivate {
}
/**
 * A link element used in [[Chord]] chart.
 */
export declare class ChordLink extends FlowLink {
    _p0: IPoint | undefined;
    _p1: IPoint | undefined;
    _type: "line" | "curve" | undefined;
    _settings: IChordLinkSettings;
    _privateSettings: IChordLinkPrivate;
    static className: string;
    static classNames: Array<string>;
    protected _dataItem: DataItem<IChordDataItem> | undefined;
    series: Chord | undefined;
    getPoint(location: number): IOrientationPoint;
}
//# sourceMappingURL=ChordLink.d.ts.map