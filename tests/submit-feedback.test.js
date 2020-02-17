import { expect } from 'chai';
import Navbar from '../components/Navbar';
import FeedbackPage from '../page-objects/FeedbackPage';

describe('Submit feedback Form Test', () => {
  before(function() {
    browser.url('http://zero.webappsecurity.com/index.html');

    const metadata = browser.getMetadata();
    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('index.html');
  });

  it ('should navigate to feedback page', () => {
    Navbar.feedback.click();

    const metadata = browser.getMetadata();
    expect(metadata.url).to.contains('feedback.html');
  });

  it('should submit feedback form', () => {
    FeedbackPage.submitFeedback('sarah', 'sarah@email.com', 'Title', 'Hello');
  });

  it('should show success feedback page',() => {
    FeedbackPage.feedbackTitle.waitForExist();
  })
})