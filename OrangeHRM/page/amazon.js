const { Utilities } = require("../utility/utility")
const cred = require("../credentials/cred")


const utilite = new Utilities()
const ALL= "//span[text()='All']/../i"
const Mobilesandcomputer="//div[text()='Mobiles, Computers']"
const ALLmobilephones= "//a[text()='All Mobile Phones']"
const Redmi ='//span[text()="Redmi"]/../span[@class="aok-offscreen aok-offscreen-text"]'
const Firstproduct='//div[@class="a-section aok-relative s-image-square-aspect"]/../following-sibling::div'
const Addtocart='//button[text()="Add to cart"]/../button[@id="a-autoid-1-announce"]'
class aLoginpage{
    async openUrl(){
        await utilite.enterUrl(cred.amazonurl)
        await utilite.time(5000)
    }
    async ALL(){
        await utilite.click(ALL)
        await utilite.time(1000)
    }
    async Mobilesandcomputer(){
        await utilite.click(Mobilesandcomputer)
        await utilite.time(1000)
    }
    async ALLmobilephones(){
        await utilite.click(ALLmobilephones)
        await utilite.time(1000)
    }
    async Redmi(){
        await utilite.click(Redmi)
        await utilite.time(1000)
    }
     async Firstproduct(){
        await utilite.click(Firstproduct)
        await utilite.time(1000)
    } 
     async Addtocart(){
        await utilite.click(Addtocart)
        await utilite.time(1000)
    }
     
}
module.exports={aLoginpage}