var config = require('./dbconfig');
const sql = require('mssql');


async function getIncentive(){
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from [v_checking_incentive]")
        return products.recordsets;
    }
    catch (error){
        console.log(error)

    }
}

module.exports = {
    getIncentive: getIncentive
}