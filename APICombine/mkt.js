class MKT{
    constructor(cif, Marital_Status, Gender, STATUS_CUSTOMER, PackageType, REGION, CASA_AMT,ACTIVE, channel,score){
        this.cif =cif;
        this.Marital_Status = Marital_Status;
        this.Gender = Gender;
        this.STATUS_CUSTOMER = STATUS_CUSTOMER;
        this.PackageType = PackageType;
        this.REGION = REGION;
        this.CASA_AMT = CASA_AMT;
        this.ACTIVE = ACTIVE;
        this.channel = channel;
        this.score = score;
    }
}

module.exports = MKT;