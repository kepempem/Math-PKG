let sum = require("./Sum");

function riemannSum(a, b, f, n = Math.pow(10, 4), isLeftSum=true){
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

const rs = {
	left:(a,b,f,n=Math.pow(10,4))=>riemannSum(a,b,f,n.true),
	right:(a,b,f,n=Math.pow(10,4))=>riemannSum(a,b,f,n,false),
	avg:(a,b,f,n=Math.pow(10,4))=>{
		return (1/2) * (rs.left(a,b,f,n) + rs.right(a,b,f,n));
	}
};

module.exports=rs;