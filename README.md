# better-node-print
A Node.js package to make prettier console.log() messages.

## Table of Content
- [Installing](#installing)
- [Example](#example)

## Installing
```npm install better-node-print```

## Example
```js
const { print, printc } = require('better-node-print');

print("Hello World.", "yellow", "blue");
// Yellow Text, Blue Background

print("Hello World.", "red");
// Red Text, Normal Background

print([
  {text: "Hel", color: "yellow"},
  {text: "lo", bgColor: "red"},
  {text: " World.", color: "magenta", bgColor: "green"}
]);
```
