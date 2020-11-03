function addSureNameDecorator(target: Function) {
  const original = target;

  function construct(constructor, args) {
    const c: any = function () {
      return constructor.apply(this, args);
    };
    c.prototype = constructor.prototype;
    return new c();
  }

  const f: any = function (...args) {
    console.log(`New: ${original["sureName"]} is created`);
    return construct(original, args);
  };

  f.prototype = original.prototype;

  return f;
}

interface Options {
  name: string;
}

@addSureNameDecorator
export class CodeReview {
  name: string;
  age: any;

  constructor(age: any) {
    this.age = "45";
  }

  nameToUpperCase = (nameToConvert: string) => {
    this.name = nameToConvert;
    this.name = this.name.toUpperCase();
    return this.name;
  };

  canRetireInTenYear = () => {
    return this.age + 10 < 65;
  };

  addIdPropertyInOptions = (options: Options[]) => {
    const result = [];
    options.forEach((item, index) => {
      result.push({ item, index });
    });
  };

  getNameByIdOrReturnJonas = (id: any) =>
    ({
      1: "carlos",
      2: "antonio",
      3: "mariana",
      4: "juliana",
    }[id]);

  canRetireByAge = () => {
    this.age < 65 ? true : false;
  };
}
