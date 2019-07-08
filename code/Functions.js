const RiemannSum = require("./RiemannSum");
const Log = require("./Log");
const Factorial = require("./Factorial");
const FactorialDerivative = require("./FactorialDerivative");
const C = require("./Complex");
const li2 = 1.0451637801174927848445888891946131365226155781512015758329091440750132052103595301727174056263833563060208297688747466222852397852196502790210823345578454055159053003222632748284543905148534966228633054761993303044;
const toComplex = x=>{
	if(typeof x == "number"){
		return new C(x, 0);
	}else if(x instanceof C){
		return x;
	}
};
const sum = require("./Sum");
const prod = require("./Prod");
const toReal = x=>{
	if(typeof x == "number"){
		return x;
	}else if(x instanceof C){
		if(x.Im !== 0){
			return x;
		}else{
			return x.Re;
		}
	}
};
const li = x=>{
	let rema = 0;
	let start = 0;
	if(x >= 2){
		rema = li2;
		start = 2;
	}
	return rema+RiemannSum.avg(start, x, t=>1/Log.ln(t));
};
const gamma = x=>Factorial(x-1);
const findRoots = (...v)=>{
	if(v.length==0){
		return null;
	}
	if(toComplex(v[0]).equals(0) && v.length > 1){
		for(let i=0;i<v.length;i++){
			if(toComplex(v[i]).equals(0)){
				continue;
			}else{
				return equation(...v.slice(i));
			}
		}
	}
	let c = [];
	for(let i=v.length-1;i>-1;i--){
		c.push(toComplex(v[i]));
	}
	let order = c.length-1;
	if(order == 0){
		if(c[0].equals(0)){
			return Infinity;
		}else{
			return [];
		}
	}else if(order == 1){
		if(c[0].equals(0)){
			return 0;
		}else{
			return [c[0].minus.divide(c[1])];
		}
	}else if(order == 2){
		let g1 = c[1].minus;
		let g2 = c[1].pow(2).subtract(c[0].times(c[2]).times(4)).pow(1/2);
		let g3 = c[2].times(2);
		return [g1.add(g2).divide(g3), g1.subtract(g2).divide(g3)];
	}else if(order == 4){
		if(c[3].equals(0) && c[1].equals(0)){
			let t = equation(c[4],c[2],c[0]);
			let x12 = t[0].pow(1/2);
			let x34 = t[1].pow(1/2);
			return [x12,x12.minus,x34,x34.minus];
		}
	}
	let simpleRoot = true;
	for(let i=1;i<order;i++){
		if(!c[i].equals(0)){
			simpleRoot = false;
		}
	}
	if(simpleRoot){
		return c[0].minus.divide(c[order]).roots(order);
	}
	return [];
};
module.exports={
	li,
	erf:x=>(2/Math.sqrt(Math.PI)) * RiemannSum.avg(0, x, t=>Math.exp(-1 * Math.pow(t, 2))),
	Ei:x=>li(Math.exp(x)),
	gamma,
	digamma:x=>FactorialDerivative(x-1)/Factorial(x-1),
	zeta:s=>{
		if(s>1){
			let rs = RiemannSum.avg(Math.pow(10,-8),100,t=>{
				return Math.pow(t,s-1)/(Math.exp(t)-1);
			});
			return (1/gamma(s)) * rs;
		}else{
			return NaN;
		}
	},
	root:(r,p)=>Math.pow(r, 1/p),
	toComplex,
	cis:x=>toComplex(x).cis,
	cos:x=>toReal(toComplex(x).cos),
	sin:x=>toReal(toComplex(x).sin),
	tan:x=>toReal(toComplex(x).sin.divide(toComplex(x).cos)),
	round:(x,p)=>{
		return Math.round(x * Math.pow(10,p)) / Math.pow(10,p);
	},
	findRoots,
	sum,
	prod,
	Factorial,
	FactorialDerivative
};