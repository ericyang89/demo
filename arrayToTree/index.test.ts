import arrayToTree from "./index";
import { originData, treeData } from "./data";

test("arrayToTee", () => {
  expect(arrayToTree(originData)).toEqual(treeData);
});
