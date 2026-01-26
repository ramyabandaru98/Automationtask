//const {cred} = require ("../credentials/cred")
const cred = require("../credentials/cred")
const { Utilities } = require("../utility/utility")


const utilite = new Utilities()
const username = '//input[@name="username"]'
const password = '//input[@name="password"]'
const submit = '//button[@type="submit"]'

 class Loginpage {

    async login() {
        await utilite.enterUrl(cred.url)
        await utilite.time(2000)
        await utilite.enterText(username, cred.username, 2000)
        await utilite.enterText(password, cred.password, 2000)
        await utilite.click(submit, 2000)

    }

}
module.exports = { Loginpage }
