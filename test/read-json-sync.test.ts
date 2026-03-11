/* eslint-disable import/no-relative-parent-imports, @typescript-eslint/no-floating-promises */
import assert from "node:assert/strict";
import { beforeEach, test, afterEach } from "node:test";
import mock, { restore } from "mock-fs";
import { readJSONSync, readJSONObjectSync, readJSONArraySync } from "../src/index.ts";

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

test("read", () => {
  assert.deepEqual(readJSONSync("/test/obj.json"), { ok: true });
});

test("read object as value", () => {
  assert.deepEqual(readJSONSync("/test/obj.json"), { ok: true });
});

test("read object as object", () => {
  assert.deepEqual(readJSONObjectSync("/test/obj.json"), { ok: true });
});

test("read object as array", () => {
  assert.deepEqual(readJSONArraySync("/test/obj.json"), undefined);
});

test("read array as value", () => {
  assert.deepEqual(readJSONSync("/test/arr.json"), [{ ok: true }]);
});

test("read array as object", () => {
  assert.deepEqual(readJSONObjectSync("/test/arr.json"), undefined);
});

test("read array as array", () => {
  assert.deepEqual(readJSONArraySync("/test/arr.json"), [{ ok: true }]);
});

test("read no exists", () => {
  assert.equal(readJSONSync("/test/nope.json"), undefined);
});
