const { Loginpage } = require("../page/login");
const { Myinfo } = require("../page/myinfo");
const logi = new Loginpage()
const myinf = new Myinfo()

async function testlogin() {
      await logi.login()
      await myinf.clickmyinfo()
      await myinf.clickpersonal()

}
 async function personaldetails(){
      await myinf.clickmyinfo()
      await myinf.clickpersonal()
 }
testlogin()
 personaldetails()
