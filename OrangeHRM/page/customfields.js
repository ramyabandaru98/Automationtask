const { Utilities } = require("../utility/utility")

const infolink = '//span[text()="My Info"]'
const personallink= "//a[text()='Personal Details']"
const test= "//label[text()='Test_Field']/../following-sibling::div/input"
//const save
const utilite= new Utilities()


class CustomField{

    async infoclick(){
        await utilite.click(infolink)
         await utilite.time(5000)

    }
    async personallinkclick(){
        await utilite.click(personallink)
        await utilite.time(5000)
    }
    async BloodType(value) {
        const browser = await utilite.getBrowser()
        const dropdown = await browser.$("//label[text()='Blood Type']/../following-sibling::div/div/div/div[@tabindex='0']")
        await dropdown.waitForDisplayed()
        await dropdown.scrollIntoView(({ block: 'center' }))
        await dropdown.waitForClickable()
        await dropdown.click()

        const option = await browser.$(`//div[@role="option" and normalize-space()="${value}"]`)
        await option.waitForDisplayed()
        await option.scrollIntoView(({ block: 'center' }))
        await option.waitForClickable()
        await option.click()
    }
    async test(){
        await utilite.enterText(test,"blood")
    }
    //async 
}

module.exports={CustomField}