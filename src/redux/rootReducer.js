import { combineReducers } from "redux";
import mapInfoReducer from "./mapInfo/reducer";


const rootReducer = combineReducers({
    mapInfo: mapInfoReducer,
});

export default rootReducer;
