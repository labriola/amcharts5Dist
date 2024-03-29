import { __awaiter } from "tslib";
import { Label } from "../../core/render/Label.js";
import { Series } from "../../core/render/Series.js";
import { Template } from "../../core/util/Template.js";
import { ListTemplate } from "../../core/util/List.js";
import { FlowNode } from "./FlowNode.js";
import * as $array from "../../core/util/Array.js";
/**
 * Holds instances of nodes for a [[Flow]] series.
 */
export class FlowNodes extends Series {
    constructor() {
        super(...arguments);
        /**
         * List of label elements.
         *
         * @default new ListTemplate<Label>
         */
        Object.defineProperty(this, "labels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ListTemplate(Template.new({}), () => Label._new(this._root, {}, [this.labels.template]))
        });
        /**
         * List of node elements.
         *
         * @default new ListTemplate<FlowNode>
         */
        Object.defineProperty(this, "nodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ListTemplate(Template.new({}), () => FlowNode._new(this._root, { themeTags: ["node"] }, [this.nodes.template]))
        });
        Object.defineProperty(this, "_userDataSet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    _afterNew() {
        this.fields.push("unknown", "name", "fill");
        this.set("idField", "id");
        this.set("nameField", "id");
        this.set("fillField", "fill");
        this.set("unknownField", "unknown");
        this.children.push(this.bulletsContainer);
        super._afterNew();
    }
    _onDataClear() {
        const colors = this.get("colors");
        if (colors) {
            colors.reset();
        }
        this._userDataSet = true;
    }
    processDataItem(dataItem) {
        super.processDataItem(dataItem);
        dataItem.setRaw("d3SankeyNode", { name: dataItem.get("id"), dataItem: dataItem });
        if (dataItem.get("fill") == null) {
            let colors = this.get("colors");
            if (colors) {
                dataItem.setRaw("fill", colors.next());
            }
        }
        dataItem.setRaw("node", this.makeNode(dataItem));
    }
    /**
     * @ignore
     */
    makeNode(dataItem, themeTag) {
        const node = this.nodes.make();
        this.nodes.push(node);
        if (themeTag) {
            node.addTag(themeTag);
        }
        if (dataItem.get("unknown")) {
            node.addTag("unknown");
        }
        this.children.push(node);
        node._setDataItem(dataItem);
        node.series = this;
        dataItem.set("node", node);
        return node;
    }
    /**
     * @ignore
     */
    disposeDataItem(dataItem) {
        super.disposeDataItem(dataItem);
        let node = dataItem.get("node");
        if (node) {
            this.nodes.removeValue(node);
            node.dispose();
        }
        let label = dataItem.get("label");
        if (label) {
            this.labels.removeValue(label);
            label.dispose();
        }
    }
    /**
     * @ignore
     */
    addincomingLink(dataItem, link) {
        let incoming = dataItem.get("incomingLinks");
        if (!incoming) {
            incoming = [];
            dataItem.set("incomingLinks", incoming);
        }
        incoming.push(link);
    }
    /**
     * @ignore
     */
    addOutgoingLink(dataItem, link) {
        let outgoing = dataItem.get("outgoingLinks");
        if (!outgoing) {
            outgoing = [];
            dataItem.set("outgoingLinks", outgoing);
        }
        outgoing.push(link);
    }
    /**
     * Shows node's data item.
     *
     * @param   dataItem  Data item
     * @param   duration  Animation duration in milliseconds
     * @return            Promise
     */
    showDataItem(dataItem, duration) {
        const _super = Object.create(null, {
            showDataItem: { get: () => super.showDataItem }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [_super.showDataItem.call(this, dataItem, duration)];
            const flow = this.flow;
            if (flow) {
                let label = dataItem.get("label");
                if (label) {
                    label.show(duration);
                }
                let links = dataItem.get("outgoingLinks");
                if (links) {
                    $array.each(links, (link) => {
                        flow.showDataItem(link, duration);
                    });
                }
                links = dataItem.get("incomingLinks");
                if (links) {
                    $array.each(links, (link) => {
                        flow.showDataItem(link, duration);
                    });
                }
            }
            yield promises;
        });
    }
    /**
     * Hides series's data item.
     *
     * @param   dataItem  Data item
     * @param   duration  Animation duration in milliseconds
     * @return            Promise
     */
    hideDataItem(dataItem, duration) {
        const _super = Object.create(null, {
            hideDataItem: { get: () => super.hideDataItem }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [_super.hideDataItem.call(this, dataItem, duration)];
            const flow = this.flow;
            if (flow) {
                let label = dataItem.get("label");
                if (label) {
                    label.hide(duration);
                }
                let links = dataItem.get("outgoingLinks");
                if (links) {
                    $array.each(links, (link) => {
                        flow.hideDataItem(link, duration);
                    });
                }
                links = dataItem.get("incomingLinks");
                if (links) {
                    $array.each(links, (link) => {
                        flow.hideDataItem(link, duration);
                    });
                }
            }
            yield promises;
        });
    }
}
Object.defineProperty(FlowNodes, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "FlowNodes"
});
Object.defineProperty(FlowNodes, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Series.classNames.concat([FlowNodes.className])
});
//# sourceMappingURL=FlowNodes.js.map