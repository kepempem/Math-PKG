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

// Complex Riemann Sums

const complexRiemannSum = (a, b, f, p = 0, l=0, isLeftSum=true)=>{
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
	let s = toComplex(0);
	for(let i=sumStart;i<=sumEnd;i++){
		s = s.add(f(toComplex(a + i*dt)));
	}
	return s.times(dt);
};

const complexAvgRiemannSum = (a, b, f, p=0, l=DEFAULT_RECT_LENGTH)=>{
	let n = p;
	if(n <= 0){
		n = Math.ceil((1/l) * (b - a));
	}
	let dt = (b-a)/n;
	let s = toComplex(0);
	for(let i=1;i<n;i++){
		let nextHeight = f(toComplex(a + i*dt));
		s = s.add(nextHeight);
	}
	let extr = (f(toComplex(a)).add(f(toComplex(b)))).times((dt/2));
	return s.times(dt).add(extr);
};



const {Sum, toComplex} = require("./Functions");

module.exports={
	left:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>riemannSum(a,b,f,n,l,true),
	right:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>riemannSum(a,b,f,n,l,false),
	avg:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>avgRiemannSum(a,b,f,n,l),
	complexLeft:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>complexRiemannSum(a,b,f,n,l,true),
	complexRight:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>complexRiemannSum(a,b,f,n,l,false),
	complexAvg:(a,b,f,n=0,l=DEFAULT_RECT_LENGTH)=>complexAvgRiemannSum(a,b,f,n,l)
};