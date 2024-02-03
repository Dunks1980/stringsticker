# <img src="https://cdn.jsdelivr.net/npm/@dunks1980/stringsticker.js/favicon.svg?v=1" width="40"> stringsticker.js
[![npm version](https://img.shields.io/npm/v/@dunks1980/stringsticker.js)](https://npmjs.org/package/@dunks1980/stringsticker.js) 
[![Known Vulnerabilities](https://snyk.io/test/github/dunks1980/stringsticker.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/dunks1980/stringsticker.js?targetFile=package.json) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/Dunks1980/stringsticker/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/npm/@dunks1980/stringsticker.js/badge)](https://www.jsdelivr.com/package/npm/@dunks1980/stringsticker.js)

<br/>
<hr/>
<br/>


## What is stringsticker.js?
Stringsticker is a tool for rearranging strings into a different format while retaining parts of the string that may contain variables or other dynamic content.

<br/>
<hr/>
<br/>

## Installation

stringsticker.js can be used via a script tag or importing as a module.

#### Script tag:
```html
<script src="//cdn.jsdelivr.net/npm/@dunks1980/stringsticker.js/stringsticker.js"></script>
```
<br/>
<hr/>
<br/>

#### ES Module:

```html
<script type="module" src="main.js"></script>
```

```javascript
// In main.js
import ss from '//cdn.jsdelivr.net/npm/@dunks1980/stringsticker.js/stringsticker.mjs';



```

You may want to add a version number like this to prevent breaking changes: '//cdn.jsdelivr.net/npm/@dunks1980/stringsticker.js@< VERSION >/stringsticker.mjs' the version number is optional and can be acquired from going to the npm package page. Or if using node_modules: './node_modules/@dunks1980/stringsticker.js/stringsticker.mjs'; <br>

<br/>
<hr/>
<br/>

#### NPM Module:
```javascript
npm i @dunks1980/stringsticker.js
import ss from '@dunks1980/stringsticker.js';
ss();
```

<br/>
<hr/>
<br/>

## Usage

```js
const output1 = ss(
  "Then she visited her grandmother on Sunday.",
  "{{1}} {{2}} {{3}} {{4}} {{5}} {{6}} {{7}}.",
  "{{1}} {{6}} {{7}} {{2}} {{3}} {{4}} {{5}}."
);
console.log(output1);  // Then on Sunday she visited her grandmother.

const output2 = ss(
  "12/11/2024",
  "{{day}}/{{month}}/{{year}}",
  "{{year}}-{{month}}-{{day}}"
);
console.log(output2);  // 2024-11-12
```
<br/>
<hr/>
<br/>

## Demo

https://codepen.io/Dunks1980/pen/rNRvZwe