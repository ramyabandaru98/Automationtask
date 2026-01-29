const { Given, When, Then } = require('@wdio/cucumber-framework')
const { Myinfo } = require('../page/myinfo')

const myinfo=new Myinfo()

Given('I click on my infolink', async()=>{
     await myinfo.clickmyinfo()

})
Then('I click on my personallink', async()=>{
     await myinfo.clickpersonal()
})
Then('I enter Employeefullname', async()=>{
    await myinfo.EmployeeFullName()
})  
Then('I enter Employeemiddlename', async()=>{
    await myinfo.EmployeeMiddleName()
})
Then('I enter Employeelastname', async()=>{
    await myinfo.EmployeeLastName()
})
Then('I enter Employeeid', async()=>{
     await myinfo.EmployeeId()
})
Then('I enter Otherid', async()=>{
     await myinfo.OtherId()
})
Then('I enter Nationality', async()=>{
    await myinfo.Nationality("Indian")
})
Then('I enter Martialstatus', async()=>{
    await myinfo.MaritalStatus("Single")
})
Then('I click on savebutton', async()=>{
    await myinfo.Requiredsave()
})