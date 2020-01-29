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
});
