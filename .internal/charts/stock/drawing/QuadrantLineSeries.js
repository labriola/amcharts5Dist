import { SimpleLineSeries } from "./SimpleLineSeries.js";
export class QuadrantLineSeries extends SimpleLineSeries {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "_tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "quadrant"
        });
    }
    _afterNew() {
        super._afterNew();
        this.strokes.template.set("visible", false);
    }
    _updateSegment(index) {
        const movePoint = this._movePointerPoint;
        const diP1 = this._di[index]["p1"];
        const diP2 = this._di[index]["p2"];
        const series = this.get("series");
        if (series && movePoint && diP1 && diP2) {
            const xAxis = this.get("xAxis");
            let x1 = this._getXValue(diP1.get("valueX"));
            let x2 = this._getXValue(diP2.get("valueX"));
            const di1 = xAxis.getSeriesItem(series, Math.max(0, xAxis.valueToPosition(x1)));
            const di2 = xAxis.getSeriesItem(series, Math.min(1, xAxis.valueToPosition(x2)));
            const field = this.get("field") + "Y";
            if (di1 && di2) {
                let y1 = di1.get(field);
                let y2 = di2.get(field);
                this._setContext(diP1, "valueY", y1, true);
                this._setContext(diP2, "valueY", y2, true);
                this._setContext(diP1, "valueX", x1);
                this._setContext(diP2, "valueX", x2);
                this._positionBullets(diP1);
                this._positionBullets(diP2);
            }
        }
    }
    _updateChildren() {
        super._updateChildren();
        const chart = this.chart;
        this.fills.clear();
        if (chart) {
            for (let i = 0; i < this._lines.length; i++) {
                const line = this._lines[i];
                if (line) {
                    const diP1 = this._di[i]["p1"];
                    const diP2 = this._di[i]["p2"];
                    const di = this._di[i]["e"];
                    const dataContext = di.dataContext;
                    const fill1 = this.makeFill(this.fills);
                    const fill2 = this.makeFill(this.fills);
                    const index = this.dataItems.indexOf(diP1);
                    for (let j = index; j >= 0; j--) {
                        const dataContext = this.dataItems[j].dataContext;
                        const template = dataContext.fill;
                        if (template) {
                            fill1.template = template;
                            fill2.template = template;
                        }
                    }
                    const userData = [this.dataItems.indexOf(diP1), this.dataItems.indexOf(diP2)];
                    let fillColor = this.get("fillColor", this.get("fill"));
                    const fillTemplate = dataContext.fill;
                    if (fillTemplate) {
                        fillColor = fillTemplate.get("fill");
                    }
                    const settings = { userData: userData, fill: fillColor };
                    fill1.setAll(settings);
                    fill2.setAll(settings);
                    fill2.set("forceInactive", true);
                    const p1 = diP1.get("point");
                    const p2 = diP2.get("point");
                    if (p1 && p2) {
                        const dy = (p2.y - p1.y) / 4;
                        const m1y = p1.y + dy;
                        const m2y = p1.y + dy * 2;
                        const m3y = p1.y + dy * 3;
                        line.set("draw", (display) => {
                            display.moveTo(p1.x, p1.y);
                            display.lineTo(p2.x, p1.y);
                            display.moveTo(p1.x, m1y);
                            display.lineTo(p2.x, m1y);
                            display.moveTo(p1.x, m2y);
                            display.lineTo(p2.x, m2y);
                            display.moveTo(p1.x, m3y);
                            display.lineTo(p2.x, m3y);
                            display.moveTo(p1.x, p2.y);
                            display.lineTo(p2.x, p2.y);
                        });
                        fill1.set("draw", (display) => {
                            display.moveTo(p1.x, p1.y);
                            display.lineTo(p2.x, p1.y);
                            display.lineTo(p2.x, p2.y);
                            display.lineTo(p1.x, p2.y);
                            display.lineTo(p1.x, p1.y);
                        });
                        fill2.set("draw", (display) => {
                            display.moveTo(p1.x, m1y);
                            display.lineTo(p2.x, m1y);
                            display.lineTo(p2.x, m3y);
                            display.lineTo(p1.x, m3y);
                            display.lineTo(p1.x, m1y);
                        });
                    }
                }
            }
        }
    }
    _drawFill() {
    }
    // need to override so that location would not be set
    _setXLocation() {
    }
    _updateLine() {
    }
}
Object.defineProperty(QuadrantLineSeries, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "QuadrantLineSeries"
});
Object.defineProperty(QuadrantLineSeries, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: SimpleLineSeries.classNames.concat([QuadrantLineSeries.className])
});
//# sourceMappingURL=QuadrantLineSeries.js.map