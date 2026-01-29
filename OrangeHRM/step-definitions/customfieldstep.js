const { Given, When, Then } = require('@wdio/cucumber-framework')
const { CustomField } = require('../page/customfields')
const customfiled =new CustomField

// Given('I click on my infolink', async()=>{
//     await customfiled.infoclick()
// })
// Then('I click on my personallink', async()=>{
//     await customfiled.personallinkclick()
//})
Then('I will enter blood type', async()=>{
    await customfiled.BloodType('A+')
})
Then('I will select Testtype', async()=>{
    await customfiled.test()
})

    

