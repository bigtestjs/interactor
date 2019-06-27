import { computed } from './helpers';

/**
 * Property creator for returning `true` or `false` when an element
 * should have focus.
 *
 * ``` html
 * <form>
 *   <input type="email" id="email" />
 *   <input type="password" id="password" />
 * </form>
 * ```
 *
 * ``` javascript
 * new Interactor('#email').isFocused //=> true when email input focused
 * new Interactor('#password').isFocused //=> false when email input focused
 * ```
 *
 * @function isFocused
 * @param {String} [selector] - Nested element query selector
 * @returns {Object} Property descriptor
 */
export default function(selector) {
  return computed(function() {
    return this.$(selector) === document.activeElement;
  });
}
