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
        await browser.url(openurl)
        await browser.maximizeWindow()
    }
 
    async enterText(selector, value) {
        const browser = await this.getBrowser()
        await this.cleartext()
        await browser.$(selector).setValue(value)
        
        
    }
    async cleartext(){
        const browser = await this.getBrowser();
        
        await browser.action('key')
                .down(Key.Ctrl).down('A')
                .pause(10)
                .up(Key.Ctrl).up('A')
                .pause(10)
                .down(Key.Delete).up(Key.Delete)
                .perform()
            await browser.pause(2000);
        
    }
 
    async click(selector) {
        const browser = await this.getBrowser()
        await browser.$(selector).click()
    }
 
    async time(value) {
        const browser = await this.getBrowser()
        if (value > 0) {
            await browser.pause(value)
        }
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