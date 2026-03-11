/* eslint-disable import/no-relative-parent-imports, @typescript-eslint/no-floating-promises */
import assert from "node:assert/strict";
import { beforeEach, test, afterEach } from "node:test";
import mock, { restore } from "mock-fs";
import { readJSON, readJSONObject, readJSONArray } from "../src/index.ts";

beforeEach(() => {
  mock({
    "/test": {
      "obj.json": '{"ok":true}',
      "arr.json": '[{"ok":true}]'
    }
  });
});

afterEach(() => {
  restore();
});

test("read object as value", () => {
  return readJSON("/test/obj.json").then((json) => {
    assert.deepEqual(json, { ok: true });
  });
});

test("read object as object", () => {
  return readJSONObject("/test/obj.json").then((json) => {
    assert.deepEqual(json, { ok: true });
  });
});

test("read object as array", async () => {
  return readJSONArray("/test/obj.json").then((json) => {
    assert.deepEqual(json, undefined);
  });
});

test("read array as value", async () => {
  return readJSON("/test/arr.json").then((json) => {
    assert.deepEqual(json, [{ ok: true }]);
  });
});

test("read array as object", async () => {
  return readJSONObject("/test/arr.json").then((json) => {
    assert.deepEqual(json, undefined);
  });
});

test("read array as array", async () => {
  return readJSONArray("/test/arr.json").then((json) => {
    assert.deepEqual(json, [{ ok: true }]);
  });
});

test("read no exists", async () => {
  return readJSON("/test/nope.json").then((json) => {
    assert.equal(json, undefined);
  });
});
