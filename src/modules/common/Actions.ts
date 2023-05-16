import {createAction} from "../../initializer/AppUtils";

export const ModuleEvents = {
  LOADING_STARTED: 'LOADING_STARTED',
  LOADING_FINISHED: 'LOADING_FINISHED',
  SET_LOCATION_PERMISSION_MESSAGE: 'SET_LOCATION_PERMISSION_MESSAGE',
  GET_CURRENT_POSITION: 'GET_CURRENT_POSITION',
  GET_COUNTRIES_DATA: 'GET_COUNTRIES_DATA',
  SELECT_TAB_VIEW: 'SELECT_TAB_VIEW'
};

export default {
  loadingStarted: createAction(ModuleEvents.LOADING_STARTED, action => action),
  loadingFinished: createAction(ModuleEvents.LOADING_FINISHED, action => action),

  setLocationPermissionMessage: createAction(ModuleEvents.SET_LOCATION_PERMISSION_MESSAGE, async (message) => {
    return message;
  }),
  getCurrentPosition: createAction(ModuleEvents.GET_CURRENT_POSITION, async (position) => {
    return position;
  }),
  selectTabView: createAction(ModuleEvents.SELECT_TAB_VIEW, async (tab, view) => {
    return {tab, view};
  })
}

