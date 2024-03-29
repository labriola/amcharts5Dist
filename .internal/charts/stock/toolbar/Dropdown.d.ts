import type { StockControl } from "./StockControl.js";
import { Entity, IEntitySettings, IEntityPrivate, IEntityEvents } from "../../../core/util/Entity.js";
export interface IDropdownSettings extends IEntitySettings {
    control: StockControl;
    parent?: HTMLElement;
}
export interface IDropdownPrivate extends IEntityPrivate {
    container?: HTMLDivElement;
    arrow?: HTMLDivElement;
}
export interface IDropdownEvents extends IEntityEvents {
    opened: {};
    closed: {};
}
/**
 * @todo revview
 */
export declare class Dropdown extends Entity {
    static className: string;
    static classNames: Array<string>;
    _settings: IDropdownSettings;
    _privateSettings: IDropdownPrivate;
    _events: IDropdownEvents;
    protected _afterNew(): void;
    protected _initElements(): void;
    _beforeChanged(): void;
    protected _dispose(): void;
    /**
     * Returns `true` if dropdown is currently open.
     *
     * @return  Dropdown open?
     */
    isOpen(): boolean;
    hide(): void;
    show(): void;
    toggle(): void;
}
//# sourceMappingURL=Dropdown.d.ts.map