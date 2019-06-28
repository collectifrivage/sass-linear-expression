# SASS Linear Expression

**Responsive dimension without use of media queries.**

```scss
p {
  $p1-breakpoint: 320px;
  $p1-font-size:  16px;

  $p2-breakpoint: 1920px;
  $p2-font-size:  24px;

  $expression: linear-expression(
    ($p1-breakpoint, $p1-font-size),
    ($p2-breakpoint, $p2-font-size)
  );

  font-size: calc(#{$expression});

  // viewport width of 240px  = 15.6px
  // viewport width of 320px  = 16px
  // viewport width of 768px  = 18.24px
  // viewport width of 1920px = 24px
  // viewport width of 2048px = 24.64px
}
```
