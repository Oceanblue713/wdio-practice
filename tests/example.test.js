import { expect } from 'chai'

describe('DuckDuckGo search Test', () => {
  it('search should work', () => {
    browser.url('https://duckduckgo.com');
    browser.$('#search_form_input_homepage').setValue('WebdriverIO');
    browser.$('#search_button_homepage').click();
  });

  it('verify title value', () => {
    const title = browser.getTitle();
    expect(title).to.contains('WebdriverIO')
  })
});
