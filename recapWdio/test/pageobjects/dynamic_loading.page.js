import Page from './page.js';

class dynamic_loadingPage extends Page {

  get startButton () {return $('#start > button')}
  get finishText () {return $('#finish > h4')}
  get loadingBar () {return $('#loading > img')};

  open () {
    return super.open('dynamic_loading/1');
}}
export default new dynamic_loadingPage();
