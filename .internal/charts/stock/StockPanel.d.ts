import type { PanelControls } from "./PanelControls.js";
import type { StockChart } from "./StockChart.js";
import type { XYSeries } from "../xy/series/XYSeries.js";
import { XYChart, IXYChartPrivate, IXYChartSettings } from "../xy/XYChart.js";
import { ListAutoDispose } from "../../core/util/List.js";
export interface IStockPanelSettings extends IXYChartSettings {
}
export interface IStockPanelPrivate extends IXYChartPrivate {
    /**
     * A target [[StockChart]].
     */
    stockChart: StockChart;
}
/**
 * A panel instance for the [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/panels/} for more info
 * @important
 */
export declare class StockPanel extends XYChart {
    static className: string;
    static classNames: Array<string>;
    _settings: IStockPanelSettings;
    _privateSettings: IStockPanelPrivate;
    /**
     * An instance of [[PanelControls]].
     */
    panelControls: PanelControls;
    /**
     * A list of drawings on panel.
     *
     */
    readonly drawings: ListAutoDispose<XYSeries>;
    protected _afterNew(): void;
    /**
     * Moves panel up.
     */
    moveUp(): void;
    /**
     * Moves panel down.
     */
    moveDown(): void;
    /**
     * Closes panel.
     */
    close(): void;
    /**
     * Toggles "full screen" mode of the panel on and off.
     */
    expand(): void;
}
//# sourceMappingURL=StockPanel.d.ts.map