import { expect } from 'chai';

describe('Selectors Playground', () => {
  beforeEach(() => {
    browser.url('http://zero.webappsecurity.com/');
  });

  it('by ID', () => {
    const byID = $('#signin_button');
    byID.click();
  });

  it('by className', () => {
    const byClassname = $('.brand');
    byClassname.click();
  });

  it('by Xpath', () => {
    const byXpath = $('//input[@id="searchTerm"]');
    byXpath.click();
  });

  it('by CSS Query', () => {
    const byCSSQuery = $('form');
    byCSSQuery.isDisplayed();
  });

  it('by Link Text', () => {
    const byLinkText = $('=Zero Bank');
    byLinkText.click();
  });

  it('by Partial link Text', () => {
    const partialLinkText = $('*=Bank');
    partialLinkText.click();
  });

  it('by Text', () => {
    const byText = $('a*=Zero');
    byText.click();
  });
});