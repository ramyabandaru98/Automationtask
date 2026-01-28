const { contactdetail } = require("../page/contactdetails");
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
      await myinf.EmployeeFullName()
      await myinf.EmployeeMiddleName()
      await myinf.EmployeeLastName()
      await myinf.EmployeeId()
      await myinf.OtherId()
      await myinf.Nationality()
      await myinf.MaritalStatus()
      await myinf.DateofBirth()
      await myinf.Gender()
      await myinf.Requiredsave()

}
async function contactde() {
      await contact.clickoncontactdetail()
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
      await logo.logout()

}
async function runtest() {
      await testlogin()
      await personaldetails()
}
async function runtest1() {
      await testlogin()
      await contactde()

}
async function runtest3(){
      await testlogin()
      await Logout()
}
runtest()
