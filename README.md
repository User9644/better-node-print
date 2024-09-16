# better-node-print
[![Version npm](https://img.shields.io/npm/v/easier-http-server.svg?logo=npm)](https://www.npmjs.com/package/easier-http-server)
[![Downloads npm](https://img.shields.io/npm/d18m/easier-http-server.svg?logo=npm)](https://www.npmjs.com/package/easier-http-server)

Easier HTTP Server

## Table of Content
- [Installing](#installing)
- [Example](#example)

## Installing
```npm install easier-http-server```

## Example
```js
// Code
const { print, C, CB, R, printc } = require('better-node-print');

print(C.yellow, "Hello", R, CB.red, " World!", R);
// 'Hello': Yellow Text, ' World!': Red Background

// C -> Text Color, CB -> Background Color, R -> Reset Colors
print(`${C.yellow}, "Hello", ${R+CB.red}, " World!", ${R}`);
// 'Hello': Yellow Text, ' World!': Red Background

print([
  {text: "Hel", color: "yellow"},
  {text: "lo", bgColor: "red"},
  {text: " World.", color: "magenta", bgColor: "green"}
]);
```
