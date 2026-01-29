const { Given, When, Then } = require('@wdio/cucumber-framework')
const { Myinfo } = require('../page/myinfo')

const myinfo=new Myinfo()

Given('I click on my infolink', async()=>{
     await myinfo.clickmyinfo()

})
Then('I click on my personallink', async()=>{
     await myinfo.clickpersonal()
})
Then('I enter Employeefullname {string}', async()=>{
    await myinfo.EmployeeFullName(value)
})  
Then('I enter Employeemiddlename{string}', async()=>{
    await myinfo.EmployeeMiddleName(value)
})
Then('I enter Employeelastname{string}', async()=>{
    await myinfo.EmployeeLastName(value)
})
Then('I enter Employeeid{Number}', async()=>{
     await myinfo.EmployeeId(value)
})
Then('I enter Otherid{Number}', async()=>{
     await myinfo.OtherId(value)
})
Then('I enter Nationality{string}', async()=>{
    await myinfo.Nationality(value)
})
Then('I enter Martialstatus{string}', async()=>{
    await myinfo.MaritalStatus(value)
})
Then('I click on savebutton', async()=>{
    await myinfo.Requiredsave()
})