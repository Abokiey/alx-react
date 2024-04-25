import { List, Map } from "immutable";

export default function concatElements(page1, page2) {
  List(page1).concat(List(page2));
};

export default function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
};
