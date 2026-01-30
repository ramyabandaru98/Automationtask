const { Given, When, Then } = require('@wdio/cucumber-framework')

const { contactdetail } = require("../page/contactdetails");

const contactdetails= new contactdetail()


Given('I click on contactdetails', async()=>{
     await contactdetails.clickoncontactdetaillink()
})
Then('I enter street1{string}', async(value)=>{
    await contactdetails.st1(value)
})
Then('I enter street2{string}', async(value)=>{
    await contactdetails.st2(value)
})
Then('I enter cityname{string}',async(value)=>{
    await contactdetails.city(value)
})
Then('I enter statename{string}',async(value)=>{
    await contactdetails.state(value)
})
Then('I enter zipcode{string}',async(value)=>{
    await contactdetails.zip(value)
})
Then('I enter countryname{string}', async(value)=>{
    await contactdetails.country(value)
})
Then('I enter homephonenumber{string}', async(value)=>{
    await contactdetails.home(value)
})
Then('I enter mobilephonenumber{string}', async(value)=>{
    await contactdetails.mobile(value)
})
Then('I enter work phonenumber{string}', async(value)=>{
    await contactdetails.work(value)
})
Then('I enter work emailaddress {string}', async(value)=>{
    await contactdetails.workemail(value)
})
Then('I enter other emailaddress {string}', async(value)=>{
    await contactdetails.otheremail(value)
})
// Then('I click on savebutton', async()=>{
//     await contactdetails.save()
// })