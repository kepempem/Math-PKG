const MathPKG = require("./index.js");
const {
	Complex,
	Functions,
	RiemannSum,
	Constants,
	BaseToolbox
} = MathPKG;

let e = new Complex(Math.E);
let pi = new Complex(Math.PI);
let i = new Complex(0,1);

console.log(
	e
	.pow(pi.times(i))
	.round(10)
	.toString()
); // e ^ i pi