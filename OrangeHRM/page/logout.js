const { Utilities } = require("../utility/utility")

const logou="//a[text()='Logout']"
const utilite= new Utilities()


class logout{
    async logout(){

        await utilite.click(logou, 2000)
        await utilite.time(3000)
    }

}

module.exports={logout}