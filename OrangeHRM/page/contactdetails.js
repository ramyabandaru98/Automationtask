const { Utilities } = require("../utility/utility")
const infolink = '//span[text()="My Info"]'
const contactdetailsfield="//a[text()='Contact Details']"
const street1="//label[text()='Street 1']/parent::div/following-sibling::div/input"
const street2="//label[text()='Street 2']/parent::div/following-sibling::div/input"
const cityp="//label[text()='City']/../following-sibling::div/input"
const statee="//label[text()='State/Province']/../following-sibling::div/input"
const zipp="//label[text()='Zip/Postal Code']/../following-sibling::div/input"
const homephn="//label[text()='Home']/../following-sibling::div/input"
const mobilephn="//label[text()='Mobile']/../following-sibling::div/input"
const workk="//label[text()='Work']/../following-sibling::div/input"
const workkemail="//label[text()='Work Email']/../following-sibling::div/input"
const otheremailadd="//label[text()='Other Email']/../following-sibling::div/input"
const saveb="//p[text()=' * Required']/../button[@type='submit']"
const utilite= new Utilities()
class contactdetail{
     async clickmyinfo() {

        await utilite.click(infolink)
        await utilite.time(5000)

    }

    async clickoncontactdetaillink(){

       await utilite.click(contactdetailsfield)
       await utilite.time(5000)

    }
    async st1(){
        await utilite.enterText(street1, "Sriram Residency")
    }
    async st2(){
        await utilite.enterText(street2, "maktha")
    }
    async city(){
        await utilite.enterText(cityp, "VIZIANAGARAM")
    }
    async state(){
        await utilite.enterText(statee, "AndhraPradesh")
    }
    async zip(){
        await utilite.enterText(zipp, "535004")
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
    async home(){
        await utilite.enterText(homephn, "8791234671")
    }
    async mobile(){
        await utilite.enterText(mobilephn, "8790699789")
    }
    async work(){
        await utilite.enterText(workk, "112-898-7612")
    }async workemail(){
        await utilite.enterText(workkemail, "ram1@example.com")
    }async otheremail(){
        await utilite.enterText(otheremailadd, "ram@example.com")

    }
    async save(){
         await utilite.click(saveb, 2000)

    }
}
module.exports= {contactdetail}