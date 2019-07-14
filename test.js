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

let b16 = BaseToolbox.generateSimpleBase(16);
let b2 = BaseToolbox.generateSimpleBase(2);
console.log(
	new BaseToolbox.BaseNumber("1001101",b2)
	.to(b16)
	.toString()
);
let c = new Complex(5, 8);
console.log(
	Functions.cis(c.Arg)
	.times(Functions.abs(c))
	.round(10)
	.toString()
);