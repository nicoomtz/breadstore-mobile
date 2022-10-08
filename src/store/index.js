import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  cartReducer,
  categoryReducer,
  ordersReducer,
  productsReducer,
} from "./reducers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
