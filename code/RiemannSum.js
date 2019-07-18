const DEFAULT_RECT_LENGTH = Math.pow(10, -3);
const riemannSum = (a, b, f, p = 0, l=0, isLeftSum=true)=>{
	if(a == b){
		return 0;
	}
	let n = p;
	if(n <= 0){
		n = Math.ceil((1/l) * (b - a));
	}
	let dt = ((b-a)/n);
	let sumStart = 0;
	let sumEnd = n-1;
	if(!isLeftSum){
		sumStart = 1;
		sumEnd = n;
	}
	return dt * Sum(sumStart, sumEnd, (i)=>{
		return f(a + i*dt);
	});
};


const avgRiemannSum = (a, b, f, p=0, l=DEFAULT_RECT_LENGTH)=>{
	if(a == b){
		return 0;
	}
	let n = p;
	if(n <= 0){
		n = Math.ceil((1/l) * (b - a));
	}
	let dt = (b-a)/n;
	return (dt/2) * (f(a) + f(b)) + dt * Sum(1,n-1, (i)=>{
		return f(a + i*dt);
	});
};

const {Sum} = require("./Functions");

module.exports={
	left:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>riemannSum(a,b,f,n,l,true),
	right:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>riemannSum(a,b,f,n,l,false),
	avg:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>avgRiemannSum(a,b,f,n,l)
};