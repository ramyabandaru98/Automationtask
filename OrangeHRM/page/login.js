const { Utilities } = require("../utility/utility")

const utilite = new Utilities()

async function runtest() {
    await utilite.browserInitialisation()
    await utilite.enterUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await utilite.time(2000)
    await utilite.enterText('//input[@name="username"]', "Admin",2000)
    await utilite.enterText('//input[@name="password"]', "admin123",2000)
    await utilite.click('//button[@type="submit"]',2000)
}
 

runtest()
