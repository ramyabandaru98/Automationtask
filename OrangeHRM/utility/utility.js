const { remote } = require('webdriverio')
class Utilities {
    Utilities() {
        this.browser = null
    }
    async browserInitialisation() {
        this.browser = await remote({
            automationProtocol: 'webdriver',
            logLevel: 'info',
            capabilities: {
                browserName: 'chrome'

            }
        })

    }
    async enterText(selector, value) {
        // await this.time(wait)
        await this.browser.$(`${selector}`).setValue(`${value}`)
    }
    async enterUrl(openurl) {

        await this.browserInitialisation()
        await this.browser.url(`${openurl}`)
        await this.browser.maximizeWindow()


    }
    async time(value) {
        if (value > 0) {
            await this.browser.pause(value)
        }
    }
    async click(selector) {
        // await this.time(wait)
        await this.browser.$(`${selector}`).click()
    }

}
module.exports = { Utilities }








