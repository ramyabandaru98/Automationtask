const { Given, When, Then } = require('@wdio/cucumber-framework')
const assert = require('assert')

const { DoubleClickPage } = require('../page/doubleClickPage')
const page = new DoubleClickPage()

let field1Text, field2Text

Given('I open test automation page', async () => {
    await page.openApplication()
})

When('I enter value in Field1 {string}', async (value) => {
    await page.enterField1(value)
})

When('I double click on Copy Text button', async () => {
    await page.doubleClickCopyButton()
})

Then('I validate both fields using assertion', async () => {
    field1Text = await page.getField1Value()
    field2Text = await page.getField2Value()

    //  Using assertion
    assert.strictEqual(field1Text, field2Text, "Field values are NOT equal")
})

Then('I validate both fields using if condition', async () => {
    field1Text = await page.getField1Value()
    field2Text = await page.getField2Value()

    //  Using if condition
    if (field1Text === field2Text) {
        console.log(" Both fields are SAME:", field1Text)
    } else {
        throw new Error(` Values mismatch: Field1=${field1Text}, Field2=${field2Text}`)
    }
})


// const { Given, When, Then } = require('@wdio/cucumber-framework')
// const { newtest } = require('../page/doubleClickPage')

// const newtests= newtest()

// Given('I click on url', async()=>{
//     await newtests.openUrl()
// })
// Given('I click on field 1 {string}', async()=>{
//     await newtests.clickfiled1()
// })
// Given('I click on copytext {string}', async()=>{
//     await newtests.copytext(value)
// })