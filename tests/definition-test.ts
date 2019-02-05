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
  // interactor
} from "@bigtest/interactor";

text();
text(".hello-world");

value();
value(".hello-world");

isVisible();
isVisible("./hello-world");

isHidden();
isHidden("./hello-world");

isPresent();
isPresent("./hello-world");

attribute("name");
attribute(".hello-world", "name");

property("name");
property(".hello-world", "name");

hasClass("foo");
hasClass(".hello-world", "foo");

is('div')
is('.hello-world', 'span')

let i = new Interactor();
i.text
i.value
i.isVisible
i.isHidden
i.isPresent

i.click().then()
i.click().click().then()
i.click('.hello-world').then()
i.fill("say hi").then()
i.fill('say hi').click().then();
i.fill('.hello-world', "say hi").then()
i.select('winning').then()
i.select('.hello-world', 'winning').then()
i.select('.hello-world').fill('bob').then()
i.focus().click().then()
i.focus('.hello-world').then()
i.blur('.hello-world').then()
i.blur('.hello-world').click().fill('bob').then()
i.scroll({ top: 10, left: 20 }).then()
i.scroll({ top: 10 }).then()
i.scroll({ left: 20 }).then()
i.scroll({ top: 20 }).click().fill('hello').then()
i.scroll('.hello-world', { left: 20 }).then()

interface Constructor<T extends {} = {}> {
  new(): T
}

interface InteractorConstructor<T extends {} = {}> {
  new(scope?: string): T
}

function interactor<T extends {} = {}>(target: Constructor<T>): InteractorConstructor<T> {
  return class extends target {
    constructor(scope?: string) {
      super()
    }
  } as InteractorConstructor<T>
}

class Person {
  name = attribute("name")
  isRendered = isVisible()
}

let P2 = interactor(Person)

let person = new P2('.person-on-left');

person.name
person.isRendered