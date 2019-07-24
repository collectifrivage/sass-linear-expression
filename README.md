# SASS Linear Expression

**Responsive dimensions without the use of media queries.**

```scss
p {

  // font size of 16px at viewport width of 320px
  // font size of 18.24px at viewport width of 768px
  // font size of 24px at viewport width of 1920px

  font-size: calc(#{linear-expression(
    (320px,16px),
    (1920px,24px)
  )});

}
```

## Quick install

### NPM

```bash
npm i sass-linear-expression
```

### Import

```scss
import 'sass-linear-expression/linear-expression.scss'
```

## Browser support

All browsers with support for CSS [calc()](https://caniuse.com/#search=calc) 
and [vw](https://caniuse.com/#search=vw) are supported, which includes:

* Internet Explorer 11
* Chrome
* Firefox
* Safari
* Android Browser

## Usage

The `linear-expression()` SASS function returns an expression intended to
use within the CSS `calc()` function. This enables more complex expressions:

```scss
$linear: linear-expression(
  (320px,16px),
  (1920px,24px)
);

// Multiplication
font-size: calc(#{$linear} * 2);
// Division
font-size: calc(#{$linear} / 2);
// Addition
font-size: calc(#{$linear} + 10%);
// Subtraction
font-size: calc(#{$linear} - 10%);
```

It is also possible to add or subtract multiple linear expressions:

```scss
$linear1: linear-expression(
  (320px,16px),
  (1920px,24px)
);

$linear2: linear-expression(
  (320px,8px),
  (1920px,12px)
);

font-size: calc(#{$linear1} + #{$linear2});
```

### Precision

The precision of float numbers will vary depending on your compiler configuration, 
which affects the precision of the generated expressions.

* [Node SASS precision option](https://github.com/sass/node-sass#precision)

### Order of operations

The CSS `calc()` function follows the standard order of operations. 
For this reason the generated expression will be surrounded by parentheses,
which can result in the following:

```css
p {
  font-size: calc((5px + .5vw));
}
```

A third argument is available to remove parentheses from the expression.

```scss
$linear: linear-expression(
  (320px,16px),
  (1920px,24px),
  false
);
```

### Units

`linear-expression()` accepts all absolute CSS units (cm, mm, in, px, pt, pc), 
although the output will always by in pixels.

This is made possible by SASS's support of real-world unit calculations, as detailed in the
[SASS documentation of numeric units](https://sass-lang.com/documentation/operators/numeric#units).
