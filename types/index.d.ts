// Type definitions for @bigtest
// Project: https://github.com/bigtestjs/interactor
// Definitions by: Taras Mankovski <taras@frontside.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@bigtest/interactor' {
  import Convergence from '@bigtest/convergence';

  export default class Interactor extends Convergence {
    constructor(scope?: string);

    /**
     * Parent of this interactor
     */
    $root: HTMLElement | null;

    /**
     * Returns the trimmed textContent property of an element.
     */
    text: string;

    /**
     * Returns the value property of an element.
     */
    value: string;

    /**
     * Returns `true` or `false` if an element is visible in the document.
     */
    isVisible: boolean;

    /**
     * Returns `true` or `false` if an element exists in the document but is visually hidden.
     */
    isHidden: boolean;

    /**
     * Returns `true` or `false` if an element can be found within the document.
     */
    isPresent: boolean;

    /**
     * First element matching a selector of this interactor.
     */
    $: HTMLElement | null;

    /**
     * All elements matching a selector of this interactor.
     */
    $$: HTMLElement[];

    /**
     * Triggers a `click` event on an element.
     * @param selector
     * @returns Promise
     */
    click(selector?: string): Interactor;

    /**
     * Changes the `value` of an element and triggers `input` and `change` events.
     * @param value
     * @returns Promise
     */
    fill(value: any): Interactor;
    fill(selector: string, value: any): Interactor;

    /**
     * Selects an option by it's `text` value and triggers `input` and `change` events.
     * @param option
     * @returns Promise
     */
    select(option: string): Interactor;
    select(selector: string, option: string): Interactor;

    /**
     * Triggers a `focus` event on an element.
     * @param selector
     */
    focus(selector?: string): Interactor;

    /**
     * Triggers a `blur` event on an element.
     * @param selector
     */
    blur(selector?: string): Interactor;

    /**
     * Sets an element's `scrollTop` and `scrollLeft` properties and triggers a `scroll` event. The `top`
     * and `left` values specify how many pixels in that direction to scroll to; at least one direction
     * must be specified.
     * @param param0
     */
    scroll({ top, left }: ScrollOffset): Interactor;
    scroll(selector: string, { top, left }: ScrollOffset): Interactor;

    /**
     * Triggers an arbitrary event, `name`, on an element with any specified event `options`. By default,
     * the `bubbles` and `cancelable` options are set to `true`.
     * @param name
     */
    trigger(name: string, options?: EventOptions): Interactor;
    trigger(selector: string, name: string, options?: EventOptions): Interactor;

    /**
     * Create a custom interactor class from methods and properties of
     * another class.
     * */
    // static extend<U>(interactors: Interactors): Composed<typeof Interactor>

    /**
     * Creates a custom interactor class from methods and properties of an
     * object. Methods and getters are added to the custom class's
     * prototype and all other properties are defined during instance
     * initialization to support custom property creators.
     */
    // static from(interactors: Interactors): Composed<keyof T>

    /**
     * Returns `true` if the object is an interactor.
     */
    static isInteractor(obj: any): boolean;
  }

  /**
   * Turn a class into an Interactor
   */
  export function interactor<T>(constructor: T): InteractorConstructor<T>

  /**
   * Returns the trimmed textContent property of an element.
   * @param selector
   */
  export function text(selector?: string): string;

  /**
   * Returns the value property of an element.
   * @param selector
   */
  export function value(selector?: string): string | number;

  /**
   * Returns `true` or `false` if an element is visible in the document.
   * @param selector
   */
  export function isVisible(selector?: string): boolean;

  /**
   * Returns `true` or `false` if an element exists in the document but is visually hidden.
   * @param selector
   */
  export function isHidden(selector?: string): boolean;

  /**
   * Returns `true` or `false` if an element can be found within the document.
   */
  export function isPresent(selector?: string): boolean;

  /**
   * Returns the specified attribute of an element via `getAttribute`.
   */
  export function attribute(attr: string): string | null;
  export function attribute(selector: string, attr: string): string | null;

  /**
   * Returns the specified property value of an element.
   * @param prop
   */
  export function property<T = any>(prop: string): T;
  export function property<T = any>(selector: string, prop: string): T;

  /**
   * Returns `true` or `false` if an element's `classList` contains the specified classname.
   * @param className
   */
  export function hasClass(className: string): boolean;
  export function hasClass(selector: string, className: string): boolean;

  /**
   * Returns `true` or `false` if an element can be selected by the specified matching selector
   * via Element.matches().
   */
  export function is(match: string): boolean;
  export function is(selector: string, match: string): boolean;

  interface ScrollOffset {
    top?: number;
    left?: number;
  }

  interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
  }

  interface InteractorConstructor<T> {
    new(selector?: string): InteractorConstructor<T>
    prototype: T
  }

  // type Interactors = {
  //   [key: string]: Interactor<any>
  // }

  // type Composed<T extends { [K in keyof T]: Interactor<any> }> = {
  //   [K in keyof T]: T[K]
  // }
}
