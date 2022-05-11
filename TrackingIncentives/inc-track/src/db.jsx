const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=DESKTOP-I0VMTGG,1433;Database=master;User Id=nlktoen;Password=9079587811;Encrypt=true')
        const result = await sql.query`select * from v_checking_incentive where cif = 'TS50305'`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}