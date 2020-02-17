import { expect } from 'chai';
import Navbar from '../components/Navbar';
import LoginPage from '../page-objects/LoginPage';
import ForgottenPasswordPage from '../page-objects/ForgottenPasswordPage';

describe('Forgotten Password Test', () => {
  it('shold navigate to homepage', () => {
    browser.url('http://zero.webappsecurity.com/index.html');

    const metadata = browser.getMetadata();
    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('index.html');
  });

  it('should click on signin button',() => {
    Navbar.signInButton.waitForExist();
    Navbar.signInButton.click();

    const metadata = browser.getMetadata();
    expect(metadata.url).to.contains('login.html');
  });

  it('should click on forgotten password link', () => {
    LoginPage.forgottenPasswordLink.waitForExist();
    LoginPage.forgottenPasswordLink.click();

    ForgottenPasswordPage.title.waitForExist();
    expect(ForgottenPasswordPage.title.getText()).to.contains('Forgotten Password');
  });

  it('should reques new password',() => {
    ForgottenPasswordPage.submitEmail('sarah@email.com');
  });
});