const { Utilities } = require("../utility/utility")
const cred = require("../credentials/cred")

const dropdownclick='//img[@alt="profile picture"]/../i'
const changpassword="//a[text()='Change Password']"
const currentpassword="//label[text()='Current Password']/..//following-sibling::div/input"
const newpassword="//label[text()='Password']/..//following-sibling::div/input"
const confirmpassword="//label[text()='Confirm Password']/..//following-sibling::div/input"
const savebutton="//p[text()=' * Required']/../button[@type='submit']"

const utilite = new Utilities()

class passwordchange{
     async clickdropdown(){

        await utilite.click(dropdownclick, 2000)
        await utilite.time(5000)
    }
    async entercurrentpassword(){
        await utilite.enterText(currentpassword,cred.password)
    }
    async enterpasswordchnge(){
        await utilite.enterText(newpassword,cred.Newpassword)

    }
    async confirnewmpassword(){
        await utilite.enterText(confirmpassword,cred.ConfirmNewpassword)
    }
    async savebutt(){
        await utilite.click(savebutton)
    }
}
module.exports={passwordchange}
