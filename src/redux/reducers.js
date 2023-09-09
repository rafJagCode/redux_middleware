import { combineReducers } from "redux";
import actorsReducer from "./actors/duck";
import moviesReducer from "./movies/duck";
import timeReducer from "./time/duck";

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducer,
  time: timeReducer,
});

export default rootReducer;
