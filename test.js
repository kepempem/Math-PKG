const MathPKG = require("./index.js");
const {
	Complex,
	Functions,
	RiemannSum,
	Constants,
	BaseToolbox
} = MathPKG;

let pi_i = new Complex(0, Math.PI);

console.log(
	Functions.exp(pi_i)
	.round(10)
	.toString()
); // e ^ i pi
