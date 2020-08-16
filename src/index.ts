import { readFile, readFileSync } from "read-file-safe";
import parse, { JSONObject } from "parse-json-object";

export async function readJSONFile(path: string) {
  return readFile(path).then((text) => parse(text));
}

export function readJSONFileSync(path: string) {
  const text = readFileSync(path);
  return parse(text);
}

export {
  JSONObject
}
