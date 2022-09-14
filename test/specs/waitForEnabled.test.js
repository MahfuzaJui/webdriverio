const LoginPage= require('../pageobjects/login.page');
describe("Wait for Enabled", function(){

it('should wait for the input field to be enabled', async() => 
{
    browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    await browser.pause(2000);
    LoginPage.enableButton.waitForDisplayed()
    LoginPage.enableButton.click()
    LoginPage.inputEnabledField.waitForEnabled ({timeout: 4000})
    expect(LoginPage.inputEnabledField).toBeEnabled()
    expect(LoginPage.inputEnabledField).not.toBeDisabled()
    })

it('should wait for the input field to be disabled', async() => 
{
    browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    await browser.pause(2000);
    LoginPage.enableButton.waitForDisplayed()
    LoginPage.enableButton.click()
    LoginPage.inputEnabledField.waitForEnabled({ timeout: 4000, reverse: true})
    expect(LoginPage.inputEnabledField).toBeDisabled()
    })
})