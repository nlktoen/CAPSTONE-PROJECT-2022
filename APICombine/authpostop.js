var config = require('./dbconfig');
const sql = require('mssql');


async function postAuth(datajson){
    try {
        let pool = await sql.connect(config);
        //  let data_json = data.json()
        //  insert into [Authentication_Records] ([user_name],[PASSWORD],[Session]) values ('danphan','234567',2)
        //let query = "insert into [Authentication_Records] ([user_name],[PASSWORD],[Session]) values ('"+datajson['user_name']+"','"+datajson['PASSWORD']+"',"+datajson['Session']+")"
        let datetime = datajson['generated_at']
        let query = "insert into [Session_HIST] ([generated_at],[token]) values ('"+datajson['generated_at']+"','"+datajson['token']+"')"
        let products = await pool.request().query(query)
        return 'STATUS OK';
    }
    catch (error){
        console.log(error)

    }
}

module.exports = {
    postAuth: postAuth
}