# Math-PKG

**Math-PKG** Is a JavaScript Math library with many useful functions including Complex Number Functionality and Integration.

+ [Math-PKG](#math-pkg)
    + [Installation](#installation)
    + [Complex Numbers](#complex-numbers)
        + [Construction](#construction)
        + [Getters](#getters)
            + [Complex.Re](#complex.re)
            + [Complex.Im](#complex.im)
            + [Complex.Conjugate](#complex.conjugate)
            + [Complex.conj](#complex.conj)
            + [Complex.minus](#complex.minus)
            + [Complex.abs](#complex.abs)
            + [Complex.ln](#complex.ln)
            + [Complex.cos](#complex.cos)
            + [Complex.sin](#complex.sin)
            + [Complex.tan](#complex.tan)
            + [Complex.cis](#complex.cis)
            + [Complex.factorial](#complex.factorial)
            + [Complex.Arg](#complex.arg)
        + [Setters](#setters)
            + [Complex.Re](#complex.re-(setter))
            + [Complex.Im](#complex.im-(setter))
        + [Methods](#methods)
            + [Complex.setRe(number x)](#complex.setre(number-x))
            + [Complex.setIm(number y)](#complex.setim(number-y))
            + [Complex.setC(Complex a)](#complex.setc(complex-a))
            + [Complex.round(int d)](#complex.round(int-d))
            + [Complex.add(number/Complex g)](#complex.add(number/complex-g))
            + [Complex.subtract(number/Complex g)](#complex.subtract(number/complex-g))
            + [Complex.times(number/Complex g)](#complex.times(number/complex-g))
            + [Complex.divide(number/Complex g)](#complex.divide(number/complex-g))
            + [Complex.pow(number/Complex n)](#complex.pow(number/complex-n))
            + [Complex.roots(number/Complex n)](#complex.roots(number/complex-n))
            + [Complex.log(number/Complex b)](#complex.log(number/complex-b))
            + [Complex.toString()](#complex.tostring())
            + [Complex.equals(number/Complex g)](#complex.equals(number/complex-g))
            + [Complex.copy()](#complex.copy())
    + [Functions](#functions)
        + [li(x)](#li(x))
        + [erf(x)](#erf(x))
        + [Ei(x)](#ei(x))
        + [gamma(x)](#gamma(x))
        + [digamma(x)](#digamma(x))
        + [findRoots](#findRoots)
        + [zeta(x)](#zeta(x))
        + [Factorial(x)](#factorial(x))
        + [FactorialDerivative(x)](#factorialderivative(x))
        + [root(x, n)](#root(x,-n))
        + [toComplex(x)](#tocomplex(x))
        + [cis(x)](#cis(x))
        + [cos(x)](#cos(x))
        + [sin(x)](#sin(x))
        + [tan(x)](#tan(x))
        + [round(x, d)](#round(x,-d))
        + [sum(a, b, f[, step = 1])](#sum(a,-b,-f[,-step-=-1]))
        + [prod(a, b, f[, step=1])](#prod(a,-b,-f[,-step-=-1]))
    + [Riemann Summation (Integration)](#riemann-summation-(integration))
        + [left(a, b, f[, n = 10^4])](#left(a,-b,-f[,-n-=-10^4]))
        + [right(a, b, f[, n = 10^4])](#right(a,-b,-f[,-n-=-10^4]))
        + [avg(a, b, f[, n = 10^4])](#avg(a,-b,-f[,-n-=-10^4]))
    + [Constants](#constants)
        + Pi
        + e
        + The Euler Mascheroni Constant
        + The Omega Constant

## Installation
To install using npm:

```
npm install math-pkg-cmplx
```

To import the main module:
```
const MathPKG = require("math-pkg");
```
To import the inner modules:
```
const {
	Complex,
	Functions,
	RiemannSum,
	Constants
} = MathPKG;
```

## Complex Numbers
``MathPKG.Complex`` is a class used to store complex numbers.
### Construction
To construct a new Complex number:
```
let a = 2;
let b = 5;
let myComplexNumber = new Complex(a, b); // The complex number a + bi (= 2 + 5i)
```
### Getters

#### Complex.Re
Gets the Real part:
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.Re; // Output: a
```

#### Complex.Im
Gets the Imaginary part:
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.Im; // Output: b
```

#### Complex.Conjugate
Gets the complex conjugate:
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.Conjugate; // = a - bi
```

#### Complex.conj
Same as **Complex.Conjugate**.

#### Complex.minus
Gets the complex number multiplied by -1.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.minus; // = - a - bi
```

#### Complex.abs
Gets the absolute value (Distance from zero in the complex plane).
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.abs; // = sqrt(a^2 + b^2)
```

#### Complex.ln
Gets the natural logarithm.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.ln; // = ln(a + bi)
```

#### Complex.cos
Gets the cosine.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.cos; // = cos(a + bi)
```

#### Complex.sin
Gets the sine.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.sin; // = sin(a + bi)
```

#### Complex.tan
Gets the tangent.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.tan; // = tan(a + bi)
```

#### Complex.cis
Gets the cis.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.cis; // = cis(a + bi)
```

#### Complex.factorial
Gets the factorial.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.factorial; // = (a + bi)!
```

#### Complex.Arg
Gets the complex argument.
```
let myComplexNumber = new Complex(a, b);
let c = myComplexNumber.Arg; // = Arg(a + bi)
```

### Setters

#### Complex.Re (Setter)
Sets the real part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.Re = x; // myComplexNumber = x + bi
```

#### Complex.Im (Setter)
Sets the imaginary part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.Im = y; // myComplexNumber = a + yi
```

### Methods

#### Complex.setRe(number x)
Sets `x` as the real part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.setRe(x); // myComplexNumber = x + bi
```

#### Complex.setIm(number y)
Sets `y` as the real part.
```
let myComplexNumber = new Complex(a, b);
myComplexNumber.setIm(y); // myComplexNumber = a + yi
```

#### Complex.setC(Complex a)
Sets the real part and imaginary part of a as the real and imaginary parts, respectfully.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
cn1.setC(cn2); // cn1 = x + yi
```

#### Complex.round(int d)
Returns a new complex number with the same real and imaginary parts rounded to `d` decimal places.
```
let cn1 = new Complex(1.234, 5.39);
let cn2 = cn1.round(1);
// cn2 = 1.2 + 5.4i
```

#### Complex.add(number/Complex g)
Adds the number/Complex g to this and returns the result.
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

#### Complex.subtract(number/Complex g)
Subtracts the number/Complex g from this and returns the result.
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

#### Complex.times(number/Complex g)
Multiplies this by the number/Complex g and returns the result.
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

#### Complex.divide(number/Complex g)
Divides this by the number/Complex g and returns the result.
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

#### Complex.pow(number/Complex n)
Raises this to the power of the number/Complex n and returns the result.
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

#### Complex.roots(number/Complex n)
Returns an array with the nth roots of this.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let roots = cn1.roots(cn2); // roots = the (x + yi)th roots of a + bi
```
```
let cn1 = new Complex(a, b);
let roots = cn1.roots(n); // roots = the nth roots of a + bi
```

#### Complex.log(number/Complex b)
Returns the logarithm with base b of this.
```
let cn1 = new Complex(a, b);
let cn2 = new Complex(x, y);
let cn3 = cn1.log(cn2); // cn3 = log_{x + yi} (a + bi)
```
```
let cn1 = new Complex(a, b);
let cn2 = cn1.log(n); // cn2 = log_n (a + bi)
```

#### Complex.toString()
Turns this into a string and returns the result.
```
let cn1 = new Complex(5, -8);
console.log(cn1.toString()); // Output: "5 - 8i"
```

#### Complex.equals(number/Complex g)
Checks if the real and imaginary parts of this and g are the same and returns true if they are, otherwise, returns false.
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
    // This means a == x
}else{
    // a !== x
}
```

#### Complex.copy()
Returns a new instance of Complex with the same real and imaginary parts as this.
```
let cn1 = new Complex(a, b);
let cn2 = cn1.copy(); // cn2 = a + bi
```

## Functions
``MathPKG.Functions`` contains math functions.
Note, these functions are only valid for real numbers, to use complex numbers, look at the ``Complex`` module.

### li(x)
The Logarithmic integral of x.

```
let lix = MathPKG.Functions.li(100); // ~ 30.12614
```

NOTE: in order to use Li(x), use ``li(x) - li(2)``

### erf(x)
Gauss error function.

```
let err = MathPKG.Functions.erf(2); // ~ 0.995322
```

### Ei(x)
The Exponential integral.

```
let exin = MathPKG.Functions.Ei(4); // ~ 19.6308
```

### gamma(x)
The Gamma function (An extension of the factorial valid for numbers except negative integers and zero, ``gamma(x) = (x-1)!``).

```
let fac = MathPKG.Functions.gamma(3.5); // = 2.5! ~ 3.32335
```

### digamma(x)
The digamma function. Defined as ``digamma(x) = gamma'(x) / gamma(x)`` where ``gamma'(x)`` is the derivative of the gamma function at ``x``.

```
let dg = MathPKG.Functions.digamma(5); // ~ 1.506117
```

### findRoots
The ``findRoots`` function can find roots of polynomials of certain forms. To find roots of an nth order polynomial, one must pass n+1 arguments to the function. The first argument is the coefficient of x^n, the second argument is the coefficient of x^(n-1) and the (n+1)th argument is the coefficient of x^0. By the fundamental theorem of algebra, every non-zero, single-variable, degree n polynomial with complex coefficients has, counted with multiplicity, exactly n complex roots. Therefore, for a degree n polynomial, the function will return an array with n solutions in the form of complex numbers (Using the ``Complex`` class). The coefficients passed to the function can be either real or ``Complex``.

Currently, it supports the following forms of polynomials:

1. a * x^0 = 0

    usage:
    ```
        let roots = MathPKG.Functions.findRoots(a);
    ```
2. a * x^1 + b * x^0 = 0

    usage:
    ```
        let roots = MathPKG.Functions.findRoots(a, b);
    ```
3. a * x^2 + b * x^1 + c * x^0 = 0

    usage:
    ```
        let roots = MathPKG.Functions.findRoots(a, b, c);
    ```
4. a * x^4 + b * x^2 + c * x^0 = 0

    usage:
    ```
        let roots = MathPKG.Functions.findRoots(a, 0, b, 0, c);
    ```
5. a * x^n + b * x^0 = 0

    usage:
    ```
        let roots = MathPKG.Functions.findRoots(a, 0, 0, 0, 0, 0, 0, 0, ...., 0, 0, b);
    ```

### zeta(x)
The Riemann Zeta function.
```
let psos = MathPKG.Functions.zeta(2); // ~ 1.64493
```

### Factorial(x)
Returns the factorial of x. Valid for all numbers except negative integers.
```
let fc = MathPKG.Functions.Factorial(3.5); // ~ 11.6317
```

### FactorialDerivative(x)
Returns the derivative of the Factorial function at x.
```
let m = MathPKG.Functions.FactorialDerivative(5); // ~ 204.73412
```

### root(x, n)
Returns the nth root of x.
```
let r = MathPKG.Functions.root(120, 5); // ~ 2.60517
```

### toComplex(x)
Turns a real number x into a complex number x + 0i and returns the result. If x is complex, returns x.
```
let c = MathPKG.Functions.toComplex(5); // = new Complex(5,0);
```

### cis(x)
The cis function (In radians).
```
let c = MathPKG.Functions.cis(3); // = Complex { real: -0.9899924966004454, imaginary: 0.1411200080598672 }
```

### cos(x)
The cosine function (In radians).
```
let r = MathPKG.Functions.cos(1); // = 0.5403023058681398
```

### sin(x)
The sine function (In radians).
```
let r = MathPKG.Functions.sin(1); // = 0.8414709848078965
```

### tan(x)
The tangent function (In radians).
```
let r = MathPKG.Functions.tan(1); // = 1.5574077246549018
```

### round(x, d)
Rounds x to d decimal places and returns the result.
```
let r = MathPKG.Functions.round(Math.PI,5); // = 3.14159
```

### sum(a, b, f[, step = 1])
Sums f(n) from n = a to n = b. Default step is 1.
```
let s = MathPKG.Functions.sum(1,10,n=>2*n); // = 110
```

### prod(a, b, f[, step = 1])
Return the product of f(n) from n = a to n = b. Default step is 1.
```
let p = MathPKG.Functions.prod(1, 5, n=>n/2); // = 3.75
```

## Riemann Summation (Integration)
MathPKG has no capability of finding antiderivatives of function, so to integrate, one may use MathPKG to calculate the area under a curve using Riemann Summation.
The RiemannSum functions are located inside ``MathPKG.RiemannSum``.

### left(a, b, f[, n = 10^4])
Calculates the left side Riemann sum of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. By default, `n` is 10000. The left side sum is usually a little bit less than the actual area.
```
let area = MathPKG.RiemannSum.left(0,10,x=>x); // = 49.995000000000005
```

### right(a, b, f[, n = 10^4])
Calculates the right side Riemann sum of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. By default, `n` is 10000. The right side sum is usually a little bit more than the actual area.
```
let area = MathPKG.RiemannSum.right(0,10,x=>x); // = 50.005
```

### avg(a, b, f[, n = 10^4])
Calculates the average of the left side and right side Riemann sums of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. By default, `n` is 10000. This is the most accurate method and as you can see, it's the only one that generates the exact answer (50).
```
let area = MathPKG.RiemannSum.avg(0,10,x=>x); // = 50
```

## Constants
``MathPKG.Constants`` contains the following constants:

* ``MathPKG.Constants.PI`` - Pi
* ``MathPKG.Constants.E`` - e
* ``MathPKG.Constants.GAMMA`` - The Euler Mascheroni Constant
* ``MathPKG.Constants.OMEGA`` - The Omega constant, solution of the equation ``x * exp(x) = 1``.