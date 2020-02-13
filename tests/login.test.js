import { expect } from 'chai';
import * as dataHelper from '../lib/data-helpers';
import LoginPage from '../page-objects/LoginPage';
import Navbar from '../components/Navbar';

describe('Login Test', () => {
  it ('should deny access with wrong creds', () => {
    LoginPage.open()
    LoginPage.loginForm.waitForExist()
    LoginPage.username.setValue('Sarah')
    LoginPage.password.setValue('password')
    LoginPage.submitButton.click()
    LoginPage.wait(2000)
    expect(LoginPage.errorMessage.getText()).to.contains('Login and/or password are wrong.');
  })
})