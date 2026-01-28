
const logou='//ul[@role="menu"]/li[4]/a'


class logout{
    async logout(){

        await utilite.click(logou, 2000)
    }

}

module.exports={logout}