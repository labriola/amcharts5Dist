import type { DataItem } from "../../core/render/Component.js";
import type { Color } from "../../core/util/Color.js";
import type { FlowLink } from "./FlowLink.js";
import type { FlowNodes, IFlowNodesDataItem } from "./FlowNodes.js";
import type { ListTemplate } from "../../core/util/List.js";
import type { Bullet } from "../../core/render/Bullet.js";
import type * as d3sankey from "d3-sankey";
import { Series, ISeriesSettings, ISeriesDataItem, ISeriesPrivate, ISeriesEvents } from "../../core/render/Series.js";
import { Container } from "../../core/render/Container.js";
export interface IFlowDataItem extends ISeriesDataItem {
    /**
     * Link value.
     */
    value: number;
    /**
     * @ignore
     */
    valueWorking: number;
    /**
     * Associated link element.
     */
    link: FlowLink;
    /**
     * Link's color.
     */
    fill: Color;
    /**
     * @ignore
     */
    d3SankeyLink: d3sankey.SankeyLink<d3sankey.SankeyExtraProperties, d3sankey.SankeyExtraProperties>;
    /**
     * An ID of the target node.
     */
    targetId: string;
    /**
     * An ID of the source node.
     */
    sourceId: string;
    /**
     * A data item of the source node.
     */
    source: DataItem<IFlowNodesDataItem>;
    /**
     * A data item of the target node.
     */
    target: DataItem<IFlowNodesDataItem>;
}
export interface IFlowSettings extends ISeriesSettings {
    /**
     * A field in data which holds source node ID.
     */
    sourceIdField?: string;
    /**
     * A field in data which holds target node ID.
     */
    targetIdField?: string;
    /**
     * The thickness of node strip in pixels.
     *
     * @default 10
     */
    nodeWidth?: number;
    /**
     * Minimum gap between adjacent nodes.
     *
     * @default 10
     */
    nodePadding?: number;
    /**
     * Minimum size of the node/link.
     *
     * It's a relative value to the sum of all values in the series. If set,
     * this relative value will be used for small value nodes when calculating
     * their size. For example, if it's set to `0.01`, small nodes will be
     * sized like their value is 1% of the total sum of all values in series.
     *
     * @since 5.1.5
     */
    minSize?: number;
}
export interface IFlowPrivate extends ISeriesPrivate {
    valueSum?: number;
    valueLow?: number;
    valueHigh?: number;
}
export interface IFlowEvents extends ISeriesEvents {
}
/**
 * A base class for all flow type series: [[Sankey]] and [[Chord]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/flow-charts/} for more info
 */
export declare abstract class Flow extends Series {
    static className: string;
    static classNames: Array<string>;
    _settings: IFlowSettings;
    _privateSettings: IFlowPrivate;
    _dataItemSettings: IFlowDataItem;
    _events: IFlowEvents;
    /**
     * @ignore
     */
    readonly nodes: FlowNodes;
    /**
     * Container series will place their links in.
     *
     * @default Container.new()
     */
    readonly linksContainer: Container;
    /**
     * @ignore
     */
    abstract readonly links: ListTemplate<FlowLink>;
    protected _nodesData: d3sankey.SankeyNodeMinimal<{}, {}>[];
    protected _linksData: {
        source: d3sankey.SankeyNodeMinimal<{}, {}>;
        target: d3sankey.SankeyNodeMinimal<{}, {}>;
        value: number;
    }[];
    protected _index: number;
    protected _nodesDataSet: boolean;
    protected _linksByIndex: {
        [index: string]: any;
    };
    protected _afterNew(): void;
    /**
     * @ignore
     */
    abstract makeLink(dataItem: DataItem<this["_dataItemSettings"]>): FlowLink;
    protected processDataItem(dataItem: DataItem<this["_dataItemSettings"]>): void;
    protected _onDataClear(): void;
    _prepareChildren(): void;
    _updateLinkColor(dataItem: DataItem<this["_dataItemSettings"]>): void;
    /**
     * @ignore
     */
    disposeDataItem(dataItem: DataItem<this["_dataItemSettings"]>): void;
    /**
     * Shows diagram's data item.
     *
     * @param   dataItem  Data item
     * @param   duration  Animation duration in milliseconds
     * @return            Promise
     */
    hideDataItem(dataItem: DataItem<this["_dataItemSettings"]>, duration?: number): Promise<void>;
    /**
     * Shows diagram's data item.
     *
     * @param   dataItem  Data item
     * @param   duration  Animation duration in milliseconds
     * @return            Promise
     */
    showDataItem(dataItem: DataItem<this["_dataItemSettings"]>, duration?: number): Promise<void>;
    _positionBullet(bullet: Bullet): void;
    protected _getBulletLocation(bullet: Bullet): number;
}
//# sourceMappingURL=Flow.d.ts.map