import { ChartIndicator } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export class WilliamsR extends ChartIndicator {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "overBought", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overSold", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overSoldRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overBoughtRange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_editableSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [
                {
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Color"),
                    type: "color"
                }, {
                    key: "overBought",
                    name: this.root.language.translateAny("Overbought"),
                    type: "number"
                }, {
                    key: "overBoughtColor",
                    name: this.root.language.translateAny("Overbought"),
                    type: "color"
                }, {
                    key: "overSold",
                    name: this.root.language.translateAny("Oversold"),
                    type: "number"
                }, {
                    key: "overSoldColor",
                    name: this.root.language.translateAny("Oversold"),
                    type: "color"
                }
            ]
        });
        Object.defineProperty(this, "_themeTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "williamsr"
        });
    }
    _afterNew() {
        super._afterNew();
        //this.yAxis.setAll({ min: -100, max: 0, strictMinMax: true });
        // overbought range
        const overBought = this.yAxis.makeDataItem({});
        this.overBought = overBought;
        overBought.set("endValue", 0);
        const overBoughtRange = this.series.createAxisRange(overBought);
        this.overBoughtRange = overBoughtRange;
        const overBoughtFills = overBoughtRange.fills;
        if (overBoughtFills) {
            overBoughtFills.template.set("themeTags", ["overbought", "fill"]);
        }
        const overBoughtGrid = overBought.get("grid");
        if (overBoughtGrid) {
            overBoughtGrid.setAll({ themeTags: ["overbought"], visible: true });
            overBoughtGrid._applyThemes();
        }
        const overBoughtLabel = overBought.get("label");
        if (overBoughtLabel) {
            overBoughtLabel.setAll({ themeTags: ["overbought"], visible: true, location: 0 });
            overBoughtLabel._applyThemes();
        }
        const overSold = this.yAxis.makeDataItem({});
        this.overSold = overSold;
        overSold.set("endValue", -100);
        const overSoldRange = this.series.createAxisRange(overSold);
        this.overSoldRange = overSoldRange;
        const overSoldFills = overSoldRange.fills;
        if (overSoldFills) {
            overSoldFills.template.set("themeTags", ["oversold", "fill"]);
        }
        const overSoldGrid = overSold.get("grid");
        if (overSoldGrid) {
            overSoldGrid.setAll({ themeTags: ["oversold"], visible: true });
            overSoldGrid._applyThemes();
        }
        const overSoldLabel = overSold.get("label");
        if (overSoldLabel) {
            overSoldLabel.setAll({ themeTags: ["oversold"], visible: true, location: 0 });
            overSoldLabel._applyThemes();
        }
    }
    _createSeries() {
        return this.panel.series.push(LineSeries.new(this._root, {
            themeTags: ["indicator"],
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            valueXField: "valueX",
            valueYField: "williams",
            fill: undefined
        }));
    }
    _updateChildren() {
        super._updateChildren();
        const overSoldValue = this.get("overSold", -80);
        const overBoughtValue = this.get("overBought", -20);
        if (this.isDirty("overBought")) {
            this.overBought.set("value", overBoughtValue);
            const label = this.overBought.get("label");
            if (label) {
                label.set("text", this.getNumberFormatter().format(overBoughtValue));
            }
        }
        if (this.isDirty("overSold")) {
            this.overSold.set("value", overSoldValue);
            const label = this.overSold.get("label");
            if (label) {
                label.set("text", this.getNumberFormatter().format(overSoldValue));
            }
        }
        if (this.isDirty("overSoldColor")) {
            const color = this.get("overSoldColor");
            const label = this.overSold.get("label");
            if (label) {
                label.set("fill", color);
            }
            this.overSold.get("grid").set("stroke", color);
            this.overSoldRange.fills.template.set("fill", color);
            this.overSoldRange.strokes.template.set("stroke", color);
        }
        if (this.isDirty("overBoughtColor")) {
            const color = this.get("overBoughtColor");
            const label = this.overBought.get("label");
            if (label) {
                label.set("fill", color);
            }
            this.overBought.get("grid").set("stroke", color);
            this.overBoughtRange.fills.template.set("fill", color);
            this.overBoughtRange.strokes.template.set("stroke", color);
        }
        let min = Math.min(overBoughtValue, overSoldValue);
        let max = Math.max(overBoughtValue, overSoldValue);
        this.series.get("yAxis").set("baseValue", min + (max - min) / 2);
    }
    /**
     * @ignore
     */
    prepareData() {
        if (this.series) {
            this.set("field", "close");
            const dataItems = this.get("stockSeries").dataItems;
            let data = this._getDataArray(dataItems);
            let period = this.get("period", 14);
            for (let i = 0, len = data.length; i < len; i++) {
                const dataItem = data[i];
                let h = -Infinity;
                let l = Infinity;
                let b = Math.max(0, i - period);
                for (let j = b; j <= i; j++) {
                    let vh = dataItems[j].get("highValueY", 0);
                    if (vh >= h) {
                        h = vh;
                    }
                    let vl = dataItems[j].get("lowValueY", 0);
                    if (vl <= l) {
                        l = vl;
                    }
                }
                dataItem.williams = -100 * (h - dataItem.value_y) / (h - l);
            }
            this.series.data.setAll(data);
        }
    }
}
Object.defineProperty(WilliamsR, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "WilliamsR"
});
Object.defineProperty(WilliamsR, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ChartIndicator.classNames.concat([WilliamsR.className])
});
//# sourceMappingURL=WilliamsR.js.map