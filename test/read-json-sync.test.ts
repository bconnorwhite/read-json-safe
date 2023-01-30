import { beforeEach, test, expect, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readJSONSync, readJSONObjectSync, readJSONArraySync } from "../source/index.js";

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

test("read", async () => {
  expect(readJSONSync("/test/obj.json")).toEqual({ ok: true });
});

test("read object as value", async () => {
  expect(readJSONSync("/test/obj.json")).toEqual({ ok: true });
});

test("read object as object", async () => {
  expect(readJSONObjectSync("/test/obj.json")).toEqual({ ok: true });
});

test("read object as array", async () => {
  expect(readJSONArraySync("/test/obj.json")).toEqual(undefined);
});

test("read array as value", async () => {
  expect(readJSONSync("/test/arr.json")).toEqual([{ ok: true }]);
});

test("read array as object", async () => {
  expect(readJSONObjectSync("/test/arr.json")).toEqual(undefined);
});

test("read array as array", async () => {
  expect(readJSONArraySync("/test/arr.json")).toEqual([{ ok: true }]);
});

test("read no exists", async () => {
  expect(readJSONSync("/test/nope.json")).toBe(undefined);
});
