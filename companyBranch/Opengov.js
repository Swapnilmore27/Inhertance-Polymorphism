class OpenGov {
    constructor(employees, establish)
    {
        this.employees = employees;
        this.establish = establish;
    }

    print()
    {
        return(`No. of Employees: ${this.employees}
        Established in year: ${this.establish}`);
    }

};
// const openGov = new OpenGov();
// openGov.print()
// console.log(openGov.print())

class Ogind extends OpenGov {
    constructor(employees, establish, md)
    {
        super(employees, establish);
        this.md = md;
    }
    a()
    {
        console.log(`${super.print()} and Mr. ${this.md} is MD for Ogind`);
    }
    
}
// const ogind = new Ogind();
// ogind.a();

class OgAr extends OpenGov{
    constructor(employees, establish, ceo){
        super(employees, establish);
        this.ceo=ceo;
    }
    b()
    {
        console.log(`${super.print()} and Mr. ${this.ceo} is a ceo of OG_AR`)
    }
}

module.exports = {Ogind,OgAr};

