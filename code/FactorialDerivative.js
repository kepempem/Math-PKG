const k = Math.pow(10, 4);
const upperBound = Math.pow(10, 6);
const sum = require("./Sum");
const log = require("./Log");
module.exports=function(z){
	return sum(1, upperBound, j=>{
		return (Math.pow(j,z) * log.ln(j/k))/Math.exp(j/k);
	})/Math.pow(k, z+1);
};