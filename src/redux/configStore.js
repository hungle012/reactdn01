import { combineReducers, createStore } from "redux";

import { gioHangStore } from "./gioHangStore";
// reducer: Khai báo state, gán lại giá trị cho state và render lại UI 
const rootReducer = combineReducers({

    gioHangStore:gioHangStore
    // chứa các reducer
    // chứa các state của ứng dụng

});

export const store = createStore(rootReducer)