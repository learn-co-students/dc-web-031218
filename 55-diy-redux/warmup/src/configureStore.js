import { createStore } from "redux";
import rootReducer from "./reducers";

const configureStore = () => {
  // right now there's not too much additional set up we are doing
  // but there could be in the future
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
export default configureStore;
