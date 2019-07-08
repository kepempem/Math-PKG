class Complex {
	constructor(a=0,b=0){
		this.real = a;
		this.imaginary = b;
	}
	get Re(){
		return this.real;
	}

	get Im(){
		return this.imaginary;
	}

	get Conjugate(){
		return new Complex(this.Re, -1*this.Im);
	}

	get conj(){
		return this.Conjugate;
	}

	get minus(){
		return new Complex(-1*this.Re, -1*this.Im);
	}

	get abs(){
		return Math.sqrt(Math.pow(this.Re, 2) + Math.pow(this.Im, 2));
	}

	get ln(){
		if(this.equals(0)){
			return new Complex(-Infinity);
		}
		if(this.Im == 0){
			return new Complex(Math.log(this.Re));
		}
		return new Complex(Math.log(this.abs), this.Arg);
	}

	get cos(){
		return cos(this);
	}

	get sin(){
		return sin(this);
	}

	get tan(){
		return this.sin.divide(this.cos);
	}

	get cis(){
		return cis(this);
	}

	get factorial(){
		if(this.equals(this.Re)){
			if(this.Re < 0 && Math.floor(this.Re) == this.Re){
				return NaN;
			}
			return Factorial(this.Re);
		}
		return complexFactorial(this);
	}

	set Re(val){
		if(typeof val == "number"){
			this.real = val;
		}
	}
	set Im(val){
		if(typeof val == "number"){
			this.imaginary = val;
		}
	}

	setRe(val){
		this.Re = val;
		return this;
	}
	setIm(val){
		this.Im = val;
		return this;
	}

	setC(c){
		if (c instanceof Complex){
			return this.setRe(c.Re).setIm(c.Im);
		}
	}

	round(p){
		let s = Math.pow(10, p);
		return new Complex(Math.round(this.Re * s) / s, Math.round(this.Im * s) / s);
	}

	get Arg(){
		if(this.equals(0)){
			return NaN;
		}else if(this.Re == 0 && this.Im > 0){
			return Math.PI/2;
		}else if(this.Re == 0 && this.Im < 0){
			return -1 * Math.PI/2;
		}
		let at = Math.atan(this.Im/this.Re);
		if(this.Re > 0){
			return at;
		}else if(this.Re < 0 && this.Im >= 0){
			return at+Math.PI;
		}else if(this.Re < 0 && this.Im < 0){
			return at-Math.PI;
		}
	}

	add(n){
		if(n instanceof Complex){
			return new Complex(this.Re + n.Re, this.Im + n.Im);
		}else if(typeof n == "number"){
			return new Complex(this.Re + n, this.Im);
		}
	}

	subtract(n){
		if(n instanceof Complex){
			return this.add(n.minus);
		}else if(typeof n == "number"){
			return new Complex(this.Re - n, this.Im);
		}
	}

	times(n){
		if(n instanceof Complex){
			return new Complex((this.Re * n.Re - this.Im * n.Im), (this.Re * n.Im + this.Im * n.Re));
		}else if(typeof n == "number"){
			return new Complex(n*this.Re, n*this.Im);
		}
	}


	toString(){
		return this.Re + (this.Im<0?"-":"+") + Math.abs(this.Im)+"i";
	}

	equals(n){
		if(n instanceof Complex){
			return this.Re == n.Re ** this.Im == n.Im;
		}else if(typeof n == "number"){
			return this.Re == n && this.Im == 0;
		}
	}

	divide(n){
		return this.times(toComplex(n).pow(-1));
	}

	pow(n){
		if(typeof n == "number"){
			if(n == 0){
				return realUnit;
			}else if(n == 1){
				return this.copy();
			}else if(n == -1){
				let absq = Math.pow(this.abs, 2);
				return new Complex(this.Re / absq, -1 * this.Im/absq);
			}else if(n < 0){
				return realUnit.divide(this.pow(-1 * n));
			}else if(n > 0){
				if(n == Math.floor(n)){
					return this.times(this.pow(n-1));
				}else{
					let frac = n % 1;
					let whole = Math.floor(n);
					return this.pow(whole).times(this.roots(1/frac)[0]);
				}
			}
		}else if(n instanceof Complex){
			return this.pow(n.Re).times(this.ln.times(n.Im).cis);
		}
	}

	copy(){
		return new Complex(this.Re, this.Im);
	}

	roots(n){
		if(typeof n == "number"){
			if(n == 0){
				return [];
			}else if(this.equals(0)){
				return [toComplex(0)];
			}
			let roots = [];
			let absn = Math.pow(this.abs, 1/n);
			let theta = this.Arg;
			for(let k=0;k<n;k++){
				let root = cis((theta+2*Math.PI*k)/n).times(absn);
				let roroot = root.round(14);
				if(roroot.Re == Math.floor(roroot.Re) && roroot.Re !== root.Re){
					root.Re = roroot.Re;
				}
				if(roroot.Im == Math.floor(roroot.Im) && roroot.Im !== root.Im){
					root.Im = roroot.Im;
				}
				roots.push(root);
			}
			return roots;
		}else if(n instanceof Complex){
			if(this.equals(0)){
				return [toComplex(0)];
			}
			return [this.pow(n.pow(-1))];
		}
	}

	log(base){
		return this.ln.divide(toComplex(base).ln);
	}

}
const realUnit = new Complex(1, 0);
const imaginaryUnit = new Complex(0, 1);
const cos = x=>{
	if(typeof x == "number"){
		return Math.cos(x);
	}else if(x instanceof Complex){
		return new Complex(cos(x.Re)*Math.cosh(x.Im), -1*sin(x.Re)*Math.sinh(x.Im));
	}
};
const sin = x=>{
	if(typeof x == "number"){
		return Math.sin(x);
	}else if(x instanceof Complex){
		return new Complex(sin(x.Re)*Math.cosh(x.Im), cos(x.Re)*Math.sinh(x.Im));
	}
};
const cis = x=>{
	if(typeof x=="number"){
		return new Complex(Math.cos(x),Math.sin(x));
	}else if(x instanceof Complex){
		return cos(x).add(imaginaryUnit.times(sin(x)));
	}
};
const toComplex = x=>{
	if(typeof x == "number"){
		return new Complex(x, 0);
	}else if(x instanceof Complex){
		return x;
	}
};
const Factorial = require("./Factorial");
const k = Math.pow(10, 4);
const upperBound = Math.pow(10, 6);
const complexFactorial = z=>{
	let s = new Complex(0);
	for(let j=1;j<=upperBound;j++){
		let _j = toComplex(j);
		s.setC(s.add(_j.pow(z).divide(toComplex(Math.E).pow(toComplex(j/k)))));
	}
	return s.divide(toComplex(k).pow(z.add(1)));
};

module.exports = Complex;