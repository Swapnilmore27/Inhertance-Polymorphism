class Vehical{
    constructor(companyName, modelName, engineCC, modelYear, mileage, varient)
    {
        this.companyName = companyName;
        this.modelName = modelName;
        this.engineCC =engineCC;
        this.modelYear = modelYear;
        this. mileage = mileage;
        this.varient = varient;
    }
    
    detail()
    {
        console.log(`Details:
        Company   : ${this.companyName}
        Model     : ${this.modelName}
        Model yrs : ${this.modelYear}
        Engine    : ${this.engineCC} CC
        Mileage   : ${this.mileage}
        varient   : ${this.varient}`);
    }
}

class TwoWheeler extends Vehical{
    constructor(companyName, modelName, modelYear, engineCC, mileage, varient, sideSeat)
    {
        super(companyName, modelName, modelYear, engineCC, mileage, varient)
        this.sideSeat = sideSeat;
    }
    TVdetail()
    {
        console.log(`${super.detail()}
        Side Seat :${this.sideSeat}`);
    }
}

class FourWheeler extends Vehical{
    constructor(companyName, modelName, modelYear, engineCC, mileage, varient, source, seater)
    {
        super(companyName, modelName, modelYear, engineCC, mileage, varient)
        this.source = source;
        this.seater = seater;
    }
    FVdetail()
    {
        console.log(`${super.detail()}
        EngerySource: ${this.source}
        Seater      : ${this.seater}`);
    }
}

module.exports = {TwoWheeler, FourWheeler};