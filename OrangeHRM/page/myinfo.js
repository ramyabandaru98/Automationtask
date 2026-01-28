const { Utilities } = require("../utility/utility")
const utilite = new Utilities()
const infolink = '//span[text()="My Info"]'
const personallink= "//a[text()='Personal Details']"

class Myinfo{

    async clickmyinfo(){

        await utilite.click(infolink)
        
    }
    async clickpersonal(){
       
        await utilite.click(personallink)
    }
}
module.exports = { Myinfo }

