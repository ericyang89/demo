import treeToArray from "./treeToArray";
import { originData, treeData } from "./data";

test("arrayToTee", () => {
  expect(
    treeToArray(treeData).sort((a, b) => (a.name > b.name ? 1 : -1))
  ).toEqual(originData.sort((a, b) => (a.name > b.name ? 1 : -1)));
});
