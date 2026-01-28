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

       await utilite.click(contactdetailsfield, 2000)
       await utilite.time(3000)

    }
    async stret1(){
        await utilite.enterText(street1, value,wait)
    }
    async stret2(){
        await utilite.enterText(street2, value,wait)
    }
    async city(){
        await utilite.enterText(cityp, value,wait)
    }
    async state(){
        await utilite.enterText(statee, value,wait)
    }
    async zip(){
        await utilite.enterText(zipp, value,wait)
    }
    async countryy(){
        await utilite.enterText(country, value,wait)
    }
    async home(){
        await utilite.enterText(homephn, value,wait)
    }
    async mobile(){
        await utilite.enterText(mobilephn, value,wait)
    }
    async work(){
        await utilite.enterText(workk, value,wait)
    }async workemail(){
        await utilite.enterText(workkemail, value,wait)
    }async otheremail(){
        await utilite.enterText(otheremailadd, value,wait)

    }
    async save(){
         await utilite.click(saveb, 2000)

    }
}
module.exports= {contactdetail}