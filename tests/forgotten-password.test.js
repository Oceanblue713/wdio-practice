import { expect } from 'chai';

describe('Forgotten Password Test', () => {
  it('shold navigate to homepage', () => {
    browser.url('http://zero.webappsecurity.com/index.html');

    const metadata = browser.getMetadata();
    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('index.html');
  });

  it('should click on signin button',() => {
    browser.waitAndClick('#signin_button');
    const metadata = browser.getMetadata();
    expect(metadata.url).to.contains('login.html');
  });

  it('should click on forgotten password link', () => {
    browser.waitAndClick('*=Forgot your password ?')

    const pageTitle = $('h3')
    pageTitle.waitForExist(5000);
    expect(pageTitle.getText()).to.contains('Forgotten Password');
  });

  it('should reques new password',() => {
    const emailInput = $('#user_email');
    emailInput.waitForExist(5000);
    emailInput.setValue('aaa@a.a');
    browser.waitAndClick('.btn-primary');
  });
});