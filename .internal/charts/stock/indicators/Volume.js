import { ChartIndicator } from "./ChartIndicator.js";
import { ColumnSeries } from "../../xy/series/ColumnSeries.js";
import { Color } from "../../../core/util/Color.js";
import * as $array from "../../../core/util/Array.js";
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export class Volume extends ChartIndicator {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "_editableSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [{
                    key: "increasingColor",
                    name: this.root.language.translateAny("Up volume"),
                    type: "color"
                }, {
                    key: "decreasingColor",
                    name: this.root.language.translateAny("Down volume"),
                    type: "color"
                }]
        });
        Object.defineProperty(this, "_themeTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "volume"
        });
    }
    _createSeries() {
        return this.panel.series.push(ColumnSeries.new(this._root, {
            themeTags: ["indicator"],
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            valueXField: "valueX",
            valueYField: "volume",
            stroke: this.get("seriesColor"),
            fill: undefined
        }));
    }
    _prepareChildren() {
        if (this.isDirty("increasingColor") || this.isDirty("decreasingColor")) {
            this._dataDirty = true;
        }
        super._prepareChildren();
    }
    /**
     * @ignore
     */
    prepareData() {
        if (this.series) {
            const volumeSeries = this.get("volumeSeries");
            const stockChart = this.get("stockChart");
            if (volumeSeries && stockChart) {
                const dataItems = volumeSeries.dataItems;
                this.setRaw("field", "close");
                let decreasingColor = this.get("decreasingColor", Color.fromHex(0xff0000));
                let increasingColor = this.get("increasingColor", Color.fromHex(0x00ff00));
                let data = this._getDataArray(dataItems);
                $array.each(data, (dataItem) => {
                    dataItem.volume = dataItem.value_y;
                });
                this.series.data.setAll(data);
                $array.each(this.series.dataItems, (dataItem) => {
                    const dataContext = dataItem.dataContext;
                    dataContext.volumeColor = stockChart.getVolumeColor(dataItem, decreasingColor, increasingColor);
                });
            }
        }
    }
}
Object.defineProperty(Volume, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Volume"
});
Object.defineProperty(Volume, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ChartIndicator.classNames.concat([Volume.className])
});
//# sourceMappingURL=Volume.js.map