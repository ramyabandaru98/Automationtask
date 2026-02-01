const { Utilities } = require("../utility/utility")
const utilite = new Utilities()
const infolink = '//span[text()="My Info"]'
const personallink = "//a[text()='Personal Details']"
const EmployeeName = '//input[@name="firstName"]'
const middlename = '//input[@name="middleName"]'
const lastname = '//input[@name="lastName"]'
const EmployeId = "//label[text()='Employee Id']/../following-sibling::div/input"
const OthrId = "//label[text()='Other Id']/../following-sibling::div/input"
const savebutton="//p[text()=' * Required']/following-sibling::button[text()=' Save ']"

class Myinfo {

    async clickmyinfo() {

        await utilite.click(infolink)
        await utilite.time(5000)

    }
    async clickpersonal() {

        await utilite.click(personallink)
        await utilite.time(4000)

    }
    async EmployeeFullName(value) {
        await utilite.enterText(EmployeeName,value)

    }
    async EmployeeMiddleName(value) {
        await utilite.enterText(middlename,value)
    }
    async EmployeeLastName(value) {
        await utilite.enterText(lastname,value)
    }
    async EmployeeId(value) {
        await utilite.enterText(EmployeId,value)
    }
    async OtherId(value) {
        await utilite.enterText(OthrId,value)
    }

    async Nationality(value) {
        const browser = await utilite.getBrowser()
        const dropdown = await browser.$("//label[text()='Nationality']/../following-sibling::div/div/div/div[@tabindex='0']")
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

    async MaritalStatus(value) {
        const browser = await utilite.getBrowser()
        const dropdown = await browser.$("//label[text()='Marital Status']/../following-sibling::div/div/div/div[@tabindex='0']")
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
    // async Gender(){
    //          await utilite.enterText(Gendr,"Female")
    // }
    async Requiredsave(){
            await utilite.click(savebutton)
    }

}
module.exports = { Myinfo }

