import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  fetchAllProducts,
} from "@/feature/slice/productSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(fetchAllProducts());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
