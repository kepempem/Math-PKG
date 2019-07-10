![MathPKG](./media/logo.png)


[![NPM Version](https://img.shields.io/npm/v/math-pkg-cmplx.svg)](https://www.npmjs.com/package/math-pkg-cmplx)
[![NPM Downloads](https://img.shields.io/npm/dw/math-pkg-cmplx.svg)](https://www.npmjs.com/package/math-pkg-cmplx)

**Math-PKG** Is a Math Library with Complex Number Functionality, Integration functions and conversion functions between numerical bases.

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
    + [BaseToolbox](#basetoolbox)
        + [Base](#base)
            + [Base.digits](#base.digits)
            + [Base.size](#base.size)
            + [Base.equals(b)](#base.equals(b))
        + [BaseNumber](#basenumber)
            + [BaseNumber.toString()](#basenumber.tostring())
            + [BaseNumber.to(b)](#basenumber.to(b))
            + [BaseNumber.digits](#basenumber.digits)
            + [BaseNumber.base](#basenumber.base)
            + [BaseNumber.sign](#basenumber.sign)
        + [generateSimpleBase(l)](#generatesimplebase(l))
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
    BaseToolbox,
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

## BaseToolbox
``MathPKG.BaseToolbox`` contains functions and classes that can be used to manipulate numbers in different numerical bases.

### Base
``MathPKG.BaseToolbox.Base`` is a class used to create new numerical bases.
The ``Base`` constructor only takes one argument, an array consisting of strings, each string represents a number in the new base. For example, to generate the decimal system (Base 10) :
```
let base10 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);
```
And to create the binary system (Base 2) :
```
let base2 = new MathPKG.BaseToolbox.Base(["0","1"]);
```

#### Base.digits
To get or set the digits array of the base, one may use ``Base.digits``.
To get:
```
let d = base2.digits;
```

To set:
```
base2.digits = ["A","B"];
```

#### Base.size
To get the size of the base (Base 10 => 10, Base 2 => 2), one may use ``Base.size``.
```
let baseSize = base10.size; // = 10
```

#### Base.equals(b)
The Base.equals method returns true if the base from which it is called and the base `b` that is given to her, are the same, and returns false otherwise.
```
let base10 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);
let base2 = new MathPKG.BaseToolbox.Base(["0","1"]);
let copy = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);

base10.equals(base10) // => true
base10.equals(base2) // => false
base10.equals(copy) // => true
```

### BaseNumber
``MathPKG.BaseToolbox.BaseNumber`` is a class used to store numbers and information regarding them. Its constructor takes the following arguments:
1. ``digits`` - The digits of the number, can be a number, a string or an array of digits as strings
2. ``base`` - The Base of the number, an instance of the ``MathPKG.BaseToolbox.Base`` class.
3. ``sign`` - Optional, ``1`` by default, can be either ``1`` or ``-1`` and represents the sign of the number (``1`` for +, ``-1`` for -).

To store the number 100 in the decimal system:
```
let oneHundred = new MathPKG.BaseToolbox.BaseNumber(100, base10);
```

To store the number A2 in the hexadecimal system (162 - base 10):
```
let n162 = new MathPKG.BaseToolbox.BaseNumber("A2", base16);
```

#### BaseNumber.toString()
Turns the number into a string and returns the result.
Usage:
```
console.log(n162.toString()); // Output: "A2"
```

#### BaseNumber.to(b)
Converts the number to base ``b`` and returns a new instance of ``BaseNumber`` with the new number and base.

To convert 1011010110 base 2 to base 16:
```
let b2 = new MathPKG.BaseToolbox.Base(["0","1"]);
let b16 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]);

let n1 = new MathPKG.BaseToolbox.BaseNumber("1011010110",b2);

let n2 = n1.to(b16).toString(); // Output: "2D6"
```

#### BaseNumber.digits
One may use ``BaseNumber.digits`` to either get or set the digits of the number. When setting the digits, One may set them as a String, An array of string digits or a number.

```
let n = new MathPKG.BaseToolbox.BaseNumber("A32",b16);

console.log(n.digits); // Output: ['A', '3', '2']

n.digits = "56D";
console.log(n.digits); // Output: ['5', '6', 'D']

n.digits = ["F", "3", "2"];
console.log(n.digits); // Output: ['F', '3', '2']

n.digits = 244;
// Although you are passing a number in the decimal system,
// It will be turned into an array of digits and MathPKG will
// treat it as a number in the base of the base number, in this case,
// a hexadecimal one. 244 in base 16 is 580 in base 10.
console.log(n.digits); // Output: ['2', '4', '4']

```


#### BaseNumber.base
One may use ``BaseNumber.base`` in order to get the base of the number (An instance of the ``Base`` class).

#### BaseNumber.sign
One may use ``BaseNumber.sign`` in order to get or set the sign of the number, can be set to either `1` or `-1`.

### generateSimpleBase(l)
``MathPKG.BaseToolbox.generateSimpleBase`` that can generate simple numerical bases. It takes a single argument, which is the size of the base (The size of base 10 is ten, the size of base 16 is 16) and returns an instance of ``MathPKG.BaseToolbox.Base``. The Bases that the function generates consist of consecutive numbers and consecutive capital english letters, Therefore, the longest base the function can generate has 36 digits (0, 1, 2, 3, 4, ..., 9, A, B, C, ... Y, Z). For example:
```
let b2 = MathPKG.BaseToolbox.generateSimpleBase(2); // Digits: ["0", "1"]
let b5 = MathPKG.BaseToolbox.generateSimpleBase(5); // Digits: ["0", "1", "2", "3", "4"]
let b16 = MathPKG.BaseToolbox.generateSimpleBase(16); // Digits: ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
```

## Constants
``MathPKG.Constants`` contains the following constants:

* ``MathPKG.Constants.PI`` - Pi
* ``MathPKG.Constants.E`` - e
* ``MathPKG.Constants.GAMMA`` - The Euler Mascheroni Constant
* ``MathPKG.Constants.OMEGA`` - The Omega constant, solution of the equation ``x * exp(x) = 1``.