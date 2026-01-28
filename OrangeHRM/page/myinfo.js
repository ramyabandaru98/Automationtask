const { Utilities } = require("../utility/utility")
const utilite = new Utilities()
const infolink = '//span[text()="My Info"]'
const personallink= "//a[text()='Personal Details']"
const EmployeeName='//input[@name="firstName"]'
const middlename='//input[@name="middleName"]'
const lastname='//input[@name="lastName"]'
const EmployeId="//label[text()='Employee Id']/../following-sibling::div/input"
const OthrId="//label[text()='Other Id']/../following-sibling::div/input"
//const DriverLicenseNumber="//label[text()='Driver's License Number']"
//const LicenseExpiryDate=
const Nationlity="//div[text()='American']"
const MaritlStatus="//div[text()='Single']"
const DatefBirth="//label[text()='Date of Birth']"
const Gendr="//label[text()='Female']"
const Requirdsave="//p[text()=' * Required']"

class Myinfo{

    async clickmyinfo(){

        await utilite.click(infolink)
        
        
    }
    async clickpersonal(){
       
        await utilite.click(personallink)
       
    }
    async EmployeeFullName(){
       await utilite.enterText(EmployeeName,"Ram")

    }
    async EmployeeMiddleName(){
          await utilite.enterText(middlename,"Sita")
    }
    async EmployeeLastName(){
           await utilite.enterText(lastname,"Ram")
    }
    async EmployeeId(){
            await utilite.enterText(EmployeId,2211580)
    }
    async OtherId(){
              await utilite.enterText(OthrId,4957589)
    }
    async Nationality(){
              await utilite.enterText(Nationlity,"Indain")
    }
    async MaritalStatus(){
           await utilite.enterText(MaritlStatus,"Single")
    }
    async DateofBirth(){
          await utilite.enterText(DatefBirth,2025-19-10)
    }
    async Gender(){
             await utilite.enterText(Gendr,"Female")
    }
    async Requiredsave(){
            await utilite.click(Requirdsave,value)
    }

}
module.exports = { Myinfo }

