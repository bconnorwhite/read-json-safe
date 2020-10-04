import { readFile, readFileSync } from "read-file-safe";
import { parseJSONValue, parseJSONObject, parseJSONArray, JSONValue, JSONObject, JSONArray } from "parse-json-object";

export async function readJSON(path: string) {
  return readFile(path).then((text) => parseJSONValue(text));
}

export function readJSONSync(path: string) {
  const text = readFileSync(path);
  return parseJSONValue(text);
}

export async function readJSONObject(path: string) {
  return readFile(path).then((text) => parseJSONObject(text));
}

export function readJSONObjectSync(path: string) {
  const text = readFileSync(path);
  return parseJSONObject(text);
}

export async function readJSONArray(path: string) {
  return readFile(path).then((text) => parseJSONArray(text));
}

export function readJSONArraySync(path: string) {
  const text = readFileSync(path);
  return parseJSONArray(text);
}

export {
  JSONObject,
  JSONValue,
  JSONArray
}
