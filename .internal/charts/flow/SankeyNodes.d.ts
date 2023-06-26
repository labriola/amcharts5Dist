import type { DataItem } from "../../core/render/Component.js";
import type { FlowNode } from "./FlowNode.js";
import type { Sankey } from "./Sankey.js";
import type { Bullet } from "../../core/render/Bullet.js";
import { ListTemplate } from "../../core/util/List.js";
import { FlowNodes, IFlowNodesSettings, IFlowNodesDataItem, IFlowNodesPrivate, IFlowNodesEvents } from "./FlowNodes.js";
import { RoundedRectangle } from "../../core/render/RoundedRectangle.js";
export interface ISankeyNodesDataItem extends IFlowNodesDataItem {
    rectangle: RoundedRectangle;
}
export interface ISankeyNodesSettings extends IFlowNodesSettings {
}
export interface ISankeyNodesPrivate extends IFlowNodesPrivate {
}
export interface ISankeyNodesEvents extends IFlowNodesEvents {
}
/**
 * Holds instances of nodes for a [[Sankey]] series.
 */
export declare class SankeyNodes extends FlowNodes {
    static className: string;
    static classNames: Array<string>;
    _settings: ISankeyNodesSettings;
    _privateSettings: ISankeyNodesPrivate;
    _dataItemSettings: ISankeyNodesDataItem;
    _events: ISankeyNodesEvents;
    /**
     * List of rectangle elements.
     *
     * @default new ListTemplate<RoundedRectangle>
     */
    readonly rectangles: ListTemplate<RoundedRectangle>;
    /**
     * Related [[Sankey]] series.
     */
    flow: Sankey | undefined;
    /**
     * @ignore
     */
    makeNode(dataItem: DataItem<this["_dataItemSettings"]>): FlowNode;
    _positionBullet(bullet: Bullet): void;
    /**
     * @ignore
     */
    disposeDataItem(dataItem: DataItem<this["_dataItemSettings"]>): void;
}
//# sourceMappingURL=SankeyNodes.d.ts.map