import { confirmationMiddleware, apiMiddleware } from "./time/duck/middlewares";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...[confirmationMiddleware, apiMiddleware])
  )
);

export default store;
