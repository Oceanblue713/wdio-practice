import { expect } from 'chai';

describe('Login Test', () => {
  it('should navigate to homepage', () => {
    browser.url('http://zero.webappsecurity.com/index.html');

    const metadata = browser.getMetadata();
    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('index.html');
  });

  it('should click on signin button', () => {
    const signInButton = $('#signin_button');
    signInButton.click();

    const metadata = browser.getMetadata();
    expect(metadata.url).to.contains('login.html');
  });

  it('should submit login form', () => {
    const loginForm = $('#login_form')
    const username = $('#user_login');
    const password = $('#user_password');
    const submitButton = $('.btn-primary');

    loginForm.waitForExist(5000);
    username.setValue('Laura');
    password.setValue('password');
    submitButton.click();
  });

  it('should show error message', () => {
    const errorMessage = $('.alert');
    expect(errorMessage.getText()).to.contains('Login and/or password are wrong.');
  })
});