import { BaseColumnSeries } from "./BaseColumnSeries.js";
import { Template } from "../../../core/util/Template.js";
import { ListTemplate } from "../../../core/util/List.js";
import { RoundedRectangle } from "../../../core/render/RoundedRectangle.js";
import * as $utils from "../../../core/util/Utils.js";
export class ColumnSeries extends BaseColumnSeries {
    constructor() {
        super(...arguments);
        /**
         * A [[TemplateList]] of all columns in series.
         *
         * `columns.template` can be used to set default settings for all columns,
         * or to change on existing ones.
         */
        Object.defineProperty(this, "columns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
                position: "absolute",
                themeTags: $utils.mergeTags(this.columns.template.get("themeTags", []), ["series", "column"])
            }, [this.columns.template]))
        });
    }
    /**
     * @ignore
     */
    makeColumn(dataItem, listTemplate) {
        const column = this.mainContainer.children.push(listTemplate.make());
        column._setDataItem(dataItem);
        listTemplate.push(column);
        return column;
    }
    _processAxisRange(axisRange) {
        super._processAxisRange(axisRange);
        axisRange.columns = new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
            position: "absolute",
            themeTags: $utils.mergeTags(axisRange.columns.template.get("themeTags", []), ["series", "column"]),
        }, [this.columns.template, axisRange.columns.template]));
    }
}
Object.defineProperty(ColumnSeries, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "ColumnSeries"
});
Object.defineProperty(ColumnSeries, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: BaseColumnSeries.classNames.concat([ColumnSeries.className])
});
//# sourceMappingURL=ColumnSeries.js.map