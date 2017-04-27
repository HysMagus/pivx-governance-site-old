module.exports = function () {
    this.Given('I navigated to the site', function () {
        browser.url('/index.html');
    });

    this.When('I select the view proposals option', function () {
        return 'pending';
    });

    this.Then('I should see all the proposals that are up for vote', function () {
        return 'pending';
    });
}