import type { StockChart } from "../StockChart.js";
import type { StockControl } from "./StockControl.js";
import { Entity, IEntitySettings, IEntityPrivate, IEntityEvents } from "../../../core/util/Entity.js";
export interface IStockToolbarSettings extends IEntitySettings {
    /**
     * A [[StockChart]] the toolbar is for.
     */
    stockChart: StockChart;
    /**
     * A reference to an element in the document to place tools in.
     */
    container: HTMLElement;
    /**
     * A list of tools to show in toolbar.
     */
    controls?: StockControl[];
    /**
     * If set to `false` the toolbar will not load default CSS.
     *
     * @default true
     */
    useDefaultCSS?: boolean;
    /**
     * Menu will disable all interactions for the underlying chart when using
     * tools.
     *
     * @default true
     */
    deactivateRoot?: boolean;
}
export interface IStockToolbarPrivate extends IEntityPrivate {
}
export interface IStockToolbarEvents extends IEntityEvents {
    created: {};
}
/**
 * @todo revview
 */
export declare class StockToolbar extends Entity {
    static className: string;
    static classNames: Array<string>;
    _settings: IStockToolbarSettings;
    _privateSettings: IStockToolbarPrivate;
    _events: IStockToolbarEvents;
    private _cssDisposer?;
    protected _afterNew(): void;
    _afterChanged(): void;
    protected _dispose(): void;
    private _initControls;
    /**
     * Loads the default CSS.
     *
     * @ignore Exclude from docs
     */
    loadDefaultCSS(): void;
}
//# sourceMappingURL=StockToolbar.d.ts.map