import {Actions} from "../../initializer/modules/Actions";
import {ModuleEvents} from "./Actions";
import {navigate} from "../../initializer/repositories/Repository";

export default {
  [ModuleEvents.GET_CURRENT_POSITION]: ({dispatch, payload, appState}) => {
    if (payload && payload.latitude && payload.longitude) {
      const params = {
        lat: payload.latitude,
        lng: payload.longitude,
        types: [
          "beauty_salon",
          "hair_care",
          //"spa"
        ],
        radius: 10000,
        limit: 30,
        from: 0
      };
      dispatch(Actions.home.fetchNearBySalon(params));
      dispatch(Actions.home.fetchNearByFeeds(params));
    }
  },
  [ModuleEvents.SELECT_TAB_VIEW]: ({dispatch, payload, appState}) => {
    const { view } = payload
    navigate(view, {});
  },
};
