import type { AxisRenderer } from "./AxisRenderer.js";
import { DateAxis, IDateAxisSettings, IDateAxisPrivate, IDateAxisDataItem, IDateAxisEvents } from "./DateAxis.js";
export interface IGaplessDateAxisSettings<R extends AxisRenderer> extends IDateAxisSettings<R> {
}
export interface IGaplessDateAxisDataItem extends IDateAxisDataItem {
    /**
     * An index of a data item.
     */
    index?: number;
}
export interface IGaplessDateAxisPrivate extends IDateAxisPrivate {
}
export interface IGaplessDateAxisEvents extends IDateAxisEvents {
}
/**
 * A version of a [[DateAxis]] which removes intervals that don't have any data
 * items in them.
 *
 * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/gapless-date-axis/} for more info
 * @important
 */
export declare class GaplessDateAxis<R extends AxisRenderer> extends DateAxis<R> {
    static className: string;
    static classNames: Array<string>;
    _settings: IGaplessDateAxisSettings<R>;
    _privateSettings: IGaplessDateAxisPrivate;
    _dataItemSettings: IGaplessDateAxisDataItem;
    _events: IGaplessDateAxisEvents;
    protected _frequency: number;
    _afterNew(): void;
    protected _dates: Array<number>;
    protected _updateDates(date: number): void;
    _updateAllDates(): void;
    /**
     * Convers value to a relative position on axis.
     *
     * @param   value  Value
     * @return         Relative position
     */
    valueToPosition(value: number): number;
    /**
     * Converts numeric value from axis scale to index.
     *
     * @param  value  Value
     * @return        Index
     */
    valueToIndex(value: number): number;
    /**
     * Converts a relative position to a corresponding numeric value from axis
     * scale.
     *
     * @param   position  Relative position
     * @return            Value
     */
    positionToValue(position: number): number;
    protected _fixZoomFactor(): void;
    /**
     * Zooms the axis to specific `start` and `end` values.
     *
     * Optional `duration` specifies duration of zoom animation in milliseconds.
     *
     * @param  start     Start value
     * @param  end       End value
     * @param  duration  Duration in milliseconds
     */
    zoomToValues(start: number, end: number, duration?: number): void;
    protected _prepareAxisItems(): void;
}
//# sourceMappingURL=GaplessDateAxis.d.ts.map