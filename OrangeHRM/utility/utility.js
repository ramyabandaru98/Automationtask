const { remote } = require('webdriverio')

class Utilities {

    static browser = null
    static initializing = null

    async getBrowser() {
        try {
            if (Utilities.browser) return Utilities.browser

            if (!Utilities.initializing) {
                Utilities.initializing = (async () => {
                    Utilities.browser = await remote({
                        automationProtocol: 'webdriver',
                        logLevel: 'silent',
                        capabilities: { browserName: 'chrome' }
                    })
                    return Utilities.browser
                })()
            }

            return Utilities.initializing
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getElement(selector) {
        const browser = await this.getBrowser()
        const element = await browser.$(selector)
        await element.waitForDisplayed()
        return element
    }

    async enterUrl(openurl) {
        const browser = await this.getBrowser()
        await browser.url(openurl)
        await browser.maximizeWindow()
    }

    async enterText(selector, value) {
        const element = await this.getElement(selector)
        await element.scrollIntoView({ block: 'center' })
        await this.clearText(selector)
        await element.click()
        await element.setValue(value)
    }

    async clearText(selector) {
        const browser = await this.getBrowser()
        const element = await this.getElement(selector)
        await element.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Delete')
    }

    async click(selector) {
        const element = await this.getElement(selector)
        await element.scrollIntoView({ block: 'center' })
        await element.waitForClickable({ timeout: 10000 })
        await element.click()
    }

    async time(value) {
        const browser = await this.getBrowser()
        if (value > 0) await browser.pause(value)
    }

    async selectdropdownValue(selector, value) {
        const browser = await this.getBrowser()
        const dropdown = await this.getElement(selector)

        await dropdown.scrollIntoView({ block: 'center' })
        await dropdown.click()

        const option = await browser.$(`//div[@role="option" and normalize-space()="${value}"]`)
        await option.waitForDisplayed()
        await option.click()
    }

    async closeBrowser() {
        if (Utilities.browser) {
            await Utilities.browser.deleteSession()
            Utilities.browser = null
            Utilities.initializing = null
        }
    }

    

    
    async deleteCookies() {
        const browser = await this.getBrowser()
        await browser.deleteAllCookies()
    }

    
    async highlight(selector, duration = 2000) {
        const browser = await this.getBrowser()
        const element = await this.getElement(selector)

        await browser.execute((el) => {
            el.style.border = '3px solid red'
            el.style.backgroundColor = 'yellow'
        }, element)

        await browser.pause(duration)

        await browser.execute((el) => {
            el.style.border = ''
            el.style.backgroundColor = ''
        }, element)
    }

   
    async scrollTo(selector) {
        const element = await this.getElement(selector)
        await element.scrollIntoView({ block: 'center' })
    }

  
    async focus(selector) {
        const browser = await this.getBrowser()
        const element = await this.getElement(selector)

        await browser.execute((el) => {
            el.focus()
        }, element)
    }

    
    async verifyText(selector, expectedText) {
        const element = await this.getElement(selector)
        const actualText = await element.getText()

        if (actualText.trim() !== expectedText.trim()) {
            throw new Error(`Text mismatch: Expected "${expectedText}" but got "${actualText}"`)
        }
    }

  
    async switchToFrame(selector) {
        const browser = await this.getBrowser()
        const frame = await this.getElement(selector)
        await browser.switchToFrame(frame)
    }

    async switchToParentFrame() {
        const browser = await this.getBrowser()
        await browser.switchToParentFrame()
    }

    async switchToDefaultContent() {
        const browser = await this.getBrowser()
        await browser.switchToFrame(null)
    }

    
    async takeScreenshot(fileName = 'screenshot.png') {
        const browser = await this.getBrowser()
        await browser.saveScreenshot(`./screenshots/${fileName}`)
    }

    async takeElementScreenshot(selector, fileName = 'element.png') {
        const element = await this.getElement(selector)
        await element.saveScreenshot(`./screenshots/${fileName}`)
    }
}

module.exports = { Utilities }
// const { remote } = require('webdriverio')
// const { Key } = require('webdriverio')
 
// class Utilities {
 
//     static browser = null
//     static initializing = null
 
//     async getBrowser() {
//         try {
//             if (Utilities.browser) {
//                 return Utilities.browser
//             }
 
//             if (!Utilities.initializing) {
//                 Utilities.initializing = (async () => {
//                     Utilities.browser = await remote({
//                         automationProtocol: 'webdriver',
//                         logLevel: 'silent',
//                         capabilities: {
//                             browserName: 'chrome'
//                         }
//                     })
//                     return Utilities.browser
//                 })()
//             }
 
//             return Utilities.initializing
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async enterUrl(openurl) {
//         try {
//             const browser = await this.getBrowser()
//             await browser.url(openurl)
//             await browser.maximizeWindow()
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async enterText(selector, value) {
//         try {
//             const browser = await this.getBrowser()
//             const element = await browser.$(selector)
//             await element.waitForDisplayed()
//             await element.scrollIntoView({ block: 'center' })
//             await this.clearText(selector)
//             await element.click()
//             await element.setValue(value)
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async clearText(selector) {
//         try {
//             const browser = await this.getBrowser()
//             const element = await browser.$(selector)
//             await element.waitForDisplayed()
//             await element.click()
//             await browser.keys(['Control', 'a'])
//             await browser.keys('Delete')
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async click(selector) {
//         try {
//             const browser = await this.getBrowser()
//             const element = await browser.$(selector)
//             await element.waitForDisplayed()
//             await element.scrollIntoView({ block: 'center' })
//             await element.waitForClickable({ timeout: 10000 })
//             await element.click()
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async time(value) {
//         try {
//             const browser = await this.getBrowser()
//             if (value > 0) {
//                 await browser.pause(value)
//             }
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async selectdropdownValue(selector, value) {
//         try {
//             const browser = await this.getBrowser()
//             const dropdown = await browser.$(selector)
//             await dropdown.waitForDisplayed()
//             await dropdown.scrollIntoView({ block: 'center' })
//             await dropdown.waitForClickable()
//             await dropdown.click()
 
//             const option = await browser.$(`//div[@role="option" and normalize-space()="${value}"]`)
//             await option.waitForDisplayed()
//             await option.scrollIntoView({ block: 'center' })
//             await option.waitForClickable()
//             await option.click()
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
 
//     async closeBrowser() {
//         try {
//             if (Utilities.browser) {
//                 await Utilities.browser.deleteSession()
//                 Utilities.browser = null
//                 Utilities.initializing = null
//             }
//         } catch (error) {
//             console.error(error)
//             throw error
//         }
//     }
// }
 
// module.exports = { Utilities }