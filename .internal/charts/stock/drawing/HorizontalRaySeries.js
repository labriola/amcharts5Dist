import { SimpleLineSeries } from "./SimpleLineSeries.js";
import * as $math from "../../../core/util/Math.js";
export class HorizontalRaySeries extends SimpleLineSeries {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "_tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ray"
        });
    }
    _updateSegment(index) {
        if (this._di[index]) {
            const diP1 = this._di[index]["p1"];
            const diP2 = this._di[index]["p2"];
            const series = this.get("series");
            if (series && diP1 && diP2) {
                const xAxis = this.get("xAxis");
                const min = xAxis.getPrivate("min", 0) + 1;
                const max = xAxis.getPrivate("max", 1) - 1;
                let x1 = $math.fitToRange(diP2.get("valueX"), min, max);
                const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
                const field = this.get("field") + "Y";
                if (di1) {
                    let y1 = di1.get(field);
                    this._setContext(diP1, "valueY", y1, true);
                    this._setContext(diP2, "valueY", y1, true);
                    this._setContext(diP1, "valueX", x1);
                    this._setContext(diP2, "valueX", x1 + 0.01);
                    this._positionBullets(diP1);
                    this._positionBullets(diP2);
                }
            }
        }
        this._updateElements();
    }
    _updateLine(line, hitLine, p11, _p22, p1, _p2) {
        line.set("points", [p1, p11]);
        hitLine.set("points", [p1, p11]);
    }
    // need to override so that location would not be set
    _setXLocation() {
    }
    _handlePointerMoveReal() {
    }
    _handlePointerClickReal(event) {
        if (!this._isDragging) {
            this._index++;
            this._addPoints(event, this._index);
            this._isDrawing = false;
        }
    }
    _updateExtensionLine(line, template) {
        line.setAll({
            stroke: template.get("stroke"),
            strokeWidth: template.get("strokeWidth"),
            strokeDasharray: template.get("strokeDasharray"),
            strokeOpacity: template.get("strokeOpacity")
        });
    }
}
Object.defineProperty(HorizontalRaySeries, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "HorizontalRaySeries"
});
Object.defineProperty(HorizontalRaySeries, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: SimpleLineSeries.classNames.concat([HorizontalRaySeries.className])
});
//# sourceMappingURL=HorizontalRaySeries.js.map