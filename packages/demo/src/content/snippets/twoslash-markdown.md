# Testing TwoSlash Markdown Rendering

### Cut

```ts twoslash
const level: string = "Danger"
// ---cut---
console.log(level)
```

### Logging

```ts twoslash
console.log("Hello world")
// @log: Hello world

console.warn("Ola Mundo")
// @warn: Old  Mundo

console.error("Neih hou")
// @error: Neih hou
```

### Completions

```ts twoslash
const obj = {
  console,
  s: "value2",
  nested: {
    x: 3,
    f: 10.3,
  },
};
// @noErrors
// ---cut---
obj
// ^?

// @noErrors
obj.n
//   ^|

```
