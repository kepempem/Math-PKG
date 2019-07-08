module.exports = function(a, b, f, step = 1){
	let n = a;
	let end = b;
	if(a > b){
		n = b;
		end = a;
	}
	let _prod = 1;
	for(let i=a; i<=b; i=i+step){
		_prod *= f(i);
	}
	return _prod;
};