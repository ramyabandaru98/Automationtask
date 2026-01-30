const { Given, When, Then } = require('@wdio/cucumber-framework')
const { recruitemnt } = require('../page/recruitement')

const recruitement = new recruitemnt()

Given('I click on linkrecruitement',async()=>{
    await recruitement.clickrecruitemenlink()
})
Then('I click candidates formlink', async()=>{
    await recruitement.clickcandidatesform()
})
Then('I enter JobTitle name {string}', async(value)=>{
    await recruitement.JobTitle(value)
})
Then('I enter Jobvacancy name {string}', async(value)=>{
    await recruitement.Jobvacancy(value)
})

Then('I enter Status name {string}', async(value)=>{
    await recruitement.Status(value)
})
Then('I enter candidatename {string}', async(value)=>{
    await recruitement.candidatename(value)
})
Then('I enter keywords field {string}', async(value)=>{
    await recruitement.keywords(value)
})
Then('I enter Methodofapplication field {string}', async(value)=>{
    await recruitement.Methodofapplication(value)
})
Given('I click recruitement link', async()=>{
    await recruitement.addbutton()
})

