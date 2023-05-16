import {Map} from "immutable";
import {ModuleEvents} from "./Actions";

const InitialState = Map({
    loadingAction: { loading: false, action: {}, meta: {} },
    permissionMessage: {PERMISSION_DENIED: false, message: ''},
    currentPosition: {latitude: 6.885416, longitude: 79.876924},
    countries: [],
    country: {},
    selectedBottomTab: "HOME"
});

export const Reducer = (state = InitialState, action) => {
    const {meta, payload, type} = action;
    switch (type) {
        case ModuleEvents.LOADING_STARTED: {
            if (payload.meta?.blocking) {
                return state.set('loadingAction', {loading: true, action: payload, meta: {blocking: true}});
            } else {
                return state.set('loadingAction', {loading: true, action: payload, meta: {blocking: false}});
            }
        }
        case ModuleEvents.LOADING_FINISHED: {
            return state.set('loadingAction', { loading: false, action: payload, meta: {blocking: false}});
        }
        case ModuleEvents.SET_LOCATION_PERMISSION_MESSAGE: {
            return state.set('permissionMessage', payload);
        }
        case ModuleEvents.SELECT_TAB_VIEW: {
            const { tab } = payload;
            return state.set('selectedBottomTab', tab);
        }
        case ModuleEvents.GET_CURRENT_POSITION: {
            return state.set('currentPosition', payload);
        }
        case ModuleEvents.GET_COUNTRIES_DATA: {
            return state.set('countries', payload.countries);
        }
        default: return state;
    }
    return state;
};
