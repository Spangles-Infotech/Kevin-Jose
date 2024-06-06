import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

// Async Thunks for Register and Verify
export const registerUserReq = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.registerRequest(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to register user"
      );
    }
  }
);

export const registerUserVerify = createAsyncThunk(
  "auth/registerVerify",
  async (userData, thunkAPI) => {
    try {
      return await authService.verifyRegisterRequest(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to verify user");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.loginRequest(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to verify user");
    }
  }
);

export const loginUserVerify = createAsyncThunk(
  "auth/loginVerify",
  async (userData, thunkAPI) => {
    try {
      return await authService.verifyLoginRequest(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Failed to verify user");
    }
  }
);

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Redux Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserReq.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = ""; // Clear any previous error messages
      })
      .addCase(registerUserReq.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerUserReq.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "Failed to register user"; // Access error message
        // toast.error(state.message);
      })
      .addCase(registerUserVerify.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = ""; // Clear any previous error messages
      })
      .addCase(registerUserVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload
        localStorage.setItem("customer", action.payload.access_token); // Store token in localStorage
      })
      .addCase(registerUserVerify.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "Failed to verify user"; // Access error message
        toast.error(state.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = ""; // Clear any previous error messages
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; // Update user state as needed
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "Failed to register user"; // Access error message
        toast.error(state.message);
      })

      .addCase(loginUserVerify.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = ""; // Clear any previous error messages
      })
      .addCase(loginUserVerify.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem("customer", action.payload.access_token);
      })
      .addCase(loginUserVerify.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "Failed to register user"; // Access error message
        toast.error(state.message);
      });
  },
});

export default authSlice.reducer;
