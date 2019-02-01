
// Type definitions for @bigtest
// Project: https://github.com/bigtest
// Definitions by: Taras Mankovski <taras@frontside.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "@bigtest/interactor" {
  interface ScrollOffset {
    top?: number;
    left?: number;
  }

  interface EventOptions {
    bubbles?: boolean
    cancelable?: boolean
  }

  type Chainable = Interactor & Promise<void>

  interface Interactor {
    new(): Interactor
    
    /**
     * Returns the trimmed textContent property of an element.
     */
    text: string

    /**
     * Returns the value property of an element.
     */
    value: any

    /**
     * Returns `true` or `false` if an element is visible in the document.
     */
    isVisible: boolean

    /**
     * Returns `true` or `false` if an element exists in the document but is visually hidden.
     */
    isHidden: boolean

    /**
     * Returns `true` or `false` if an element can be found within the document.
     */
    isPresent: boolean

    /**
     * Triggers a `click` event on an element.
     * @param selector 
     * @returns Promise
     */
    click(selector?: string): Chainable

    /**
     * Changes the `value` of an element and triggers `input` and `change` events.
     * @param value 
     * @returns Promise
     */
    fill(value: any): Chainable
    fill(selector: string, value: any): Chainable
    
    /**
     * Selects an option by it's `text` value and triggers `input` and `change` events.
     * @param option 
     * @returns Promise
     */
    select(option: string): Chainable
    select(selector: string, option: string): Chainable

    /**
     * Triggers a `focus` event on an element.
     * @param selector 
     */
    focus(selector?: string): Chainable

    /**
     * Triggers a `blur` event on an element.
     * @param selector 
     */
    blur(selector?: string): Chainable

    /**
     * Sets an element's `scrollTop` and `scrollLeft` properties and triggers a `scroll` event. The `top` 
     * and `left` values specify how many pixels in that direction to scroll to; at least one direction 
     * must be specified.
     * @param param0 
     */
    scroll({ top, left }: ScrollOffset): Chainable
    scroll(selector: string, { top, left }: ScrollOffset): Chainable

    /**
     * Triggers an arbitrary event, `name`, on an element with any specified event `options`. By default, 
     * the `bubbles` and `cancelable` options are set to `true`.
     * @param name 
     */
    trigger(name: string, options?: EventOptions): Chainable
    trigger(selector: string, name: string, options?: EventOptions): Chainable
  }

  type selector = string;

  interface InteractorModule {
    default: Interactor
    
    /**
     * Returns the trimmed textContent property of an element.
     * @param selector
     */
    text(selector?: string): (selector: string) => Interactor
    
    /**
     * Returns the value property of an element.
     * @param selector 
     */
    value(selector?: string): (selector: string) => Interactor

    /**
     * Returns `true` or `false` if an element is visible in the document.
     * @param selector 
     */
    isVisible(selector?: string): (selector: string) => Interactor

    /**
     * Returns `true` or `false` if an element exists in the document but is visually hidden.
     * @param selector 
     */
    isHidden(selector?: string): (selector: string) => Interactor

    /**
     * Returns `true` or `false` if an element can be found within the document.
     */
    isPresent(selector?: string): (selector: string) => Interactor

    /**
     * Returns the specified attribute of an element via `getAttribute`.
     */
    attribute(attr: string): (attr: string) => Interactor
    attribute(selector: string, attr: string): (selector: string, attr: string) => Interactor

    /**
     * Returns the specified property value of an element.
     * @param prop 
     */
    property(prop: string): (prop: string) => Interactor
    property(selector: string, prop: string): (selector: string, prop: string) => Interactor

    /**
     * Returns `true` or `false` if an element's `classList` contains the specified classname.
     * @param className 
     */
    hasClass(className: string): (className: string) => Interactor
    hasClass(selector: string, className: string): (selector: string, className: string) => Interactor

    /**
     * Returns `true` or `false` if an element can be selected by the specified matching selector 
     * via Element.matches().
     */
    is(match: string): (match: string) => Interactor
    is(selector: string, match: string): (selector: string, match: string) => Interactor
  }

  const module: InteractorModule;

  export = module;
}

