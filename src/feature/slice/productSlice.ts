import { IProducts } from "@/interface";
import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { CreateProduct, getAllProducts } from "../services";
import { RootState } from "../store/store";


interface IProductState {
  status: "idle" | "loading" | "completed" | "failed";
  error: string | null;
  inputValue:string;
  blogId:string
}



const productAdapter = createEntityAdapter<IProducts>({
  selectId: (product) => product._id,
});

const initialState: IProductState & EntityState<IProducts> =
  productAdapter.getInitialState({
    status: "idle",
    error: null,
    inputValue:"",
    blogId:""
  });

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);
export const createApiProduct = createAsyncThunk(
  "/products/createApiProduct",
  async(initialProduct:IProducts) => {
   const response = await CreateProduct(initialProduct)
   return response.data
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setInputValue:(state,action)=>{
        state.inputValue= action.payload
    },
    setProductId:(state,action)=>{
        state.blogId=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "completed";
        productAdapter.setAll(state, action.payload);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "is Accourded ";
      })
      .addCase(createApiProduct.fulfilled, (state, _) => {
        state.status = "completed";
        productAdapter.addOne;
      })
  },
});

export const { selectAll: displayAllProducts, selectById: displaySingleProduct } =
  productAdapter.getSelectors((state: RootState) => state.products);
export const {setInputValue,setProductId}= productSlice.actions
export default productSlice.reducer;
