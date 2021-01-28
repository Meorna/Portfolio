import { browser, by, element } from 'protractor';

/**
  * End to End testing
  */ 
export class AppPage {
  /**
    * Not used
    */ 
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  /**
    * Not used
    */ 
  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}
