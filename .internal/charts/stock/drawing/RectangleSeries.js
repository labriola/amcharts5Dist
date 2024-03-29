import { DrawingSeries } from "./DrawingSeries.js";
export class RectangleSeries extends DrawingSeries {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "_index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_di", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "_tag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "rectangle"
        });
    }
    _handleBulletDragged(event) {
        super._handleBulletDragged(event);
        const dataItem = event.target.dataItem;
        const movePoint = this._movePointerPoint;
        if (dataItem && movePoint) {
            const dataContext = dataItem.dataContext;
            const index = dataContext.index;
            const corner = dataContext.corner;
            const xAxis = this.get("xAxis");
            const yAxis = this.get("yAxis");
            const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
            const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
            const vx = "valueX";
            const vy = "valueY";
            this._setContext(dataItem, vx, valueX);
            this._setContext(dataItem, vy, valueY, true);
            this._setXLocation(dataItem, valueX);
            this._positionBullets(dataItem);
            const dataItems = this._di[index];
            if (dataItems) {
                const blDI = dataItems["bl"];
                const brDI = dataItems["br"];
                const tlDI = dataItems["tl"];
                const trDI = dataItems["tr"];
                const tlDI2 = dataItems["tl2"];
                if (blDI && brDI && tlDI && trDI && tlDI2) {
                    if (corner == "br") {
                        this._setContext(blDI, vy, valueY, true);
                        this._setContext(trDI, vx, valueX);
                        this._setXLocation(trDI, valueX);
                    }
                    if (corner == "tr") {
                        this._setContext(brDI, vx, valueX);
                        this._setXLocation(brDI, valueX);
                        this._setContext(tlDI, vy, valueY, true);
                        this._setContext(tlDI2, vy, valueY, true);
                    }
                    if (corner == "bl") {
                        this._setContext(brDI, vy, valueY, true);
                        this._setContext(tlDI, vx, valueX);
                        this._setContext(tlDI2, vx, valueX);
                        this._setXLocation(tlDI, valueX);
                        this._setXLocation(tlDI2, valueX);
                    }
                    if (corner == "tl2") {
                        this._setContext(blDI, vx, valueX);
                        this._setXLocation(blDI, valueX);
                        this._setContext(trDI, vy, valueY, true);
                        this._setContext(tlDI, vx, valueX);
                        this._setXLocation(tlDI, valueX);
                        this._setContext(tlDI, vy, valueY, true);
                    }
                }
            }
        }
    }
    _handlePointerClick(event) {
        if (this._drawingEnabled) {
            super._handlePointerClick(event);
            if (!this._isDragging) {
                if (!this._isDrawing) {
                    this._index++;
                    this._isDrawing = true;
                    this.bulletsContainer.show();
                    this._addPoints(event, this._index);
                }
                else {
                    this._isDrawing = false;
                }
            }
        }
    }
    _handlePointerMove(event) {
        super._handlePointerMove(event);
        if (this._isDrawing) {
            const movePoint = this._movePointerPoint;
            if (movePoint) {
                const xAxis = this.get("xAxis");
                const yAxis = this.get("yAxis");
                const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(movePoint.x)));
                const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(movePoint.y)));
                const index = this._index;
                const dataItems = this._di[index];
                if (dataItems) {
                    const diTR = dataItems["tr"];
                    const diBR = dataItems["br"];
                    const diBL = dataItems["bl"];
                    if (diTR && diBR && diBL) {
                        this._setContext(diTR, "valueX", valueX);
                        this._setContext(diBR, "valueX", valueX);
                        this._setXLocation(diTR, valueX);
                        this._setXLocation(diBR, valueX);
                        this._setContext(diBR, "valueY", valueY, true);
                        this._setContext(diBL, "valueY", valueY, true);
                    }
                }
            }
        }
    }
    _addPoints(event, index) {
        const chart = this.chart;
        if (chart) {
            this.data.push({ stroke: this._getStrokeTemplate(), fill: this._getFillTemplate(), index: index, corner: "e" });
            const xAxis = this.get("xAxis");
            const yAxis = this.get("yAxis");
            const point = chart.plotContainer.toLocal(event.point);
            const valueX = this._getXValue(xAxis.positionToValue(xAxis.coordinateToPosition(point.x)));
            const valueY = this._getYValue(yAxis.positionToValue(yAxis.coordinateToPosition(point.y)));
            this._di[index] = {};
            this._addPoint(valueX, valueY, "tl", index);
            this._addPoint(valueX, valueY, "tr", index);
            this._addPoint(valueX, valueY, "br", index);
            this._addPoint(valueX, valueY, "bl", index);
            this._addPoint(valueX, valueY, "tl2", index);
        }
    }
    _addPoint(valueX, valueY, corner, index) {
        this.data.push({ valueY: valueY, valueX: valueX, corner: corner, index: index });
        const len = this.dataItems.length;
        const dataItem = this.dataItems[len - 1];
        if (dataItem) {
            if (valueX != null) {
                this._setXLocation(dataItem, valueX);
            }
            this.setPrivate("startIndex", 0);
            this.setPrivate("endIndex", len);
            return dataItem.dataContext;
        }
    }
}
Object.defineProperty(RectangleSeries, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "RectangleSeries"
});
Object.defineProperty(RectangleSeries, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: DrawingSeries.classNames.concat([RectangleSeries.className])
});
//# sourceMappingURL=RectangleSeries.js.map