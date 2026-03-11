<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>read-json-safe</h1>
  <a href="https://npmjs.com/package/read-json-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-json-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-json-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-json-safe.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/read-json-safe?branch=main">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/read-json-safe.svg?branch=main">
  </a>
</div>

<br />

<blockquote align="center">Read JSON files without try catch.</blockquote>


---
<!--END HEADER-->

Returns `undefined` on errors, for example if the file does not exist.

## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/read-json-safe">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install read-json-safe
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/read-json-safe">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add read-json-safe
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add read-json-safe
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add read-json-safe
```

</details>


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
<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/read-json-safe.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->

<br />

## Related Packages

- [fs-safe](https://www.npmjs.com/package/fs-safe): A simple fs wrapper that doesn't throw
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch
- [read-lcov-safe](https://www.npmjs.com/package/read-lcov-safe): Read and parse an lcov file without try catch
- [read-md-safe](https://www.npmjs.com/package/read-md-safe): Read markdown files as a [Marked](https://www.npmjs.com/package/marked) token list or string
