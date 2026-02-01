const { Utilities } = require("../utility/utility")


const utilite = new Utilities()
const claimlink='//a[@href="/web/index.php/claim/viewClaimModule"]'
const assignclaimformlink= "//a[text()='Assign Claim']"
const EmployeeName='//input[@placeholder="Type for hints..."]'
const Event="//div[text()='Medical Reimbursement']"
const currency= "//div[text()='Australian Dollar']"
const Remarksfiled="//label[text()='Remarks']/../following-sibling::div/textarea"
const create="//p[text()=' * Required']/../button[2]"

class claim{
    async claimlink(){
        await utilite.click(claimlink)
        await utilite.time(3000)
    }
    async assignclaimlink(){
        await utilite.click(assignclaimformlink)
        await utilite.time(3000)
    }
    async Employeenameforclaim(value){
        await utilite.enterText(EmployeeName,value)
    }
    // async Eventdetails(value){
    //     await utilite.enterText(Event,value)
    // }
    // async currencydeatils(value){
    //     await utilite.enterText(currency,value)
    // }
    async remarks(value){
        await utilite.enterText(Remarksfiled,value)
    }
    async clickoncreate(){
        await utilite.click(create)
    }
}

module.exports={claim}