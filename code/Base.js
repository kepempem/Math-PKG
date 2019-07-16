class Base {
	constructor(digits){
		this.dgts = digits;
		this.sz = digits.length;
	}
	equals(b){
		let t = this.digits;
		let o = b.digits;
		if(this.size != b.size){
			return false;
		}
		for(let i=0;i<t.length;i++){
			if(o[i] !== t[i]){
				return false;
			}
		}
		return true;
	}
	get digits(){
		return this.dgts;
	}
	get size(){
		return this.sz;
	}
	set digits(d){
		this.dgts = d;
	}
	toBaseNumber(n){
		if(n instanceof BaseNumber){
			return n;
		}else{
			return new BaseNumber(n.toString(), this);
		}
	}
}

const simpleBase = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const generateSimpleBase = (l)=>new Base(simpleBase.slice(0,l));
const base10 = generateSimpleBase(10);

class BaseNumber {
	constructor(digits, base, sign = 1){
		this.dgts = toArray(digits);
		this.bs = base;
		this.sgn = sign;
	}
	toString(){
		return this.digits.join("");
	}
	to(c){
		return new BaseNumber(convert(this, this.base, c),c,this.sign);
	}
	get digits(){
		return this.dgts;
	}
	get sign(){
		return this.sgn;
	}
	get base(){
		return this.bs;
	}
	get minus(){
		let m = this.copy();
		m.sign = (-1) * this.sign;
		return m;
	}
	set sign(s){
		if(s == 1 || s == -1){
			this.sgn = s;
		}
	}
	set digits(d){
		this.dgts = toArray(d);
	}
	toBase10(){
		return this.sign * parseInt(this.to(base10).toString());
	}
	copy(){
		return new BaseNumber(this.digits, this.base, this.sign);
	}
}

const toArray = (k)=>{
	if(k instanceof Array){
		return k;
	}else if(typeof k == "string"){
		return k.split("");
	}else if(typeof k == "number"){
		return Math.floor(k).toString().split("");
	}else if(k instanceof BaseNumber){
		return k.digits;
	}
};

const base10toBase = (numDigits,base)=>{
	let biggestPower = 0;
	let an = parseInt(numDigits.join(""));
	if(an == 0){
		if(base.digits.length>1){
			return [base.digits[0]];
		}else{
			return [];
		}
	}
	while(Math.pow(base.size, biggestPower) < an){
		biggestPower++;
	}
	if(Math.pow(base.size, biggestPower) > an){
		biggestPower--;
	}
	let nDigits = [];
	let r = an;
	let p = biggestPower;
	for(let i=0;i<=biggestPower;i++){
		let d = Math.pow(base.size,p);
		nDigits.push(
			base.digits[Math.floor(r / d)]
		);
		r = r % d;
		p--;
	}
	return nDigits;
};
const baseToBase10 = (numDigits,base)=>{
	if(numDigits.length == 1){
		return [base.digits.indexOf(numDigits[0])];
	}
	let b10num = 0;
	for(let i = 0; i < numDigits.length; i++){
		b10num += parseInt(base.digits.indexOf(numDigits[i])) * Math.pow(base.size,numDigits.length-i-1);
	}
	return b10num.toString().split("");
};
const getSign = (n)=>{
	if(typeof n == "number"){
		if(n >= 0){
			return 1;
		}else{
			return -1;
		}
	}else if(n instanceof BaseNumber){
		return n.sign;
	}
	return 1;
};
const convert = (num, from, to)=>{
	let sign = getSign(num);
	let numDigits = toArray(num);
	if(from.equals(to)){
		return new BaseNumber(numDigits, to, sign);
	}else if(from.equals(base10)){
		return new BaseNumber(base10toBase(numDigits,to), to, sign);
	}else if(to.equals(base10)){
		return new BaseNumber(baseToBase10(numDigits, from), to, sign);
	}else{
		return new BaseNumber(base10toBase(baseToBase10(numDigits, from), to), to, sign);
	}
};

const convertString = (num, from, to)=>convert(num,from,to).toString();

module.exports = {
	Base,
	generateSimpleBase,
	BaseNumber
};