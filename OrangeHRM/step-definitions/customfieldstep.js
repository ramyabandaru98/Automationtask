const { Given, When, Then } = require('@wdio/cucumber-framework')
const { CustomField } = require('../page/customfields')
const customfiled =new CustomField()

// Given('I click on my infolink', async()=>{
//     await customfiled.infoclick()
// })
// Then('I click on my personallink', async()=>{
//     await customfiled.personallinkclick()
//})
Then('I will enter bloodtype {string}', async(value)=>{
    await customfiled.BloodType(value)
})
Then('I will select Testtype {string}', async(value)=>{
    await customfiled.test(value)
})
Then('I click on savebutton on customfileld', async()=>{
    await customfiled.savebutton()

 })

    

