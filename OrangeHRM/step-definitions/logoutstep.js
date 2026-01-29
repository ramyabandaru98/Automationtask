const { Given, When, Then } = require('@wdio/cucumber-framework')
const { logout } = require('../page/logout')


const logou= new logout()


Given('I click on dropdown', async () =>{
    await logou.clickdrop()
})

Then('I click on Logout', async ()=>{
    await logou.clicklog()

})