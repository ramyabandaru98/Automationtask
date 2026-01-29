const { Given, When, Then } = require('@wdio/cucumber-framework')
const { Loginpage } = require('../page/login')
 
const login = new Loginpage();
 
 
Given('I open the the application', async () => {
    await login.openUrl()
})
 
Then('I enter the username', async () => {
    await login.enterusername()
})
 
Then('I enter the password', async () => {
    await login.enterpassword();
})
 
Then('I click on login button', async () => {
    await login.clickloginbutton();
})
 
// Then('I enter the username {string}', async (value) => {
//     await login.enterusername(value)
// })
 
// Then('I enter the password {string}', async (value) => {
//     await login.enterpassword(value);
// })
 
 
// Then('I enter the username {string} and password {string}', async (value1,value2) => {
//     await login.enterusername(value1)
//     await login.enterpassword(value2);
// })