const { Utilities } = require("../utility/utility")
const infolink = '//span[text()="My Info"]'
const contactdetailsfield="//a[text()='Contact Details']"
const street1="//label[text()='Street 1']/parent::div/following-sibling::div/input"
const street2="//label[text()='Street 2']/parent::div/following-sibling::div/input"
const cityname="//label[text()='City']/../following-sibling::div/input"
const statename="//label[text()='State/Province']/../following-sibling::div/input"
const zipcode="//label[text()='Zip/Postal Code']/../following-sibling::div/input"
const homephonenumber="//label[text()='Home']/../following-sibling::div/input"
const mobilephonenumber="//label[text()='Mobile']/../following-sibling::div/input"
const workk="//label[text()='Work']/../following-sibling::div/input"
const workkemail="//label[text()='Work Email']/../following-sibling::div/input"
const otheremailadd="//label[text()='Other Email']/../following-sibling::div/input"
const savebutton="//p[text()=' * Required']/../button[@type='submit']"
const utilite= new Utilities()
class contactdetail{
     async clickmyinfo() {

        await utilite.click(infolink)
        await utilite.time(4000)

    }

    async clickoncontactdetaillink(){

       await utilite.click(contactdetailsfield)
       await utilite.time(3000)

    }
    async st1(value){
        await utilite.enterText(street1, value)
    }
    async st2(value){
        await utilite.enterText(street2, value)
    }
    async city(value){
        await utilite.enterText(cityname, value)
    }
    async state(value){
        await utilite.enterText(statename, value)
    }
    async zip(value){
        await utilite.enterText(zipcode, value)
    }
    async country(value) {
        const browser = await utilite.getBrowser()
        const dropdown = await browser.$("//label[text()='Country']/../following-sibling::div/div/div/div[@tabindex='0']")
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
    async home(value){
        await utilite.enterText(homephonenumber, value)
    }
    async mobile(value){
        await utilite.enterText(mobilephonenumber, value)
    }
    async work(value){
        await utilite.enterText(workk, value)
    }async workemail(value){
        await utilite.enterText(workkemail, value)
    }async otheremail(value){
        await utilite.enterText(otheremailadd, value)

    }
    async save(){
         await utilite.click(savebutton)
         await utilite.time(3000)

    }
}
module.exports= {contactdetail}