import { expect } from 'chai';
import * as dataHelper from '../lib/data-helpers';
import LoginPage from '../page-objects/LoginPage';
import Navbar from '../components/Navbar';
import { username, password } from '../lib/config';

describe('Login Test', () => {
  it ('should deny access with wrong creds', () => {
    LoginPage.open()
    LoginPage.loginToApplication("Sarah", "password")
    expect(LoginPage.errorMessage.getText()).to.contains('Login and/or password are wrong.');
  });

  it('should login to application', () => {
    LoginPage.open();
    LoginPage.loginToApplication(username, password);
  });

  it('should logout from application', () => {
    $('.icon-user').waitForExist();
    $('.icon-user').click();
    $('#logout_link').waitForExist();
    $('#logout_link').click();
    $('#logout_link').waitForExist(5000, true);    
  })
});