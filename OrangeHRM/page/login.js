//const {cred} = require ("../credentials/cred")
const cred = require("../credentials/cred")
const { Utilities } = require("../utility/utility")


const utilite = new Utilities()
const username = '//input[@name="username"]'
const password = '//input[@name="password"]'
const submit = '//button[@type="submit"]'

 class Loginpage {

    async openUrl() {
        await utilite.enterUrl(cred.url)
        await utilite.time(5000)
    }
 
    async enterusername() {
         await utilite.enterText(username, cred.username)
       // await utilite.enterText(username, value)
    }
 
    async enterpassword() {
         await utilite.enterText(password, cred.password)
        //await utilite.enterText(password, value)
    }
 
    async clickloginbutton(){
         await utilite.click(submit)
         await utilite.time(5000)
    }
 

}
module.exports = { Loginpage }
