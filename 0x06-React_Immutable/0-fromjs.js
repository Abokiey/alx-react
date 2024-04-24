#!/usr/bin/noode
const { fromJS } = require('immutable')

import { fromJS } from "./node_modules/immutable/dist/immutable";

export default function getImmutableObject(object) {
  const immutablemap = fromJS(object);

  return immutablemap;
}