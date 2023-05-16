import React from 'react';
import ModuleSet from './AppModules';
import _ from 'lodash';

const reducerModule = {
  login: require(`../../modules/login/Reducer`),
  common: require(`../../modules/common/Reducer`)
};

const Reducers = _(ModuleSet)
  .keyBy(module => module)
  .mapValues(module => {
    return reducerModule[module];
  })
  .mapValues(module => module.Reducer)
  .value();

export default Reducers;
