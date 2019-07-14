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
		let ip = Math.abs(this.Im);
		if(this.equals(0)){
			return "0";
		}else if(this.Im == 0){
			return this.Re.toString();
		}else if(this.Re !== 0){
			return this.Re.toString() + " " + (this.Im<0?"-":"+") + " " + (ip==1?"":ip) + "i";
		}else{
			return (this.Im<0?"-":"") + (ip==1?"":ip) + "i";
		}
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
				let absq = Math.pow(abs(this), 2);
				return new Complex(this.Re / absq, -1 * this.Im/absq);
			}else if(n < 0){
				return realUnit.divide(this.pow(-1 * n));
			}else if(n > 0){
				if(n % 1 == 0){
					return this.times(this.pow(n-1));
				}else{
					let frac = n % 1;
					let whole = Math.floor(n);
					return this.pow(whole).times(this.roots(1/frac)[0]);
				}
			}
		}else if(n instanceof Complex){
			return this.pow(n.Re).times(cis(ln(this).times(n.Im)));
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
			let absn = Math.pow(abs(this), 1/n);
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

}


const realUnit = new Complex(1, 0);
const toComplex = x=>{
	if(typeof x == "number"){
		return new Complex(x, 0);
	}else if(x instanceof Complex){
		return x;
	}
};
module.exports = Complex;
const {cis, ln, abs} = require("./Functions");