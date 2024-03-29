import type { StockLegend } from "../StockLegend.js";
import { Indicator } from "../indicators/Indicator.js";
import { StockControl, IStockControlSettings, IStockControlPrivate, IStockControlEvents } from "./StockControl.js";
import { DropdownList } from "./DropdownList.js";
export declare type Indicators = "Accumulation Distribution" | "Accumulative Swing Index" | "Aroon" | "Awesome Oscillator" | "Bollinger Bands" | "Chaikin Money Flow" | "Chaikin Oscillator" | "Commodity Channel Index" | "Disparity Index" | "MACD" | "Moving Average" | "Moving Average Deviation" | "Moving Average Envelope" | "On Balance Volume" | "Relative Strength Index" | "Standard Deviation" | "Stochastic Oscillator" | "Trix" | "Typical Price" | "Volume" | "VWAP" | "Williams R" | "Median Price" | "ZigZag";
export interface IIndicator {
    id: string;
    name: string;
    callback: () => Indicator;
}
export interface IIndicatorControlSettings extends IStockControlSettings {
    indicators?: Array<Indicators | IIndicator>;
    legend?: StockLegend;
}
export interface IIndicatorControlPrivate extends IStockControlPrivate {
    list?: DropdownList;
}
export interface IIndicatorControlEvents extends IStockControlEvents {
    selected: {
        indicator: Indicator | IIndicator;
    };
}
/**
 * A [[StockToolbar]] control for adding indicators to a [[StockChart]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/stock/toolbar/indicator-control/} for more info
 */
export declare class IndicatorControl extends StockControl {
    static className: string;
    static classNames: Array<string>;
    _settings: IIndicatorControlSettings;
    _privateSettings: IIndicatorControlPrivate;
    _events: IIndicatorControlEvents;
    protected _afterNew(): void;
    protected _initList(): void;
    protected _getDefaultIcon(): SVGElement;
    _beforeChanged(): void;
    addIndicator(indicatorId: Indicators): void;
    /**
     * Serializes all available indicators into an array of simple objects or
     * JSON.
     *
     * `output` parameter can either be `"object"` or `"string"` (default).
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
     * @since 5.3.0
     * @param   output Output format
     * @param   indent Line indent in JSON
     * @return         Serialized indicators
     */
    serializeIndicators(output?: "object" | "string", indent?: string): Array<unknown> | string;
    /**
     * Parses data serialized with `serializeIndicators()` and adds indicators to
     * the chart.
     *
     * @see {@link https://www.amcharts.com/docs/v5/charts/stock/serializing-indicators-annotations/} for more info
     * @since 5.3.0
     * @param  data Serialized data
     */
    unserializeIndicators(data: string | Array<any>): void;
}
//# sourceMappingURL=IndicatorControl.d.ts.map