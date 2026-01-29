const { Utilities } = require("../utility/utility")

const dropclick='//img[@alt="profile picture"]/../i'
const logou="//a[text()='Logout']"
const utilite= new Utilities()



class logout{
    async clickdrop(){

        await utilite.click(dropclick, 2000)
        await utilite.time(3000)
    }
    async clicklog(){
        await utilite.click(logou, 2000)
        await utilite.time(3000)
    }
   

}

module.exports={logout}