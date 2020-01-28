import { expect } from 'chai';

describe('WebdriverIO basics',() => {
  it('load url', () => {
    const url = 'http://zero.webappsecurity.com/'
    browser.url(url);

    const pageTitle = browser.getTitle();
    const pageUrl = browser.getUrl();

    expect(pageTitle).to.contains('Personal Banking');
    expect(pageUrl).to.contains('webapp');
  });
});
