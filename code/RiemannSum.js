let sum = require("./Sum");

function riemannSum(a, b, f, p = 0, isLeftSum=true){
	let n = p;
	if(n <= 0){
		n = Math.pow(10,3) * (a - b);
	}
	let dt = ((b-a)/n);
	let sumStart = 0;
	let sumEnd = n-1;
	if(!isLeftSum){
		sumStart = 1;
		sumEnd = n;
	}
	return dt * sum(sumStart, sumEnd, (i)=>{
		return f(a + i*dt);
	});
}
function avgRiemannSum(a, b, f, p=0){
	let n = p;
	if(n <= 0){
		n = Math.ceil(Math.pow(10, 3) * (b - a));
	}
	let dt = (b-a)/n;
	return (dt/2) * (f(a) + f(b)) + dt * sum(1,n-1, (i)=>{
		return f(a + i*dt);
	});
}

const rs = {
	left:(a,b,f,n=0)=>riemannSum(a,b,f,n.true),
	right:(a,b,f,n=0)=>riemannSum(a,b,f,n,false),
	avg:(a,b,f,n=0)=>{
		return avgRiemannSum(a,b,f,n);
	}
};

module.exports=rs;