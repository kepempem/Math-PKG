# BaseToolbox

+ [Documentation](./README.md)
    + [Complex Numbers](./Complex.md)
    + [Functions](./Functions.md)
    + [Riemann Summation (Integration)](./Integration.md)
    + [BaseToolbox](#basetoolbox)
        + [Base](#base)
            + [Base.digits](#basedigits)
            + [Base.size](#basesize)
            + [Base.equals(b)](#baseequalsb)
        + [BaseNumber](#basenumber)
            + [BaseNumber.toString()](#basenumbertostring)
            + [BaseNumber.to(b)](#basenumbertob)
            + [BaseNumber.digits](#basenumberdigits)
            + [BaseNumber.base](#basenumberbase)
            + [BaseNumber.sign](#basenumbersign)
        + [generateSimpleBase(l)](#generatesimplebasel)
    + [Constants](./Constants.md)


``MathPKG.BaseToolbox`` contains functions and classes that can be used to manipulate numbers in different numerical bases.

## Base
``MathPKG.BaseToolbox.Base`` is a class used to create new numerical bases.
The ``Base`` constructor only takes one argument, an array consisting of strings, each string represents a number in the new base. For example, to generate the decimal system (Base 10) :
```
let base10 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);
```
And to create the binary system (Base 2) :
```
let base2 = new MathPKG.BaseToolbox.Base(["0","1"]);
```

### Base.digits
To get or set the digits array of the base, one may use ``Base.digits``.
To get:
```
let d = base2.digits;
```

To set:
```
base2.digits = ["A","B"];
```

### Base.size
To get the size of the base (Base 10 => 10, Base 2 => 2), one may use ``Base.size``.
```
let baseSize = base10.size; // = 10
```

### Base.equals(b)
The Base.equals method returns true if the base from which it is called and the base `b` that is given to her, are the same, and returns false otherwise.
```
let base10 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);
let base2 = new MathPKG.BaseToolbox.Base(["0","1"]);
let copy = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","10"]);

base10.equals(base10) // => true
base10.equals(base2) // => false
base10.equals(copy) // => true
```

## BaseNumber
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

### BaseNumber.toString()
Turns the number into a string and returns the result.
Usage:
```
console.log(n162.toString()); // Output: "A2"
```

### BaseNumber.to(b)
Converts the number to base ``b`` and returns a new instance of ``BaseNumber`` with the new number and base.

To convert 1011010110 base 2 to base 16:
```
let b2 = new MathPKG.BaseToolbox.Base(["0","1"]);
let b16 = new MathPKG.BaseToolbox.Base(["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]);

let n1 = new MathPKG.BaseToolbox.BaseNumber("1011010110",b2);

let n2 = n1.to(b16).toString(); // Output: "2D6"
```

### BaseNumber.digits
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


### BaseNumber.base
One may use ``BaseNumber.base`` in order to get the base of the number (An instance of the ``Base`` class).

### BaseNumber.sign
One may use ``BaseNumber.sign`` in order to get or set the sign of the number, can be set to either `1` or `-1`.

## generateSimpleBase(l)
``MathPKG.BaseToolbox.generateSimpleBase`` that can generate simple numerical bases. It takes a single argument, which is the size of the base (The size of base 10 is ten, the size of base 16 is 16) and returns an instance of ``MathPKG.BaseToolbox.Base``. The Bases that the function generates consist of consecutive numbers and consecutive capital english letters, Therefore, the longest base the function can generate has 36 digits (0, 1, 2, 3, 4, ..., 9, A, B, C, ... Y, Z). For example:
```
let b2 = MathPKG.BaseToolbox.generateSimpleBase(2); // Digits: ["0", "1"]
let b5 = MathPKG.BaseToolbox.generateSimpleBase(5); // Digits: ["0", "1", "2", "3", "4"]
let b16 = MathPKG.BaseToolbox.generateSimpleBase(16); // Digits: ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
```