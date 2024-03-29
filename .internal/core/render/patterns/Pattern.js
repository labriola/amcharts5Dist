import { Entity } from "../../util/Entity.js";
/**
 * Base class for patterns.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/colors-gradients-and-patterns/patterns/} for more info
 */
export class Pattern extends Entity {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "_display", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this._root._renderer.makeGraphics()
        });
        Object.defineProperty(this, "_backgroundDisplay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this._root._renderer.makeGraphics()
        });
        Object.defineProperty(this, "_clear", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_pattern", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    _afterNew() {
        // Applying themes because pattern will not have parent
        super._afterNewApplyThemes();
    }
    get pattern() {
        return this._pattern;
    }
    _draw() { }
    _beforeChanged() {
        super._beforeChanged();
        if (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("color") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fill") || this.isDirty("fillOpacity")) {
            this._clear = true;
        }
    }
    _changed() {
        super._changed();
        if (this._clear) {
            const repetition = this.get("repetition", "");
            const width = this.get("width", 100);
            const height = this.get("height", 100);
            const fill = this.get("fill");
            const fillOpacity = this.get("fillOpacity", 1);
            this._display.clear();
            this._backgroundDisplay.clear();
            if (fill && (fillOpacity > 0)) {
                this._backgroundDisplay.beginFill(fill, fillOpacity);
                this._backgroundDisplay.drawRect(0, 0, width, height);
                this._backgroundDisplay.endFill();
            }
            this._display.angle = this.get("rotation", 0);
            //this._display.pivot = { x: width / 2, y: height / 2 };
            this._draw();
            this._pattern = this._root._renderer.createPattern(this._display, this._backgroundDisplay, repetition, width, height);
        }
    }
}
Object.defineProperty(Pattern, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Pattern"
});
Object.defineProperty(Pattern, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Entity.classNames.concat([Pattern.className])
});
//# sourceMappingURL=Pattern.js.map