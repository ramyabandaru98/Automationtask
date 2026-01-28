const { remote } = require('webdriverio')
const { Key } = require('webdriverio')
 
 
class Utilities {
 
    static browser = null
    static initializing = null
 
    async getBrowser() {
        if (Utilities.browser) {
            return Utilities.browser
        }
        if (!Utilities.initializing) {
            Utilities.initializing = (async () => {
                Utilities.browser = await remote({
                    automationProtocol: 'webdriver',
                    logLevel: 'silent',
                    capabilities: {
                        browserName: 'chrome'
                    }
                })
                return Utilities.browser
            })()
        }
 
        return Utilities.initializing
    }
 
    async enterUrl(openurl) {
        const browser = await this.getBrowser()
        await browser.url(openurl);
        await browser.maximizeWindow();
    }
 
    async enterText(selector, value) {
        const browser = await this.getBrowser()
        const element = await browser.$(selector)
        await element.waitForDisplayed()
        await element.scrollIntoView({ block: 'center' })
        await this.clearText(selector)
        await element.click()
        await element.setValue(value)
    }
 
 
    async clearText(selector) {
        const browser = await this.getBrowser();
        const element = await browser.$(selector);
        await element.waitForDisplayed();
        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }
 
    async click(selector) {
        const browser = await this.getBrowser()
        const element = await browser.$(selector)
        await element.waitForDisplayed()
        await element.scrollIntoView({ block: 'center' })
        await element.waitForClickable()
        await element.click()
    }
 
    async time(value) {
        const browser = await this.getBrowser();
        if (value > 0) {
            await browser.pause(value);
        }
    }
 
    async selectdropdownValue(value) {
        const browser = await this.getBrowser()
 
        const dropdown = await browser.$('//div[contains(@class,"oxd-select-text-input") and @tabindex="0"]')
        await dropdown.waitForDisplayed()
        await dropdown.scrollIntoView({ block: 'center' })
        await dropdown.waitForClickable()
        await dropdown.click()
 
        const option = await browser.$(`//div[@role="option" and normalize-space()="${value}"]`)
        await option.waitForDisplayed()
        await option.scrollIntoView({ block: 'center' })
        await option.waitForClickable()
        await option.click()
    }
 
 
 
    async closeBrowser() {
        if (Utilities.browser) {
            await Utilities.browser.deleteSession()
            Utilities.browser = null
            Utilities.initializing = null
        }
    }
}
 
module.exports = { Utilities }
 