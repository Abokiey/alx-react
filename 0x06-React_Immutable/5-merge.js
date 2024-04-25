import { List, Map } from "immutable";

export default function concat(page1, page2) {
  List(page1).concat(List(page2));
};

export default function merge(page1, page2) {
  return Map(page1).merge(Map(page2));
};
