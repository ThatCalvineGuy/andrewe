import Page from "./page.js";

const getFunctions = {
  ...generateGetFunction('ul li', 'listExamples', true)
};

class homePage extends Page {
  get listExamples() {
    return getFunctions.listExamples();
  }

  open() {
    return super.open('');
  }
}

export default new homePage();