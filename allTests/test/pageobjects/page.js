export default class Page {
  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}

export function generateGetFunction(selector, name, isMultiple = false) {
  return {
    get [name]() {
      const element = isMultiple ? $$(selector) : $(selector);
      expect(element).not.toBe(null);
      if (isMultiple) {
        expect(element.length).toBeGreaterThan(0);
      }
      return element;
    },
  };
}
