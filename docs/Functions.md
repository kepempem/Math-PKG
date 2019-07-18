# Functions

+ [MathPKG](../README.md)
    + [Installation](../README.md#installation)
    + [Documentation](./README.md)
        + [Complex Numbers](./Complex.md)
        + [**Functions**](#functions)
            + [Sum(a, b, f[, step = 1])](#suma-b-f-step--1)
            + [Prod(a, b, f[, step=1])](#proda-b-f-step--1)
            + [digamma(x)](#digammax)
            + [eta(s)](#etas)
            + [zeta(s)](#zetas)
            + [FactorialDerivative(x)](#factorialderivativex)
            + [erf(x)](#erfx)
            + [Ei(x)](#eix)
            + [li(x)](#lix)
            + [root(x, n)](#rootx-n)
            + [round(x, d)](#roundx-d)
            + [toComplex(x)](#tocomplexx)
            + [toReal(x)](#torealx)
            + [gamma(x)](#gammax)
            + [Factorial(x)](#factorialx)
            + [findRoots](#findroots)
            + [sin(x)](#sinx)
            + [cos(x)](#cosx)
            + [tan(x)](#tanx)
            + [cis(x)](#cisx)
            + [ln(x)](#lnx)
            + [log(x, b)](#logx-b)
            + [abs(z)](#absz)
        + [Riemann Summation (Integration)](./Integration.md)
        + [BaseToolbox](./BaseToolbox.md)
        + [Constants](./Constants.md)

``MathPKG.Functions`` contains math functions.
To easily access them, one may define:
```
const {Functions} = MathPKG;
```


## Sum(a, b, f[, step = 1])
Sums `f(n)` from `n = a` to `n = b`. Default step is `1`.
`a`, `b`, and `step` must be real numbers and `f` must only return real numbers.

```
let s = Functions.Sum(1,10,n=>2*n); // = 110
```

## Prod(a, b, f[, step = 1])
Return the product of `f(n)` from `n = a` to `n = b`. Default step is `1`.
`a`, `b`, and `step` must be real numbers and `f` must only return real numbers.
```
let p = Functions.Prod(1, 5, n=>n/2); // = 3.75
```

## digamma(x)
The digamma function. Defined as ``digamma(x) = gamma'(x) / gamma(x)`` where ``gamma'(x)`` is the derivative of the gamma function at ``x``.
`x` must be a real number.

```
let dg = Functions.digamma(5); // ~ 1.506117
```

## eta(s)
The Dirichlet Eta Function.
`s` must be a real number. The function is only able to calculate values for `s >= 0`.
```
let ln2 = Function.eta(1); // ~ 0.6931471
```

## zeta(s)
The Riemann Zeta function.
`s` must be a real number. The function is only able to calculate values for `s >= 0` and is undefined at `s = 1`.
```
let psos = Functions.zeta(2); // ~ 1.64493
```

## FactorialDerivative(x)
Returns the derivative of the Factorial function at `x`.
`x` must be a real number.
```
let m = Functions.FactorialDerivative(5); // ~ 204.73412
```

## erf(x)
Gauss error function.
`x` must be a real number.
```
let err = Functions.erf(2); // ~ 0.995322
```

## Ei(x)
The Exponential integral of `x`.
`x` must be a real number.
```
let exin = Functions.Ei(4); // ~ 19.6308
```

## li(x)
The Logarithmic integral of `x`.
`x` must be a real number.
```
let lix = Functions.li(100); // ~ 30.12614
```

NOTE: in order to use `Li(x)`, use ``li(x) - li(2)``

## root(x, n)
Returns the nth root of x.
`x` and `n` must be real numbers. To find complex roots use the `Complex` class.
```
let r = Functions.root(120, 5); // ~ 2.60517
```

## round(x, d)
Rounds `x` to `d` decimal places and returns the result.
`x` and `d` must be real numbers.
```
let r = Functions.round(Math.PI,5); // = 3.14159
```




## toComplex(x)
Turns a real number `x` into a complex number `x + 0i` and returns the result. If `x` is an instance of `Complex`, returns `x`.
```
let c = Functions.toComplex(5); // = new Complex(5,0);
```

## toReal(x)

If `x` is a real number (Not an instance of `Complex`), returns `x` and if `x` is an instance of `Complex` and `x.Im` is equal to `0` then returns `x.Re`, otherwise, returns `x`.

```
let c = new Complex(5, 0);
let r = Functions.toReal(c); // = 5
```

```
let c = new Complex(5, 2);
let r = Functions.toReal(c); // = 5 + 2i
```


## gamma(x)
The Gamma function (An extension of the factorial function valid for all complex numbers except negative integers and zero, ``gamma(x) = (x-1)!``).
If `x` is a real number, returns a real number.
If `x` is an instance of `Complex`, returns an instance of `Complex`.

```
let fac = Functions.gamma(3.5); // = 2.5! ~ 3.32335
```

## Factorial(x)
Returns the factorial of `x`. Valid for all complex numbers except negative integers.
If `x` is a real number, returns a real number.
If `x` is an instance of `Complex`, returns an instance of `Complex`.
```
let fc = Functions.Factorial(3.5); // ~ 11.6317
```

## findRoots
The ``findRoots`` function can find roots of polynomials of certain forms. To find roots of an nth order polynomial, one must pass n+1 arguments to the function. The first argument is the coefficient of x^n, the second argument is the coefficient of x^(n-1) and the (n+1)th argument is the coefficient of x^0. By the fundamental theorem of algebra, every non-zero, single-variable, degree n polynomial with complex coefficients has, counted with multiplicity, exactly n complex roots. Therefore, for a degree n polynomial, the function will return an array with n solutions in the form of complex numbers (Using the ``Complex`` class). The coefficients passed to the function can be either real or ``Complex``.

Currently, it supports the following forms of polynomials:

1. a * x^0 = 0

    usage:
    ```
        let roots = Functions.findRoots(a);
    ```
2. a * x^1 + b * x^0 = 0

    usage:
    ```
        let roots = Functions.findRoots(a, b);
    ```
3. a * x^2 + b * x^1 + c * x^0 = 0

    usage:
    ```
        let roots = Functions.findRoots(a, b, c);
    ```
4. a * x^4 + b * x^2 + c * x^0 = 0

    usage:
    ```
        let roots = Functions.findRoots(a, 0, b, 0, c);
    ```
5. a * x^n + b * x^0 = 0

    usage:
    ```
        let roots = Functions.findRoots(a, 0, 0, 0, 0, 0, 0, 0, ...., 0, 0, b);
    ```

## sin(x)
The sine function (In radians).
Valid for all complex numbers, `x` can be either real or `Complex`. The function returns an instance of `Complex`.
```
let r = Functions.sin(1); // = 0.8414709848078965 + 0i
```
```
let r = Functions.sin(new Complex(4, 7)); // = sin(4 + 7i) ~ -414.967700425309 - 358.4033361942234i
```

## cos(x)
The cosine function (In radians).
Valid for all complex numbers, `x` can be either real or `Complex`. The function returns an instance of `Complex`.
```
let r = Functions.cos(1); // = 0.5403023058681398 + 0i
```

## tan(x)
The tangent function (In radians).
Valid for all complex numbers, `x` can be either real or `Complex`. The function returns an instance of `Complex`.
```
let r = Functions.tan(1); // = 1.5574077246549018 + 0i
```

## cis(x)
The cis function (In radians).
Valid for all complex numbers, `x` can be either real or `Complex`. The function returns an instance of `Complex`.
```
let c = Functions.cis(3); // = -0.9899924966004454 + 0.1411200080598672i
```

## ln(x)
The natural logarithm. Valid for `C \ {0}` (All complex number except `0`). `x` can be either real or `Complex`. The function returns an instance of `Complex`.
```
let c = Functions.ln(2); // ~ 0.69314718 + 0i
```
```
let c = Functions.ln(new Complex(3, 9)); // 2.2499048351651325 + 1.2490457723982544i
```

## log(x, b)
The logarithm of `x` to base `b`. By default, `b` is `e`.
`x` can be any complex number except `0` and `b` can be any complex number except `1` and `0`. `x` and `b` can be either real or `Complex`. The function returns an instance of `Complex`.

```
let c = Functions.log(new Complex(5, 4),2); // = 2.678776002309042 + 0.9734454112306661i
```

## abs(z)
The absolute value of `x`. Valid for all complex numbers. `x` can be either real or `Complex`. The function returns a real number.

```
let v = Functions.abs(-9); // = 9
```
```
let v = Functions.abs(new Complex(3, 4)); // = 5
```