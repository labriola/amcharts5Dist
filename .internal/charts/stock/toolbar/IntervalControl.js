import { DropdownListControl } from "./DropdownListControl.js";
import { StockIcons } from "./StockIcons.js";
/**
 * A control that is used to change type of the main series of the [[StockChart]].
 */
export class IntervalControl extends DropdownListControl {
    _getDefaultIcon() {
        return StockIcons.getIcon("Interval");
    }
}
Object.defineProperty(IntervalControl, "className", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "IntervalControl"
});
Object.defineProperty(IntervalControl, "classNames", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: DropdownListControl.classNames.concat([IntervalControl.className])
});
//# sourceMappingURL=IntervalControl.js.map