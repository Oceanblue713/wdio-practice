import { expect } from 'chai';

describe('WebdriverIO basics',() => {
  it('load url', () => {
    const url = 'http://zero.webappsecurity.com/'
    browser.url(url);
  })
});