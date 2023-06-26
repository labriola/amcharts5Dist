import { List } from "./List.js";
import type { IDisposer } from "./Disposer.js";
import type { Container } from "../render/Container.js";
import type { Sprite } from "../render/Sprite.js";
/**
 * A version of [[List]] to hold children of the [[Container]].
 *
 * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/containers/} for more info
 */
export declare class Children<A extends Sprite> extends List<A> implements IDisposer {
    private _disposed;
    private _container;
    private _events;
    constructor(container: Container);
    protected _onInserted(child: A, index?: number): void;
    protected _onRemoved(child: A): void;
    /**
     * Returns `true` if obejct is disposed.
     */
    isDisposed(): boolean;
    /**
     * Permanently dispose this object.
     */
    dispose(): void;
}
//# sourceMappingURL=Children.d.ts.map