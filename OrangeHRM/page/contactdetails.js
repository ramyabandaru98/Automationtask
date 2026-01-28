const { Utilities } = require("../utility/utility")

const contactdetailsfield= "//a[text()='Contact Details']"
const street1="//label[text()='Street 1']/parent::div/following-sibling::div/input"
const street2="//label[text()='Street 2']/parent::div/following-sibling::div/input"
const city="//label[text()='City']/../following-sibling::div/input"
const state="//label[text()='State/Province']/../following-sibling::div/input"
const zip="//label[text()='Zip/Postal Code']/../following-sibling::div/input"
const country="//label[text()='Country']"
const home="//label[text()='Home']/../following-sibling::div/input"
const mobile="//label[text()='Mobile']/../following-sibling::div/input"
const work="//label[text()='Work']/../following-sibling::div/input"
const workemail="//label[text()='Work Email']/../following-sibling::div/input"
const otheremail="//label[text()='Other Email']/../following-sibling::div/input"
const save='//button[@type="submit"]'
const utilite= new Utilities
class contactdetail{

    async clickoncontactdetails(){

       await utilite.click(contactdetailsfield, 2000)

    }
    async street1(){
        await utilite.enterText(selector, value,wait)
    }
    async street2(){
        await utilite.enterText(selector, value,wait)
    }
    async city(){
        await utilite.enterText(selector, value,wait)
    }
    async state(){
        await utilite.enterText(selector, value,wait)
    }
    async zip(){
        await utilite.enterText(selector, value,wait)
    }
    async country(){
        await utilite.enterText(selector, value,wait)
    }
    async home(){
        await utilite.enterText(selector, value,wait)
    }
    async mobile(){
        await utilite.enterText(selector, value,wait)
    }
    async work(){
        await utilite.enterText(selector, value,wait)
    }async workemail(){
        await utilite.enterText(selector, value,wait)
    }async otheremail(){
        await utilite.enterText(selector, value,wait)

    }
    async save(){
         await utilite.click(save, 2000)

    }
}
module.exports= {contactdetail}