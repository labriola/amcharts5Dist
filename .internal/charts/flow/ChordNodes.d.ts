import type { DataItem } from "../../core/render/Component.js";
import type { FlowNode } from "./FlowNode.js";
import type { Chord } from "./Chord.js";
import type { Bullet } from "../../core/render/Bullet.js";
import { FlowNodes, IFlowNodesSettings, IFlowNodesDataItem, IFlowNodesPrivate, IFlowNodesEvents } from "./FlowNodes.js";
import { Slice } from "../../core/render/Slice.js";
import { ListTemplate } from "../../core/util/List.js";
import { RadialLabel } from "../../core/render/RadialLabel.js";
export interface IChordNodesDataItem extends IFlowNodesDataItem {
    /**
     * Node [[Slice]] element.
     */
    slice: Slice;
    /**
     * Node label element.
     */
    label: RadialLabel;
}
export interface IChordNodesSettings extends IFlowNodesSettings {
}
export interface IChordNodesPrivate extends IFlowNodesPrivate {
}
export interface IChordNodesEvents extends IFlowNodesEvents {
}
/**
 * Holds instances of nodes for a [[Chord]] series.
 */
export declare class ChordNodes extends FlowNodes {
    static className: string;
    static classNames: Array<string>;
    /**
     * List of label elements.
     *
     * @default new ListTemplate<RadialLabel>
     */
    readonly labels: ListTemplate<RadialLabel>;
    _settings: IChordNodesSettings;
    _privateSettings: IChordNodesPrivate;
    _dataItemSettings: IChordNodesDataItem;
    _events: IChordNodesEvents;
    /**
     * Related [[Chord]] series.
     */
    flow: Chord | undefined;
    protected _dAngle: number;
    /**
     * List of slice elements.
     *
     * @default new ListTemplate<Slice>
     */
    readonly rectangles: ListTemplate<Slice>;
    /**
     * @ignore
     */
    makeNode(dataItem: DataItem<this["_dataItemSettings"]>): FlowNode;
    _positionBullet(bullet: Bullet): void;
}
//# sourceMappingURL=ChordNodes.d.ts.map