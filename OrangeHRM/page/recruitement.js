const { Utilities } = require("../utility/utility")

const recruitementlinkk="//span[text()='Recruitment']"
const candidatesformlink="//a[text()='Candidates']"
const JobTitle="//label[text()='Job Title']/../following-sibling::div/div/div/div[@tabindex='0']"
const Jobvacancyfield="//label[text()='Vacancy']/../following-sibling::div/div/div/div[@tabindex='0']"
//const HiringManager= "//div[text()='John SkilesBhave']"
const Status="//label[text()='Status']/../following-sibling::div/div/div/div[@tabindex='0']"
const candidatename='//input[@placeholder="Type for hints..."]'
const keywords='//input[@placeholder="Enter comma seperated words..."]'
const Methodofapplication="//label[text()='Method of Application']/../following-sibling::div/div/div/div[@tabindex='0']"
const search='//button[@type="submit"]'

const utilite = new Utilities()

class recruitemnt{

    async clickrecruitemenlink(){
        await utilite.click(recruitementlinkk)
        await utilite.time(3000)
    }
    async clickcandidatesform(){
        await utilite.click(candidatesformlink)
        await utilite.time(5000)
        
    }
    async JobTitle(value){
        await utilite.selectdropdownValue(JobTitle,value);
    }
    async Jobvacancy(value){
        await utilite.selectdropdownValue(Jobvacancyfield,value)

    }
    async candidateStatus(value){
        await utilite.selectdropdownValue(Status,value)
    }
    async candidatename(value){
        await utilite.enterText(candidatename,value)
    }
    async keywordsfield(value){
        await utilite.enterText(keywords,value)
    }
    async methodofapplicationsfield(value){
        await utilite.selectdropdownValue(Methodofapplication,value)
    }
    async search(){
        await utilite.click(search)
    }
    
}

module.exports={recruitemnt}