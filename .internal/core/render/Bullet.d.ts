import { Entity, IEntitySettings, IEntityPrivate } from "../../core/util/Entity.js";
import type { Sprite } from "../../core/render/Sprite.js";
import type { Series } from "../../core/render/Series.js";
export interface IBulletSettings extends IEntitySettings {
    /**
     * Horizontal location within target element.
     *
     * 0 - left, 1 - right, or anything inbetweeen.
     */
    locationX?: number;
    /**
     * Vertical location within target element.
     *
     * 0 - top, 1 - bottom, or anything inbetweeen.
     */
    locationY?: number;
    /**
     * A visual element of the bullet.
     */
    sprite: Sprite;
    /**
     * If set to `true`, the bullet will redraw its `sprite` element whenever
     * anything in its parent series changes.
     *
     * @default false
     */
    dynamic?: boolean;
    /**
     * If set to `true`, the bullet will be automatically rotated to face
     * direction of line it is attached to.
     *
     * NOTE: Works only in  [[Flow]] and [[MapPointSeries]] (when [[MapPoint]] is
     * attached to a [[MapLine]]).
     *
     * @default false
     */
    autoRotate?: boolean;
    /**
     * If `autoRotate` is set to `true`, value of `autoRotateAngle` will be added
     * to the automatically-calculated angle.
     */
    autoRotateAngle?: number;
}
export interface IBulletPrivate extends IEntityPrivate {
    hidden?: boolean;
}
/**
 * A universal placeholder for bullet elements.
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/bullets/} for more info
 */
export declare class Bullet extends Entity {
    static className: string;
    static classNames: Array<string>;
    _settings: IBulletSettings;
    _privateSettings: IBulletPrivate;
    _index?: number;
    /**
     * Target series object if it's a bullet for series.
     */
    series: Series | undefined;
    protected _afterNew(): void;
    _beforeChanged(): void;
}
//# sourceMappingURL=Bullet.d.ts.map