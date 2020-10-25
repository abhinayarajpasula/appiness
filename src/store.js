import { createStore } from "redux";

import dashboardReducer from "./reducers";
import middleware from "./middleware";

const store = createStore(dashboardReducer, middleware);

export default store;
