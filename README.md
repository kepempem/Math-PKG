![MathPKG](./media/logo.png)


[![NPM Version](https://img.shields.io/npm/v/math-pkg-cmplx.svg)](https://www.npmjs.com/package/math-pkg-cmplx)
[![NPM Downloads](https://img.shields.io/npm/dt/math-pkg-cmplx.svg)](https://www.npmjs.com/package/math-pkg-cmplx)

**Math-PKG** Is a Math Library with Complex Number Functionality, Integration functions and conversion functions between numerical bases.

+ [**Math-PKG**](#math-pkg)
    + [Installation](#installation)
    + [Documentation](./docs/README.md)
        + [Complex Numbers](./docs/Complex.md)
        + [Functions](./docs/Functions.md)
        + [Riemann Summation (Integration)](./docs/Integration.md)
        + [BaseToolbox](./docs/BaseToolbox.md)
        + [Constants](./docs/Constants.md)

## Installation

To install using npm:

```
npm install math-pkg-cmplx
```

To import the main module:
```
const MathPKG = require("math-pkg-cmplx");
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