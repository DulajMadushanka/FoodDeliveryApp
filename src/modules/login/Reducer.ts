import {Map} from "immutable";
import {ModuleEvents} from "./Actions";
import _ from 'lodash';

const InitialState = Map({
  allPostList: [],
  receivedNewPost: {}
});

export const Reducer = (state = InitialState, action) => {
  const {payload, type} = action;
  switch (type) {
    default:
      return state;
  }
};
