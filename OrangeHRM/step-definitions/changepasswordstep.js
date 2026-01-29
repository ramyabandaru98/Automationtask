const { Given, When, Then } = require('@wdio/cucumber-framework')
const { passwordchange } = require('../page/changepassword')

const changepassword= new passwordchange()

Then('I click on changepassword', async ()=>{
        await changepassword.changpassword()
})

Then('I enter the currentpassword', async ()=>{
      await changepassword.entercurrentpassword()

})

Then('I enter the Newpassword', async ()=>{
    await changepassword.enterpasswordchnge()
})

When('I enter the ConfirmNewpassword', async ()=>{
    await changepassword.confirnewmpassword()
})
Then('I click on save', async ()=>{
    await changepassword.savebutton()

})


