import Interactor, {
  text,
  value,
  isVisible,
  isHidden,
  isPresent,
  attribute,
  property,
  hasClass,
  is,
  interactor
} from '@bigtest/interactor';

text();
text('.hello-world');

value();
value('.hello-world');

isVisible();
isVisible('./hello-world');

isHidden();
isHidden('./hello-world');

isPresent();
isPresent('./hello-world');

attribute('name');
attribute('.hello-world', 'name');

property('name');
property('.hello-world', 'name');

hasClass('foo');
hasClass('.hello-world', 'foo');

is('div');
is('.hello-world', 'span');

let i = new Interactor();
i.text;
i.value;
i.isVisible;
i.isHidden;
i.isPresent;

i.click().then();
i.click()
  .click()
  .then();
i.click('.hello-world').then();
i.fill('say hi').then();
i.fill('say hi')
  .click()
  .then();
i.fill('.hello-world', 'say hi').then();
i.select('winning').then();
i.select('.hello-world', 'winning').then();
i.select('.hello-world')
  .fill('bob')
  .then();
i.focus()
  .click()
  .then();
i.focus('.hello-world').then();
i.blur('.hello-world').then();
i.blur('.hello-world')
  .click()
  .fill('bob')
  .then();
i.scroll({ top: 10, left: 20 }).then();
i.scroll({ top: 10 }).then();
i.scroll({ left: 20 }).then();
i.scroll({ top: 20 })
  .click()
  .fill('hello')
  .then();
i.scroll('.hello-world', { left: 20 }).then();

const Person = interactor(
  class Person {
    name = attribute('name');
    isRendered = isVisible();
  }
);

let person = new Person('.person-on-left');

person.name;
person.isRendered;

let FlyingPerson = interactor(
  class FlyingPerson extends Person {
    isFlying = hasClass('.is-flying')
  }
)

let fp = new FlyingPerson();

fp.isFlying
fp.name

let FlyingPersonFromExtend = Person.extend(
  class AddFlying {
    isFlying = hasClass('.is-flying')
  }
)

let fpe = new FlyingPersonFromExtend('.my-selector');

fpe.name
fpe.isFlying