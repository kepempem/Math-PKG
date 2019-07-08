const RiemannSum = require("./RiemannSum");
const g = z=>RiemannSum.avg(0,1000,t=>Math.pow(t,z-1)/Math.exp(t));
function factorial(z){
	if(z == 0){
		return 1;
	}else if(z >= 1 && z == Math.floor(z)){
		return z * factorial(z - 1);
	}else if(z < 0 && z == Math.floor(z)){
		return NaN;
	}else{
		return g(z+1);
	}
}
module.exports=factorial;