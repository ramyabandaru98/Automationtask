const { Utilities } = require("../utility/utility")
const cred = require("../credentials/cred")

const url = "https://testautomationpractice.blogspot.com/"
const field1 = "#field1"
const field2 = "#field2"
const copyBtn = "//button[text()='Copy Text']"

const util = new Utilities()

class DoubleClickPage {

    async openApplication() {
        await util.enterUrl(cred.testurl)
        await util.time(3000)
    }

    async enterField1(value) {
        await util.enterText(field1, value)
    }

    async doubleClickCopyButton() {
    const element = await util.getElement(copyBtn)
    await element.doubleClick()
}

    async getField1Value() {
        const browser = await util.getBrowser()
        const el = await util.getElement(field1)
        return await el.getValue()
    }

    async getField2Value() {
        const browser = await util.getBrowser()
        const el = await util.getElement(field2)
        return await el.getValue()
    }
}

module.exports = { DoubleClickPage }
// const { Utilities } = require("../utility/utility")

// const cred = require("../credentials/cred")

// const filed1='//input[@id="field1"]'
// const field2='//input[@id="field2"]'
// const copytext='//button[text()="Copy Text"]'

// const utilite= Utilities()

// class newtest{
//     async openUrl() {
//             await utilite.enterUrl(cred.testurl)
//             await utilite.time(5000)
//         }
//     async clickfiled1(value){
//         await utilite.click(filed1, value)
//         await utilite.time(5000)
//     }
//     async clickfield2(value){
//         await utilite.click(field2, value)
//     }
//     async clickcopytext(){
//         await utilite.click(copytext,value)
//     }

// }
// module.exports= {newtest}



