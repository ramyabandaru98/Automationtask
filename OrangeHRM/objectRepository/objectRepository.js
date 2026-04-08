const objectRepository = {

    loginPage: {
        username: '//input[@name="username"]',
        password: '//input[@name="password"]',
        submit: '//button[@type="submit"]',
        // dashboardText: '//h6[text()="Dashboard"]'
    },

    profile: {
        dropdown: '//img[@alt="profile picture"]/../i',
        logout: "//a[text()='Logout']",
        changePassword: "//a[text()='Change Password']",

        currentPassword: "//label[text()='Current Password']/..//following-sibling::div/input",
        newPassword: "//label[text()='Password']/..//following-sibling::div/input",
        confirmPassword: "//label[text()='Confirm Password']/..//following-sibling::div/input",
        saveButton: "//p[text()=' * Required']/../button[@type='submit']"
    }
}

module.exports = { objectRepository }