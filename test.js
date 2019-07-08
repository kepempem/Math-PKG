const MathPKG = require("./index.js");
const {
	Complex,
	Functions,
	RiemannSum,
	Constants
} = MathPKG;

console.log(new Complex(Math.E).pow(new Complex(Math.PI).times(new Complex(0,1))).round(10));