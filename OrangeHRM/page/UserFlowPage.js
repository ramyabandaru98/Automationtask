const { Utilities } = require("../utility/utility")
const { objectRepository } = require("../objectRepository/objectRepository")

const utilite = new Utilities()

class UserFlowPage {

    
    async login({ url, username, password }) {
        await utilite.enterUrl(url)
        await utilite.deleteCookies()
        await utilite.takeScreenshot("login_page.png")

        await utilite.highlight(objectRepository.loginPage.username)
        await utilite.enterText(objectRepository.loginPage.username, username)

        await utilite.highlight(objectRepository.loginPage.password)
        await utilite.enterText(objectRepository.loginPage.password, password)

        await utilite.highlight(objectRepository.loginPage.submit)
        await utilite.click(objectRepository.loginPage.submit)

       
        await utilite.scrollTo(objectRepository.loginPage.dashboardText)
        await utilite.highlight(objectRepository.loginPage.dashboardText)
        await utilite.verifyText(objectRepository.loginPage.dashboardText, "Dashboard")
        await utilite.takeScreenshot("login_success.png")
    }

    
    async openProfileDropdown() {
        await utilite.click(objectRepository.profile.dropdown)
        await utilite.time(2000)
    }

   
    async logout() {
        await this.openProfileDropdown()
        await utilite.click(objectRepository.profile.logout)
        await utilite.time(3000)
    }

    
    async navigateToChangePassword() {
        await this.openProfileDropdown()
        await utilite.click(objectRepository.profile.changePassword)
        await utilite.time(3000)
    }

    async changePassword({ currentPassword, newPassword, confirmPassword }) {
        await utilite.enterText(objectRepository.profile.currentPassword, currentPassword)
        await utilite.enterText(objectRepository.profile.newPassword, newPassword)
        await utilite.enterText(objectRepository.profile.confirmPassword, confirmPassword)
        await utilite.click(objectRepository.profile.saveButton)
        await utilite.time(2000)
    }
}

module.exports = { UserFlowPage }