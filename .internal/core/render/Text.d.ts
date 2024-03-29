import type { Color } from "../util/Color.js";
import type { Percent } from "../util/Percent.js";
import type { IText } from "./backend/Renderer.js";
import type { DataItem, IComponentDataItem } from "./Component.js";
import { Sprite, ISpriteSettings, ISpritePrivate } from "./Sprite.js";
import type { NumberFormatter } from "../util/NumberFormatter.js";
import type { DateFormatter } from "../util/DateFormatter.js";
import type { DurationFormatter } from "../util/DurationFormatter.js";
/**
 * @ignore Text is an internal class. Use Label instead.
 */
export interface ITextSettings extends ISpriteSettings {
    text?: string;
    fill?: Color;
    fillOpacity?: number;
    textAlign?: "start" | "end" | "left" | "right" | "center";
    fontFamily?: string;
    fontSize?: string | number;
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    fontStyle?: "normal" | "italic" | "oblique";
    fontVariant?: "normal" | "small-caps";
    textDecoration?: "underline" | "line-through";
    shadowColor?: Color | null;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowOpacity?: number;
    lineHeight?: Percent | number;
    baselineRatio?: number;
    opacity?: number;
    direction?: "ltr" | "rtl";
    textBaseline?: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
    oversizedBehavior?: "none" | "hide" | "fit" | "wrap" | "wrap-no-break" | "truncate";
    breakWords?: boolean;
    ellipsis?: string;
    minScale?: number;
    populateText?: boolean;
    ignoreFormatting?: boolean;
}
/**
 * @ignore
 */
export interface ITextPrivate extends ISpritePrivate {
    /**
     * @ignore
     */
    tooltipElement?: HTMLDivElement;
}
/**
 * @ignore Text is an internal class. Use Label instead.
 */
export declare class Text extends Sprite {
    _settings: ITextSettings;
    _privateSettings: ITextPrivate;
    textStyle: import("./backend/Renderer.js").ITextStyle;
    _display: IText;
    protected _textStyles: Array<keyof ITextSettings>;
    protected _originalScale: number | undefined;
    static className: string;
    static classNames: Array<string>;
    _updateBounds(): void;
    _changed(): void;
    _getText(): string;
    markDirtyText(): void;
    _setDataItem(dataItem?: DataItem<IComponentDataItem>): void;
    getNumberFormatter(): NumberFormatter;
    getDateFormatter(): DateFormatter;
    getDurationFormatter(): DurationFormatter;
}
//# sourceMappingURL=Text.d.ts.map