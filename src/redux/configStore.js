import { combineReducers, createStore } from "redux";

import { gioHangStore } from "./gioHangStore";
import { BTGameReducer } from "./BTGameReducer";
import { BTQuanLiNDReducer } from "./BTQuanLiNDReducer";
// reducer: Khai báo state, gán lại giá trị cho state và render lại UI 
const rootReducer = combineReducers({
    // chứa các reducer
    // chứa các state của ứng dụng
    gioHangStore:gioHangStore,
    BTGameReducer,
    BTQuanLiNDReducer
    

});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())