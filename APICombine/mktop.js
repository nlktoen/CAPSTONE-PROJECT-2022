var config1 = require('./dbconfig');
const sql1 = require('mssql');


async function getMKT(){
    try {
        let pool = await sql1.connect(config1);
        let products = await pool.request().query("SELECT * from [v_MKT_score]")
        return products.recordsets;
    }
    catch (error){
        console.log(error)

    }
}

module.exports = {
    getMKT: getMKT
}