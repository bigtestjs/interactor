import Interactor, {
  attribute,
  blurrable,
  clickable,
  count,
  fillable,
  find,
  findAll,
  focusable,
  hasClass,
  interactor,
  is,
  isHidden,
  isPresent,
  isVisible,
  property,
  scoped,
  scrollable,
  selectable,
  text,
  triggerable,
  value,
} from "@bigtest/interactor";

/* tslint:disable no-unused-expression */

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

is("div");
is(".hello-world", "span");

const i = new Interactor();
i.text;
i.value;
i.isVisible;
i.isHidden;
i.isPresent;

i.click().then();
i.click()
  .click()
  .then();
i.click(".hello-world").then();
i.fill("say hi").then();
i.fill("say hi")
  .click()
  .then();
i.fill(".hello-world", "say hi").then();
i.select("winning").then();
i.select(".hello-world", "winning").then();
i.select(".hello-world")
  .fill("bob")
  .then();
i.focus()
  .click()
  .then();
i.focus(".hello-world").then();
i.blur(".hello-world").then();
i.blur(".hello-world")
  .click()
  .fill("bob")
  .then();
i.scroll({ top: 10, left: 20 }).then();
i.scroll({ top: 10 }).then();
i.scroll({ left: 20 }).then();
i.scroll({ top: 20 })
  .click()
  .fill("hello")
  .then();
i.scroll(".hello-world", { left: 20 }).then();

const PersonInteractor = interactor(
  class Person {
    public name = attribute("name");
    public isRendered = isVisible();
    public clickThrough = clickable();
    public blurItem = blurrable();
    public fillInName = fillable(".name");
    public focusBoo = focusable();
    public scrollPage = scrollable(".page");
    public selectItem = selectable(".item");
    public triggerMouseDown = triggerable(".button");
    public friendsCount = count("friends");
    public cards = findAll(".card");
    public tom = find(".tom");
  },
);

const person = new PersonInteractor(".person-on-left");

person.name;
person.isRendered;
person.friendsCount;
person.cards.pop();
person.tom ? person.tom.innerHTML : null;

const p1 = person.clickThrough();
const p2 = p1.blurItem();
const p3 = p2.fillInName("something");
const p4 = p3.focusBoo();
const p5 = p4.scrollPage({ top: 0 });
const p6 = p5.selectItem("Hello World");
p6.triggerMouseDown("mousedown", { bubbles: true });

const ChildInteractor = interactor(
  class Child {
    public father = scoped(".father", PersonInteractor);
  },
);

const child = new ChildInteractor(".child");

child.father.name;

const OwnedCarInteractor = interactor(
  class OwnedCar {
    public owner = scoped(".owner", {
      color: attribute("color"),
    });
  },
);

const ownedCar = new OwnedCarInteractor(".owned-car");

ownedCar.owner.color;

const FlyingPersonInteractor = interactor(
  class FlyingPerson extends PersonInteractor {
    public isFlying = hasClass(".is-flying");
  },
);

const fp = new FlyingPersonInteractor();

fp.isFlying;
fp.name;

const FlyingPersonFromExtend = PersonInteractor.extend(
  class AddFlying {
    public isFlying = hasClass(".is-flying");
  },
);

const fpe = new FlyingPersonFromExtend(".my-selector");

fpe.name;
fpe.isFlying;

const PersonFrom = Interactor.from({
  checked: property<boolean>("checked"),
});

const pf = new PersonFrom(".my-person");

pf.checked;

const CarInteractor = Interactor.extend(
  class Car {
    public color = attribute("color");
  },
);

const car = new CarInteractor(".foo");

car.color;
