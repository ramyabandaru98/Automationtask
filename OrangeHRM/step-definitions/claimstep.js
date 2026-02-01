const { Given, When, Then } = require('@wdio/cucumber-framework')
const { claim } = require('../page/claim')

const Claim = new claim()

Given('I click on claim link', async()=>{
    await Claim.claimlink()
})
Then('I click on assign claim link', async()=>{
    await Claim.assignclaimlink()
})
Then('I click on Employeename {string}', async(value)=>{
    await Claim.Employeenameforclaim(value)
})
// Then('I click on Event {string}', async(value)=>{
//     await Claim.Eventdetails(value)
// })
// Then('I click on currencydeatils {string}', async(value)=>{
//     await Claim.currencydeatils(value)
// })
Then('I click on remarks {string}', async(value)=>{
    await Claim.remarks(value)
})
Then('I click on create', async()=>{
    await Claim.clickoncreate()
})