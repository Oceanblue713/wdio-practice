import { expect } from 'chai';
import Navbar from '../components/Navbar';

describe ('Searchbox', () => {
  it ('should load homepage and search for some value', () => {
    browser.url('http://zero.webappsecurity.com/index.html');
    Navbar.search('Hello');
    browser.pause(5000);
  })
})