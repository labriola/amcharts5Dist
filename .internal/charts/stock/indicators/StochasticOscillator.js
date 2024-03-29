import { ChartIndicator } from "./ChartIndicator.js";
import { LineSeries } from "../../xy/series/LineSeries.js";
import * as $array from "../../../core/util/Array.js";
/**
 * An implementation of a [[StockChart]] indicator.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export class StochasticOscillator extends ChartIndicator {
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
        /**
         * Indicator series.
         */
        Object.defineProperty(this, "slowSeries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_editableSettings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [{
                    key: "period",
                    name: this.root.language.translateAny("Period"),
                    type: "number"
                }, {
                    key: "kSmoothing",
                    name: this.root.language.translateAny("%K Smoothing"),
                    type: "number"
                }, {
                    key: "dSmoothing",
                    name: this.root.language.translateAny("%D Smoothing"),
                    type: "number"
                }, {
                    key: "overBought",
                    name: this.root.language.translateAny("Overbought"),
                    type: "number"
                }, {
                    key: "overSold",
                    name: this.root.language.translateAny("Oversold"),
                    type: "number"
                }, {
                    key: "seriesColor",
                    name: this.root.language.translateAny("Fast"),
                    type: "color"
                }, {
                    key: "slowColor",
                    name: this.root.language.translateAny("Slow"),
                    type: "color"
                }]
        });
        Object.defineProperty(this, "_themeTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "stochastic"
        });
    }
    _afterNew() {
        super._afterNew();
        this.yAxis.setAll({ min: 0, max: 100, strictMinMax: true });
        // overbought range
        const overBought = this.yAxis.makeDataItem({});
        this.overBought = overBought;
        this.yAxis.createAxisRange(overBought);
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
        this.yAxis.createAxisRange(overSold);
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
        const slowSeries = this.panel.series.push(LineSeries.new(this._root, {
            valueXField: "valueX",
            valueYField: "slow",
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            groupDataDisabled: true,
            themeTags: ["indicator", "slow"]
        }));
        this.slowSeries = slowSeries;
    }
    _createSeries() {
        return this.panel.series.push(LineSeries.new(this._root, {
            themeTags: ["indicator"],
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            valueXField: "valueX",
            valueYField: "fast",
            stroke: this.get("seriesColor"),
            fill: undefined
        }));
    }
    _prepareChildren() {
        if (this.isDirty("kSmoothing") || this.isDirty("dSmoothing")) {
            this._dataDirty = true;
        }
        super._prepareChildren();
    }
    _updateChildren() {
        super._updateChildren();
        const overSoldValue = this.get("overSold", 20);
        const overBoughtValue = this.get("overBought", 80);
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
        this.series.get("yAxis").set("baseValue", overSoldValue + (overBoughtValue - overSoldValue) / 2);
        if (this.isDirty("slowColor")) {
            this._updateSeriesColor(this.slowSeries, this.get("slowColor"), "slowColor");
        }
    }
    /**
     * @ignore
     */
    prepareData() {
        if (this.series) {
            const dataItems = this.get("stockSeries").dataItems;
            let period = this.get("period", 14);
            let data = [];
            let index = 0;
            $array.each(dataItems, (dataItem) => {
                const valueX = dataItem.get("valueX");
                let k;
                if (index >= period - 1) {
                    let value = this._getValue(dataItem);
                    if (value != null) {
                        let lp = Infinity;
                        let hp = -lp;
                        for (let j = index; j > index - period; j--) {
                            let h = dataItems[j].get("highValueY");
                            let l = dataItems[j].get("lowValueY");
                            if (h != null && l != null) {
                                if (l < lp) {
                                    lp = l;
                                }
                                if (h > hp) {
                                    hp = h;
                                }
                            }
                        }
                        k = (value - lp) / (hp - lp) * 100;
                    }
                }
                if (k == null) {
                    data.push({ valueX: valueX });
                }
                else {
                    data.push({ valueX: valueX, value_y: k });
                }
                index++;
            });
            period = this.get("kSmoothing", 1);
            this._sma(data, period, "value_y", "fast");
            period = this.get("dSmoothing", 3);
            this._sma(data, period, "fast", "slow");
            this.series.data.setAll(data);
            this.slowSeries.data.setAll(data);
        }
    }
}
Object.defineProperty(StochasticOscillator, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "StochasticOscillator"
});
Object.defineProperty(StochasticOscillator, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ChartIndicator.classNames.concat([StochasticOscillator.className])
});
//# sourceMappingURL=StochasticOscillator.js.map