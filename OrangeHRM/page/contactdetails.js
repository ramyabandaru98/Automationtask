const { Utilities } = require("../utility/utility")
const contactdetailsfield="//a[text()='Contact Details']"
const street1="//label[text()='Street 1']/parent::div/following-sibling::div/input"
const street2="//label[text()='Street 2']/parent::div/following-sibling::div/input"
const cityp="//label[text()='City']/../following-sibling::div/input"
const statee="//label[text()='State/Province']/../following-sibling::div/input"
const zipp="//label[text()='Zip/Postal Code']/../following-sibling::div/input"
const country="//label[text()='Country']"
const homephn="//label[text()='Home']/../following-sibling::div/input"
const mobilephn="//label[text()='Mobile']/../following-sibling::div/input"
const workk="//label[text()='Work']/../following-sibling::div/input"
const workkemail="//label[text()='Work Email']/../following-sibling::div/input"
const otheremailadd="//label[text()='Other Email']/../following-sibling::div/input"
const saveb='//button[@type="submit"]'
const utilite= new Utilities
class contactdetail{

    async clickoncontactdetail(){

       await utilite.click(contactdetailsfield)
       await utilite.time(3000)

    }
    async stret1(){
        await utilite.enterText(street1, "Sriram Residency")
    }
    async stret2(){
        await utilite.enterText(street2, "maktha")
    }
    async city(){
        await utilite.enterText(cityp, "VIZIANAGARAM")
    }
    async state(){
        await utilite.enterText(statee, value)
    }
    async zip(){
        await utilite.enterText(zipp, value)
    }
    async countryy(){
        await utilite.enterText(country, value)
    }
    async home(){
        await utilite.enterText(homephn, value)
    }
    async mobile(){
        await utilite.enterText(mobilephn, value)
    }
    async work(){
        await utilite.enterText(workk, value)
    }async workemail(){
        await utilite.enterText(workkemail, value)
    }async otheremail(){
        await utilite.enterText(otheremailadd, value)

    }
    async save(){
         await utilite.click(saveb, 2000)

    }
}
module.exports= {contactdetail}