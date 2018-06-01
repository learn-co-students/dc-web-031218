import { combineReducers } from "redux";
import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING
} from "./actions/types";

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_PAINTING:
      // filter is non-destructive
      return state.filter(painting => painting.id !== action.id);
    // something
    // respond to some action by removing a painting
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    case FETCH_PAINTINGS:
      return action.payload[0].id;
    default:
      return state;
  }
};

// { galleryFilter = "All galleries" || "National Gallery of Art, Washington D.C." }
const galleryFilterReducer = (state = "All Museums", action) => {
  switch (action.type) {
    // { type: "UPDATE_FILTER", filter: "National ...." }
    case "UPDATE_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer,
  galleryFilter: galleryFilterReducer
});

// const rootReducer = (state = {}, action) => {
//   let newState = {
//     paintings: paintingsReducer(state.paintings, action),
//     activePaintingId: activePaintingIdReducer(state.activePaintingId, action)
//     galleryFilter: galleryFilterReducer(),
//   };
//   return newState;
// };

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
