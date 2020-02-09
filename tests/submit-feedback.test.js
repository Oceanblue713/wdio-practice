import { expect } from 'chai';

describe('Submit feedback Form Test', () => {
  before(function() {
    browser.url('http://zero.webappsecurity.com/index.html');

    const metadata = browser.getMetadata();
    expect(metadata.title).to.contains('Personal Banking');
    expect(metadata.url).to.contains('index.html');
  });

  it ('should navigate to feedback page', () => {
    browser.waitAndClick('#feedback')

    const metadata = browser.getMetadata();
    expect(metadata.url).to.contains('feedback.html');
  });

  it('should submit feedback form', () => {
    $('form').waitForExist(5000);
    $('#name').setValue('Sarah');
    $('#email').setValue('sarah@mail.com');
    $('#subject').setValue('Subject');
    $('#comment').setValue('Comments');
    $('.btn-primary').click();
    browser.waitAndClick('.btn-primary')
  });

  it('should show success feedback page',() => {
    $('#feedback-title').waitForExist(5000);
  })
})