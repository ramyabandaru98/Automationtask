// const { passwordchange } = require("../page/changepassword");
// const { contactdetail } = require("../page/contactdetails");
// const { CustomField } = require("../page/customfields");
// const { Loginpage } = require("../page/login");
// const { logout } = require("../page/logout");
// const { Myinfo } = require("../page/myinfo");
// const logi = new Loginpage();
// const myinf = new Myinfo();
// const contact = new contactdetail();
// const logo = new logout();
// const custom= new CustomField()
// const changpasswrd= new passwordchange()


// async function testlogin() {
//       await logi.login();
// }
// async function personaldetails() {
//       await myinf.clickmyinfo()
//       await myinf.clickpersonal()
//       await myinf.EmployeeFullName()
//       await myinf.EmployeeMiddleName()
//       await myinf.EmployeeLastName()
//       await myinf.EmployeeId()
//       await myinf.OtherId()
//       await myinf.Nationality("Indian")
//       await myinf.MaritalStatus("Single")
//       // await myinf.DateofBirth()
//       // await myinf.Gender()
//       await myinf.Requiredsave()

// }
// async function contactde() {
//       await contact.clickmyinfo()
//       await contact.clickoncontactdetaillink()
//       await contact.st1()
//       await contact.st2()
//       await contact.city()
//       await contact.state()
//       await contact.zip()
//       await contact.country("India")
//       await contact.home()
//       await contact.mobile()
//       await contact.work()
//       await contact.workemail()
//       await contact.otheremail()
//       await contact.save()
// }
// async function Customfieldsadd() {
//       await custom.infoclick()
//       await custom.personallinkclick()
//       await custom.BloodType("A+")
//       await custom.test()
// }
// async function changepasswordfield(){
//       await changpasswrd.clickdropdown()
//       await changpasswrd.clickpasswordchnge()
//       await changpasswrd.entercurrentpassword()
//       await changpasswrd.enternewpassword()
//       await changpasswrd.confirnewmpassword()
//       await changpasswrd.savebutt()
// }
// async function Logout() {
//       await logo.clickdrop()
//       await logo.clicklog()

// }
// async function runtest() {
//       await testlogin()
//       await personaldetails()
// }
// async function runtest1() {
//       await testlogin()
//       await contactde()
//       await Logout()

// }
// async function runtest3() {
//       await testlogin()
//       await Logout()
// }
// async function runtest4() {
//       await testlogin()
//       await Customfieldsadd()
//       await Logout()
// }
// async function runtest5(){
//       await testlogin()
//       await changepasswordfield()
//       await Logout()
// }
// runtest1()
