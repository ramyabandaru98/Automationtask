const { Utilities } = require("../utility/utility")

const recruitementlinkk="[//span[text()='Recruitment']"
const candidatesformlink="//a[text()='Candidates']"
const JobTitle="//div[text()='QA Lead']"
const Jobvacancyfield='//div[text()="Senior QA Lead"]/../div[@tabindex="0"]'
//const HiringManager= "//div[text()='John SkilesBhave']"
const Status='//div[text()="Shortlisted"]/../div[@tabindex="0"]'
const candidatename='//input[@placeholder="Type for hints..."]'
const keywords='//input[@placeholder="Enter comma seperated words..."]'
const Methodofapplication="//div[text()='Online']"
const addbutton='//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]'

const utilite = new Utilities()

class recruitemnt{

    async clickrecruitemenlink(){
        await utilite.click(recruitementlinkk)
        await utilite.time(50000)
    }
    async clickcandidatesform(){
        await utilite.click(candidatesformlink)
        await utilite.time(50000)
        
    }
    async JobTitle(value){
        await utilite.enterText(JobTitle,value)

    }
    async Jobvacancy(value){
        await utilite.enterText(Jobvacancyfield,value)

    }
    async candidateStatus(value){
        await utilite.enterText(Status,value)
    }
    async candidatedetailsfield(value){
        await utilite.enterText(candidatename,value)
    }
    async keywordsfield(value){
        await utilite.enterText(keywords,value)
    }
    async methodofapplicationsfield(value){
        await utilite.enterText(Methodofapplication,value)
    }
    async addbuttonfield(){
        await utilite.click(addbutton)
    }
    
}

module.exports={recruitemnt}