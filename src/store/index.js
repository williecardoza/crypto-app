import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import app from "./app";
import coin from "./coin";
import coinList from "./home";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  app,
  coin,
  coinList,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
