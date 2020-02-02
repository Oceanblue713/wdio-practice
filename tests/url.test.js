import { expect } from 'chai';

describe('WebdriverIO basics',() => {
  it('load url', () => {
    const url = 'http://zero.webappsecurity.com/'
    browser.url(url);

    // const pageTitle = browser.getTitle();
    // const pageUrl = browser.getUrl();

    const metadata = browser.getMetadata()

    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('webapp');
  });

  it('waitForExist example', () => {
    const signButton = $('#signin_button');
    signButton.click();

    const loginForm = $('#login_form');
    loginForm.waitForExist(5000);
    loginForm.waitForDisplayed();
    loginForm.waitForEnabled();
  });

  it('static waiting', () => {
    browser.pause(3000);
  });

  it('inject javascript into the browser', () => {
    const result = browser.execute((numA, numB) => {
      return numA + numB;
    }, 5, 6)
    console.log(result);
    expect(result).to.equal(11);
  });
});

describe('Index page', () => {
  beforeEach(() => {
    browser.url('http://zero.webappsecurity.com/');
  });

  it('working with inputs', () => {
    const searchbox = $('#searchTerm');
    searchbox.addValue('WDIO');
    searchbox.clearValue();
    searchbox.setValue('webdriverIO');
    browser.pause(3000);
  });

  it('checking the selectors state', () => {
    const signInBtn = $('#signin_button');
    expect(signInBtn.isExisting()).to.be.true;
    expect(signInBtn.isSelected()).to.be.false;
    expect(signInBtn.isDisplayed()).to.be.true;
  });
});