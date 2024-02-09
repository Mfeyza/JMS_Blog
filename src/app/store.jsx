// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/authSlice";


//  const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store
import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
// import storage from "redux-persist/lib/storage" //? local storage
import storage from "redux-persist/lib/storage/session" //? session storage
import blogsReducer from '../features/blogsSlice'
import categoriesReducer from '../features/categoriesSlice'

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


 const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blogs:blogsReducer,
    categories:categoriesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export default store
