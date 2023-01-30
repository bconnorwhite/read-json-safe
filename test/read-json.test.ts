import { beforeEach, test, expect, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readJSON, readJSONObject, readJSONArray } from "../source/index.js";

beforeEach(async () => {
  mock({
    "/test": {
      "obj.json": '{"ok":true}',
      "arr.json": '[{"ok":true}]'
    }
  });
});

afterEach(async () => {
  restore();
});

test("read object as value", async () => {
  return readJSON("/test/obj.json").then((json) => {
    expect(json).toEqual({ ok: true });
  });
});

test("read object as object", async () => {
  return readJSONObject("/test/obj.json").then((json) => {
    expect(json).toEqual({ ok: true });
  });
});

test("read object as array", async () => {
  return readJSONArray("/test/obj.json").then((json) => {
    expect(json).toEqual(undefined);
  });
});

test("read array as value", async () => {
  return readJSON("/test/arr.json").then((json) => {
    expect(json).toEqual([{ ok: true }]);
  });
});

test("read array as object", async () => {
  return readJSONObject("/test/arr.json").then((json) => {
    expect(json).toEqual(undefined);
  });
});

test("read array as array", async () => {
  return readJSONArray("/test/arr.json").then((json) => {
    expect(json).toEqual([{ ok: true }]);
  });
});

test("read no exists", async () => {
  return readJSON("/test/nope.json").then((json) => {
    expect(json).toBe(undefined);
  });
});
