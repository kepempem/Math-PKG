const li2 = require("./Constants").LI2;
const Complex = require("./Complex");


const Fk = Math.pow(10, 4);
const FupperBound = Math.pow(10, 6);
const eps = Math.pow(10, -10);
const realUnit = new Complex(1, 0);
const imaginaryUnit = new Complex(0, 1);
const complexE = new Complex(Math.E);

// Real Functions (R -> R)

const Sum = (a, b, f, step = 1)=>{
	let n = a;
	let end = b;
	if(a > b){
		n = b;
		end = a;
	}
	let _sum = 0;
	for(let i=n; i<=end; i=i+step){
		_sum += f(i);
	}
	return _sum;
};


const Prod = (a, b, f, step = 1)=>{
	let n = a;
	let end = b;
	if(a > b){
		n = b;
		end = a;
	}
	let _prod = 1;
	for(let i=n; i<=end; i=i+step){
		_prod *= f(i);
	}
	return _prod;
};

const digamma = x=>FactorialDerivative(x-1)/gamma(x);

const eta = s=>{
	if(s < 0){
		return (1 - Math.pow(2, 1-s)) * zeta(s);
	}else if(s == 0){
		return 1/2;
	}else{
		return RiemannSum.avg(s>0?0:eps, 100, t=>(Math.pow(t, s)/Math.pow(Math.cosh(t),2)))/(Math.pow(2,1-s)*gamma(s+1));
	}
};

const zeta = s=>{
	if(s == 1){
		return Infinity;
	}else if(s > 0 && s < 2){
		return eta(s)/(1-Math.pow(2,1-s))
	}else if(s>=2){
		if(s % 2 == 0){
			let n = s/2;
			let q1 = Math.pow(-1, n+1) * B(s) * Math.pow(2 * Math.PI, s);
			let q2 = 2 * Factorial(s);
			return q1/q2;
		}else{
			let rs = RiemannSum.avg(Math.pow(10,-8),100,t=>{
				return Math.pow(t,s-1)/(Math.exp(t)-1);
			});
			return (1/gamma(s)) * rs;
		}
	}else if(s == 0){
		return -1/2;
	}else if(s == -1){
		return -1/12;
	}else if(s < 0 && Math.abs(s) % 2 == 0){
		return 0;
	}else if(s < 0){
		return Math.pow(2,s) * Math.pow(Math.PI, s-1) * Math.sin((Math.PI * s)/2) * gamma(1-s) * zeta(1-s);
	}
	return NaN;
};

const FactorialDerivative = (z)=>{
	return Sum(1, FupperBound, j=>{
		return (Math.pow(j,z) * Math.log(j/Fk))/Math.exp(j/Fk);
	})/Math.pow(Fk, z+1);
};

const erf = x=>(2/Math.sqrt(Math.PI)) * RiemannSum.avg(0, x, t=>Math.exp(-1 * Math.pow(t, 2)));

const Ei = x=>li(Math.exp(x));

const li = x=>{
	const g = t=>1/ln(t).Re;
	if(x == 0){
		return 0;
	}else if(x < 0){
		return NaN;
	}else if(x == 1){
		return -Infinity;
	}else if(x < 2){
		let h = Math.pow(10, -6);
		if(x > 1){
			return RiemannSum.avg(eps,1-eps,g,0,h) + RiemannSum.avg(1+eps, x, g,0,h);
		}else{
			return RiemannSum.avg(eps, x, g,0,h);
		}
	}else{
		return li2 + RiemannSum.avg(2, x, g);
	}
};

const root = (r,p)=>Math.pow(r, 1/p);

const round = (x,p)=>Math.round(x * Math.pow(10,p)) / Math.pow(10,p);

const binom = (n,k)=>Factorial(n)/(Factorial(k)*Factorial(n-k));

const B = n=>{
	if(n == 0){
		return 1;
	}else if(n > 1 && n % 2 == 1){
		return 0;
	}else{
		return (-1/(n+1)) * Sum(0, n-1, k=>{
			return binom(n+1, k) * B(k);
		});
	}
};

// Complex Functions
const toComplex = x=>{
	if(typeof x == "number"){
		return new Complex(x, 0);
	}else if(x instanceof Complex){
		return x;
	}
};
const toReal = x=>{
	if(typeof x == "number"){
		return x;
	}else if(x instanceof Complex){
		if(x.Im !== 0){
			return x;
		}else{
			return x.Re;
		}
	}
};



const gamma = z=>{
	if(typeof z == "number"){
		if(z < 1 && z == Math.floor(z)){
			return NaN;
		}
		return RiemannSum.avg(0,1000+z*5,t=>Math.pow(t,z-1)/Math.exp(t));
	}else if(z instanceof Complex){
		return Factorial(z.subtract(realUnit));
	}
};
const Factorial = (z)=>{
	if(z instanceof Complex){
		if(z.Im !== 0){
			return ComplexFactorial(z);
		}else{
			return new Complex(Factorial(z.Re));
		}
	}
	if(z == 0){
		return 1;
	}else if(z >= 1 && z == Math.floor(z)){
		return z * Factorial(z - 1);
	}else if(z < 0 && z == Math.floor(z)){
		return NaN;
	}else{
		return gamma(z+1);
	}
};




const ComplexFactorial = z=>{
	let s = new Complex(0);
	for(let j=1;j<=FupperBound;j++){
		let _j = toComplex(j);
		s.setC(
			s.add(
				_j
					.pow(z)
					.divide(
						exp(j/Fk)
					)
			)
		);
	}
	return s.divide(
		toComplex(Fk)
			.pow(z.add(1))
	);
};



const findRoots = (...v)=>{
	if(v.length==0){
		return null;
	}
	if(toComplex(v[0]).equals(0) && v.length > 1){
		for(let i=0;i<v.length;i++){
			if(toComplex(v[i]).equals(0)){
				continue;
			}else{
				return findRoots(...v.slice(i));
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
			let t = findRoots(c[4],c[2],c[0]);
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


const sin = x=>{
	if(typeof x == "number"){
		return new Complex(Math.sin(x));
	}else if(x instanceof Complex){
		return new Complex(sin(x.Re)*Math.cosh(x.Im), cos(x.Re)*Math.sinh(x.Im));
	}
};

const cos = x=>{
	if(typeof x == "number"){
		return new Complex(Math.cos(x));
	}else if(x instanceof Complex){
		return new Complex(cos(x.Re)*Math.cosh(x.Im), -1*sin(x.Re)*Math.sinh(x.Im));
	}
};

const tan = x=>{
	if(typeof x == "number"){
		return new Complex(Math.tan(x));
	}else if(x instanceof Complex){
		return sin(x).divide(cos(x));
	}
};


const cis = x=>{
	if(typeof x=="number"){
		return new Complex(Math.cos(x),Math.sin(x));
	}else if(x instanceof Complex){
		return cos(x).add(imaginaryUnit.times(sin(x)));
	}
};


const exp = x=>complexE.pow(x);


const ln = x=>{
	if(typeof x == "number"){
		return new Complex(Math.log(x));
	}else{
		if(x.equals(0)){
			return new Complex(-Infinity);
		}
		if(x.Im == 0){
			return new Complex(Math.log(x.Re));
		}
		return new Complex(Math.log(abs(x)), x.Arg);
	}
};

const log = (x,b)=>{
	if(typeof b == "undefined"){
		return ln(x);
	}else{
		return ln(x).divide(ln(b));
	}
};


const abs = x=>{
	if(typeof x == "number"){
		return Math.abs(x);
	}else{
		return Math.sqrt(Math.pow(x.Re, 2) + Math.pow(x.Im, 2));
	}
};

module.exports={


	// Real Functions
	Sum,
	Prod,
	digamma,
	eta,
	zeta,
	FactorialDerivative,
	erf,
	Ei,
	li,
	root,
	round,
	binom,
	B,


	// Complex Functions
	toComplex,
	toReal,
	gamma,
	Factorial,
	findRoots,
	sin,
	cos,
	tan,
	cis,
	exp,
	ln,
	log,
	abs

};
const RiemannSum = require("./RiemannSum");