//const { contactdetail } = require("../page/contactdetails");
const { Loginpage } = require("../page/login");
const { logout } = require("../page/logout");
const { Myinfo } = require("../page/myinfo");
const logi = new Loginpage();
const myinf = new Myinfo();
const contact = new contactdetail();
const logo = new logout
async function testlogin() {
      await logi.login();
}
async function personaldetails() {
      await myinf.clickmyinfo()
      await myinf.clickpersonal()
}
 async function contactde(){
      await contact.contactdetailsfield() 
      await contact.street1()
      await contact.street2()
      await contact.city()
      await contact.state()
      await contact.zip()
      await contact.country()
      await contact.home()
      await contact.mobile()
      await contact.work()
      await contact.workemail()
      await contact.otheremail()
}
async function Logout() {
      await logo.logout
      
}
testlogin()
personaldetails()
contactde()
Logout()
