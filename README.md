# SASS Linear Expression

**Responsive dimension without use of media queries.**

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
and [vw](https://caniuse.com/#search=vw), which include :

* Internet Explorer 11
* Chrome
* Firefox
* Safari
* Android Browser

## Usage

The `linear-expression()` SASS function return an expression to
use with the CSS `calc()`. This enable more complexe expression.

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
// Substraction
font-size: calc(#{$linear} - 10%);
```

It is also possible to do addition or substraction of 
multiple linear expressions.

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

Precision of float number will vary depending on your compiler configuration, 
which affect the precision of the expression.

* [Node SASS precision option](https://github.com/sass/node-sass#precision)

### Order of operations

CSS calc() function abide by order of operations, 
for this reason the generated expression will be in parentheses,
which can result like the following.

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

`linear-expression()` accept all absolute CSS units (cm, mm, in, px, pt, pc), 
altough the output will always by in pixel.

This is possible because of real-world unit calculations, has explain in the
[SASS documentation of numeric units](https://sass-lang.com/documentation/operators/numeric#units).