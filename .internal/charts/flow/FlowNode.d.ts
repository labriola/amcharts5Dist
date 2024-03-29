import type { DataItem } from "../../core/render/Component.js";
import type { IFlowNodesDataItem, FlowNodes } from "./FlowNodes.js";
import { Container, IContainerPrivate, IContainerSettings } from "../../core/render/Container.js";
export interface IFlowNodeSettings extends IContainerSettings {
}
export interface IFlowNodePrivate extends IContainerPrivate {
}
/**
 * Base class for flow chart nodes.
 */
export declare class FlowNode extends Container {
    /**
     * Related series.
     */
    series: FlowNodes | undefined;
    _settings: IFlowNodeSettings;
    _privateSettings: IFlowNodePrivate;
    static className: string;
    static classNames: Array<string>;
    protected _dataItem: DataItem<IFlowNodesDataItem> | undefined;
}
//# sourceMappingURL=FlowNode.d.ts.map