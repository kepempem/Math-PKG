# Riemann Summation (Integration)

+ [Documentation](./README.md)
    + [Complex Numbers](./Complex.md)
    + [Functions](./Functions.md)
    + [Riemann Summation (Integration)](#riemann-summation-integration)
        + [left(a, b, f[, n = 0])](#lefta-b-f-n--0)
        + [right(a, b, f[, n = 0])](#righta-b-f-n--0)
        + [avg(a, b, f[, n = 0])](#avga-b-f-n--0)
    + [BaseToolbox](./BaseToolbox.md)
    + [Constants](./Constants.md)

MathPKG has no capability of finding antiderivatives of function, so to integrate, one may use MathPKG to calculate the area under a curve using Riemann Summation.
The RiemannSum functions are located inside ``MathPKG.RiemannSum``.

## left(a, b, f[, n = 0])
Calculates the left side Riemann sum of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. When `n = 0`, the function sets `n` so that the length of one rectangle on the `x-axis` is `10^-3`, making the calculation extremly acurate. By default, `n` is `0`. The left side sum is usually a little bit less than the actual area.
```
let area = MathPKG.RiemannSum.left(0,10,x=>x); // = 49.995000000000005
```

## right(a, b, f[, n = 0])
Calculates the right side Riemann sum of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. When `n = 0`, the function sets `n` so that the length of one rectangle on the `x-axis` is `10^-3`, making the calculation extremly acurate. By default, `n` is `0`. The right side sum is usually a little bit more than the actual area.
```
let area = MathPKG.RiemannSum.right(0,10,x=>x); // = 50.005
```

## avg(a, b, f[, n = 0])
Calculates the average of the left side and right side Riemann sums of f(x) from x=a to x=b. In the geometric sense, `n` is the number of "rectangles", the bigger `n` is, the more accurate the calculation will be. When `n = 0`, the function sets the `n` so that the length of one rectangle on the `x-axis` is `10^-3`, making the calculation extremly acurate. By default, `n` is `0`. This is the most accurate method.
```
let area = MathPKG.RiemannSum.avg(0,10,x=>x); // = 50
```