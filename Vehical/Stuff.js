const {TwoWheeler, FourWheeler} = require('./Vehical');

const twoWheeler = new TwoWheeler("Bajaj", "N160", 2023, 160, "45-60", 2, "no");
const fourWheeler = new FourWheeler("Suzuki", "Wagnor", 2014, 1000, "CNG:25-30, Petrol:18-19", 1, "CNG-PETROL", 5);

twoWheeler.TVdetail();
fourWheeler.FVdetail();