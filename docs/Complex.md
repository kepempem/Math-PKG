# Complex Numbers

+ [Documentation](./README.md)
    + [Complex Numbers](#complex-numbers)
        + [Construction](#construction)
        + [Getters](#getters)
            + [Complex.Re](#complexre)
            + [Complex.Im](#complexim)
            + [Complex.Conjugate](#complexconjugate)
            + [Complex.conj](#complexconj)
            + [Complex.minus](#complexminus)
            + [Complex.Arg](#complexarg)
        + [Setters](#setters)
            + [Complex.Re](#complexre-setter)
            + [Complex.Im](#complexim-setter)
        + [Methods](#methods)
            + [Complex.setRe(number x)](#complexsetrenumber-x)
            + [Complex.setIm(number y)](#complexsetimnumber-y)
            + [Complex.setC(Complex a)](#complexsetccomplex-a)
            + [Complex.round(int d)](#complexroundint-d)
            + [Complex.add(number/Complex g)](#complexaddnumbercomplex-g)
            + [Complex.subtract(number/Complex g)](#complexsubtractnumbercomplex-g)
            + [Complex.times(number/Complex g)](#complextimesnumbercomplex-g)
            + [Complex.divide(number/Complex g)](#complexdividenumbercomplex-g)
            + [Complex.pow(number/Complex n)](#complexpownumbercomplex-n)
            + [Complex.roots(number/Complex n)](#complexrootsnumbercomplex-n)
            + [Complex.toString()](#complextostring)
            + [Complex.equals(number/Complex g)](#complexequalsnumbercomplex-g)
            + [Complex.copy()](#complexcopy)
    + [Functions](./Functions.md)
    + [Riemann Summation (Integration)](./Integration.md)
    + [BaseToolbox](./BaseToolbox.md)
    + [Constants](./Constants.md)

``MathPKG.Complex`` is a class used to store complex numbers.

## Construction
To construct a new Complex number:
```
let a = 2;
let b = 5;
let myComplexNumber = new Complex(a, b); // The complex number a + bi (= 2 + 5i)
```

## Getters

### Complex.Re
Gets the Real part:
```
let myComplexNumber = new Complex(a, b);
let real = myComplexNumber.Re; // = a
```

### Complex.Im
Gets the Imaginary part:
```
let myComplexNumber = new Complex(a, b);
let imag = myComplexNumber.Im; // = b
```

### Complex.Conjugate
Gets the complex conjugate:
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.Conjugate; // = a - bi
```


### Complex.conj
Same as **Complex.Conjugate**. Gets the complex conjugate.



### Complex.minus
Gets the complex number multiplied by -1.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.minus; // = - a - bi
```



### Complex.Arg
Gets the complex argument.
```
let myComplexNumber = new Complex(a, b);
let theta = myComplexNumber.Arg; // = Arg(a + bi)
```

## Setters

### Complex.Re (Setter)
Sets the real part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.Re = x; // myComplexNumber = x + bi
```

### Complex.Im (Setter)
Sets the imaginary part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.Im = y; // myComplexNumber = a + yi
```

## Methods

### Complex.setRe(number x)
Sets `x` as the real part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.setRe(x); // myComplexNumber = x + bi
```

### Complex.setIm(number y)
Sets `y` as the imaginary part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.setIm(y); // myComplexNumber = a + yi
```

### Complex.setC(Complex a)
Sets the real part and imaginary part of `a` as the real and imaginary parts of `this`, respectively.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
cn1.setC(cn2); // cn1 = x + yi
```

### Complex.round(int d)
Returns a new complex number with the same real and imaginary parts rounded to `d` decimal places.
```
let cn1 = new Complex(1.234, 5.39);
let cn2 = cn1.round(1);
// cn2 = 1.2 + 5.4i
```

### Complex.add(number/Complex g)
Adds `g` to `this` and returns the result.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.add(cn2); // cn3 = (a + x) + (b + y)i
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
let cn3 = cn1.add(cn2); // cn3 = (a + x) + bi
```

### Complex.subtract(number/Complex g)
Subtracts `g` from `this` and returns the result.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.subtract(cn2); // cn3 = (a - x) + (b - y)i
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
let cn3 = cn1.subtract(cn2); // cn3 = (a - x) + bi
```

### Complex.times(number/Complex g)
Multiplies `this` by `g` and returns the result.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.times(cn2); // cn3 = (a + bi) * (x + yi)
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
let cn3 = cn1.times(cn2); // cn3 = x(a + bi)
```

### Complex.divide(number/Complex g)
Divides `this` by `g` and returns the result.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.divide(cn2); // cn3 = (a + bi) / (x + yi)
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
let cn3 = cn1.divide(cn2); // cn3 = (a + bi)/x
```

### Complex.pow(number/Complex n)
Raises `this` to the power of `n` and returns the result.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.pow(cn2); // cn3 = (a + bi) ^ (x + yi)
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
let cn3 = cn1.pow(cn2); // cn3 = (a + bi)^x
```

### Complex.roots(number/Complex n)
Returns an array with the nth roots of `this`.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let roots = cn1.roots(cn2); // roots = the (x + yi)th roots of a + bi
```
```
let cn1 = new Complex(a, b);
let roots = cn1.roots(n); // roots = the nth roots of a + bi
```

### Complex.toString()
Turns `this` into a string and returns the result.
```
let cn1 = new Complex(5, -8);
console.log(cn1.toString()); // Output: "5 - 8i"
```

### Complex.equals(number/Complex g)
Checks if the real and imaginary parts of `this` and `g` are equal and returns `true` if they are, otherwise, returns `false`.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
if(cn1.equals(cn2)){
    // This means that a == x and b == y
}else{
    // Either a !== x or b !== y
}
```
```
let cn1 = new Complex(a, b);
let cn2 = x;
if(cn1.equals(x)){
    // This means that a == x and b == 0
}else{
    // a !== x or b !== 0
}
```

### Complex.copy()
Returns a new instance of `Complex` with the same real and imaginary parts as `this`.
```
let cn1 = new Complex(a, b);
let cn2 = cn1.copy(); // cn2 = a + bi
```