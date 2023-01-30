<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>read-json-safe</h1>
  <a href="https://npmjs.com/package/read-json-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-json-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-json-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-json-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/read-json-safe?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/read-json-safe.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Read JSON files without try catch.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/read-json-safe">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/read-json-safe?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

Returns `undefined` on errors, for example if the file does not exist.

## Installation

```sh
yarn add read-json-safe
```

```sh
npm install read-json-safe
```

```sh
pnpm add read-json-safe
```

## Usage

### Read a JSONValue:

```ts
import { readJSON, readJSONSync, JSONValue } from "read-json-safe";

readJSON("file.json"); // Promise<JSONValue | undefined>
readJSONSync("file.json"); // JSONValue | undefined
```

### Read a JSONObject:

```ts
import { readJSONObject, readJSONObjectSync, JSONObject } from "read-json-safe";

readJSONObject("file.json"); // Promise<JSONObject | undefined>
readJSONObjectSync("file.json"); // JSONObject | undefined
```

### Read a JSONArray:

```ts
import { readJSONArray, readJSONArraySync, JSONArray } from "read-json-safe";

readJSONArray("file.json"); // Promise<JSONArray | undefined>
readJSONArraySync("file.json"); // JSONArray | undefined
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/read-json-safe?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/read-json-safe.svg"></a></h2>

- [parse-json-object](https://www.npmjs.com/package/parse-json-object): Parse a typed JSON object
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch


<br />

<h3>Dev Dependencies</h3>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/read-json-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [read-lcov-safe](https://www.npmjs.com/package/read-lcov-safe): Read and parse an lcov file without try catch
- [read-md-safe](https://www.npmjs.com/package/read-md-safe): Read markdown files as a [Marked](https://www.npmjs.com/package/marked) token list or string
