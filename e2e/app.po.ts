import { browser, element, by } from 'protractor';

export class BrewingnotePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
