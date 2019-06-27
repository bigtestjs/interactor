/* global describe, beforeEach, it */
import { expect } from 'chai';
import { useFixture } from '../helpers';
import { interactor, isFocused } from '../../src';

@interactor class FocusedInteractor {
  isEmailFocused = isFocused('#email');
  isPasswordFocused = isFocused('#password');
}

describe('BigTest Interaction: isFocused', () => {
  let test;

  useFixture('is-focused-fixture');

  beforeEach(() => {
    test = new FocusedInteractor('#focus-form');
  });

  it('has isFocused properties', () => {
    expect(test).to.have.property('isFocused').that.is.a('boolean');
    expect(test).to.have.property('isEmailFocused').that.is.a('boolean');
    expect(test).to.have.property('isPasswordFocused').that.is.a('boolean');
  });

  it('returns true if the element is focused', () => {
    expect(test.isFocused).to.be.false;
    expect(test.isEmailFocused).to.be.true;
    expect(test.isPasswordFocused).to.be.true;
  });

  it('returns false if the element is not focused', () => {
    test.focus('#password');
    expect(test.isFocused).to.be.false;
    expect(test.isEmailFocused).to.be.false;
    expect(test.isPasswordFocused).to.be.true;
  });
});
