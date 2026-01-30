const { Given, When, Then } = require('@wdio/cucumber-framework')
const { Myinfo } = require('../page/myinfo')

const myinfo=new Myinfo()

Given('I click on my infolink', async()=>{
     await myinfo.clickmyinfo()

})
Then('I click on my personallink', async()=>{
     await myinfo.clickpersonal()
})
Then('I enter Employeefullname {string}', async(value)=>{
    await myinfo.EmployeeFullName(value)
})  
Then('I enter Employeemiddlename {string}', async(value)=>{
    await myinfo.EmployeeMiddleName(value)
})
Then('I enter Employeelastname {string}', async(value)=>{
    await myinfo.EmployeeLastName(value)
})
Then('I enter Employeeid {string}', async(value)=>{
     await myinfo.EmployeeId(value)
})
Then('I enter Otherid {string}', async(value)=>{
     await myinfo.OtherId(value)
})
Then('I enter Nationality {string}', async(value)=>{
    await myinfo.Nationality(value)
})
Then('I enter Martialstatus {string}', async(value)=>{
    await myinfo.MaritalStatus(value)
})
Then('I click on savebutton', async()=>{
    await myinfo.Requiredsave()
})