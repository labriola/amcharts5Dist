import type { Container } from "./Container.js";
import type { Sprite } from "./Sprite.js";
import { Entity, IEntitySettings, IEntityPrivate } from "../util/Entity.js";
export interface ILayoutSettings extends IEntitySettings {
}
export interface ILayoutPrivate extends IEntityPrivate {
}
export declare function eachChildren(container: Container, f: (sprite: Sprite) => void): void;
/**
 * Base class for [[Container]] layouts.
 */
export declare abstract class Layout extends Entity {
    _settings: ILayoutSettings;
    _privateSettings: ILayoutPrivate;
    static className: string;
    static classNames: Array<string>;
    /**
     * @ignore
     */
    abstract updateContainer(_container: Container): void;
}
//# sourceMappingURL=Layout.d.ts.map