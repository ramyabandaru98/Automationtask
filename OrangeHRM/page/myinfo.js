const { Utilities } = require("../utility/utility")
const utilite = new Utilities()
const infolink = '//span[text()="My Info"]'
const personallink= "//a[text()='Personal Details']"

class Myinfo{

    async clickmyinfo(){

        await utilite.click(infolink,2000)
        
    }
    async clickpersonal(){
        await utilite.click(personallink,2000)
    }
}
module.exports = { Myinfo }

