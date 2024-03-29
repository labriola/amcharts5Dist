import { __awaiter } from "tslib";
import { Indicator } from "./Indicator.js";
import { StockPanel } from "../StockPanel.js";
import { XYCursor } from "../../xy/XYCursor.js";
import { DateAxis } from "../../xy/axes/DateAxis.js";
import { GaplessDateAxis } from "../../xy/axes/GaplessDateAxis.js";
import { ValueAxis } from "../../xy/axes/ValueAxis.js";
import { AxisRendererX } from "../../xy/axes/AxisRendererX.js";
import { AxisRendererY } from "../../xy/axes/AxisRendererY.js";
import { Tooltip } from "../../../core/render/Tooltip.js";
import { StockLegend } from "../StockLegend.js";
/**
 * A base class for chart-based [[StockChart]] indicators.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/indicators/} for more info
 */
export class ChartIndicator extends Indicator {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "panel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "xAxis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "yAxis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cursor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "legend", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_themeTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    _afterNew() {
        super._afterNew();
        const stockChart = this.get("stockChart");
        const stockSeries = this.get("stockSeries");
        const seriesChart = stockSeries.chart;
        const root = this._root;
        if (stockChart && seriesChart) {
            // make chart
            let themeTags = ["indicator"];
            if (this._themeTag) {
                themeTags.push(this._themeTag);
            }
            const chart = stockChart.panels.push(StockPanel.new(root, { wheelY: "zoomX", panX: true, panY: false, themeTags: themeTags }));
            chart.addTag("indicator");
            this.panel = chart;
            stockChart.panels.events.on("removeIndex", (e) => {
                if (e.oldValue == chart) {
                    stockChart.indicators.removeValue(this);
                }
            });
            const seriesXAxis = stockSeries.get("xAxis");
            // xAxis
            const xRenderer = AxisRendererX.new(root, {});
            let xAxis;
            let baseInterval = seriesXAxis.get("baseInterval");
            let start = seriesXAxis.get("start");
            let end = seriesXAxis.get("end");
            if (seriesXAxis instanceof GaplessDateAxis) {
                xAxis = chart.xAxes.push(GaplessDateAxis.new(root, { renderer: xRenderer, baseInterval: baseInterval }));
            }
            else {
                xAxis = chart.xAxes.push(DateAxis.new(root, { renderer: xRenderer, baseInterval: baseInterval }));
            }
            xAxis.set("groupData", seriesXAxis.get("groupData"));
            xAxis.set("groupCount", seriesXAxis.get("groupCount"));
            xAxis.set("tooltip", Tooltip.new(root, { forceHidden: true }));
            xAxis.setAll({ start: start, end: end });
            this.xAxis = xAxis;
            // yAxis
            const yRenderer = AxisRendererY.new(root, {});
            const yAxis = chart.yAxes.push(ValueAxis.new(root, {
                renderer: yRenderer,
                tooltip: Tooltip.new(root, { forceHidden: true })
            }));
            this.yAxis = yAxis;
            const series = this._createSeries();
            this.series = series;
            // legend
            const legend = chart.topPlotContainer.children.insertIndex(0, StockLegend.new(root, { stockChart: this.get("stockChart") }));
            legend.data.push(series);
            const legendDataItem = legend.dataItems[legend.dataItems.length - 1];
            legendDataItem.set("panel", chart);
            legendDataItem.get("marker").set("forceHidden", true);
            const settingsButton = legendDataItem.get("settingsButton");
            settingsButton.setPrivate("customData", this);
            const editableSettings = this._editableSettings;
            if (!editableSettings || editableSettings.length == 0) {
                settingsButton.set("forceHidden", true);
            }
            chart.set("cursor", XYCursor.new(root, { yAxis: yAxis, xAxis: xAxis }));
        }
    }
    _dispose() {
        super._dispose();
        const stockChart = this.get("stockChart");
        stockChart.panels.removeValue(this.panel);
    }
    hide(duration) {
        const _super = Object.create(null, {
            hide: { get: () => super.hide }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all([
                _super.hide.call(this, duration),
                this.panel.hide(duration)
            ]);
        });
    }
    show(duration) {
        const _super = Object.create(null, {
            show: { get: () => super.show }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.all([
                _super.show.call(this, duration),
                this.panel.show(duration)
            ]);
        });
    }
}
Object.defineProperty(ChartIndicator, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "ChartIndicator"
});
Object.defineProperty(ChartIndicator, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Indicator.classNames.concat([ChartIndicator.className])
});
//# sourceMappingURL=ChartIndicator.js.map