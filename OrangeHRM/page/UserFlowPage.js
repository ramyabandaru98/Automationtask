const { Utilities } = require("../utility/utility")
const { objectRepository } = require("../objectRepository/objectRepository")

const utilite = new Utilities()

class UserFlowPage {

    async openApplication(url) {
        await utilite.enterUrl(url)
        // await utilite.deleteCookies()
    }

    async login(username, password) {
        await utilite.enterText(objectRepository.loginPage.username, username)
        await utilite.enterText(objectRepository.loginPage.password, password)
        await utilite.click(objectRepository.loginPage.submit)

        // await utilite.verifyText(objectRepository.loginPage.dashboardText, "Dashboard")
    }

    async openProfileDropdown() {
        await utilite.click(objectRepository.profile.dropdown)
    }

    async logout() {
        await this.openProfileDropdown()
        await utilite.click(objectRepository.profile.logout)
    }

    async navigateToChangePassword() {
        await this.openProfileDropdown()
        await utilite.click(objectRepository.profile.changePassword)
    }

    async changePassword(currentPassword, newPassword, confirmPassword) {
        await utilite.enterText(objectRepository.profile.currentPassword, currentPassword)
        await utilite.enterText(objectRepository.profile.newPassword, newPassword)
        await utilite.enterText(objectRepository.profile.confirmPassword, confirmPassword)
        await utilite.click(objectRepository.profile.saveButton)
    }
}

module.exports = { UserFlowPage }