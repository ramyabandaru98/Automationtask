const { Given, When, Then } = require('@wdio/cucumber-framework')
const { recruitemnt } = require('../page/recruitement')

const recruitements = new recruitemnt()

Given('I click on linkrecruitement', async()=>{
    await recruitements.clickrecruitemenlink()
})
Then('I click candidates formlink', async()=>{
    await recruitements.clickcandidatesform()
})
Then('I enter JobTitle name {string}', async(value)=>{
    await recruitements.JobTitle(value)
})
Then('I enter Jobvacancy name {string}', async(value)=>{
    await recruitements.Jobvacancy(value)
})

Then('I enter Status name {string}', async(value)=>{
    await recruitements.candidateStatus(value)
})
Then('I enter candidatename {string}', async(value)=>{
    await recruitements.candidatename(value)
})
Then('I enter keywords field {string}', async(value)=>{
    await recruitements.keywordsfield(value)
})
Then('I enter Methodofapplication field {string}', async(value)=>{
    await recruitements.methodofapplicationsfield(value)
})
Given('I click on search', async()=>{
    await recruitements.search()
})

