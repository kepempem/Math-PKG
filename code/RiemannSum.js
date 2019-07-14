const riemannSum = (a, b, f, p = 0, isLeftSum=true)=>{
	let n = p;
	if(n <= 0){
		n = Math.pow(10,3) * (b - a);
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


const avgRiemannSum = (a, b, f, p=0)=>{
	let n = p;
	if(n <= 0){
		n = Math.ceil(Math.pow(10, 3) * (b - a));
	}
	let dt = (b-a)/n;
	return (dt/2) * (f(a) + f(b)) + dt * Sum(1,n-1, (i)=>{
		return f(a + i*dt);
	});
};

const {Sum, Prod} = require("./Functions");

module.exports={
	left:(a,b,f,n=0)=>riemannSum(a,b,f,n.true),
	right:(a,b,f,n=0)=>riemannSum(a,b,f,n,false),
	avg:(a,b,f,n=0)=>avgRiemannSum(a,b,f,n)
};