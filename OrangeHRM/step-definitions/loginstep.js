const { Given, When, Then } = require('@wdio/cucumber-framework')
const { UserFlowPage } = require('../page/UserFlowPage')
const cred = require('../credentials/cred')

const userFlow = new UserFlowPage()

Given('User opens application {string}', async function(url) {
    this.appUrl = url
    await userFlow.openApplication(this.appUrl)
})
Given('User opens application with orangeHRM ', async function() {
    
    await userFlow.openApplication(cred.url)
})
When('User logs in with username {string} and password {string}', async function(username, password) {
    await userFlow.login(username, password)
})

When('User changes password from {string} to {string} and confirms {string}', async function(currentPwd, newPwd, confirmPwd) {
    await userFlow.navigateToChangePassword()
    await userFlow.changePassword(currentPwd, newPwd, confirmPwd)
})

Then('User logs out', async function() {
    await userFlow.logout()
})