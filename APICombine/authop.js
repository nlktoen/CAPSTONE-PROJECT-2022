var config = require('./dbconfig');
const sql = require('mssql');


async function getAuth(){
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from [Session_HIST] order by [Generated_at] desc")
        return products.recordsets;
    }
    catch (error){
        console.log(error)

    }
}

module.exports = {
    getAuth: getAuth
}