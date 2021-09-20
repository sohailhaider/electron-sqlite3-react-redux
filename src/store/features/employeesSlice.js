import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const remote = window.require("@electron/remote");
const db = remote.getGlobal("db");

// First, create the thunk
export const fetchAllEmployees = createAsyncThunk(
  "users/fetchAllEmployees",
  async (thunkAPI) => {
    const response = await db.employee.getAllEmployees();
    return response;
  }
);

export const createNewEmployee = createAsyncThunk(
  "users/createNewEmployee",
  async (data, { dispatch }) => {
    db.employee.createEmployee(data);
    dispatch(fetchAllEmployees());
  }
);

export const deleteEmployee = createAsyncThunk(
  "users/deleteEmployee",
  async (id, { dispatch }) => {
    db.employee.deleteEmployee(id, (err, results) => {
      console.log(err, results);
    });
    dispatch(fetchAllEmployees());
  }
);

export const updateEmployee = createAsyncThunk(
  "users/updateEmployee",
  async (data, { dispatch }) => {
    db.employee.updateEmployee(data.id, data);
    dispatch(fetchAllEmployees());
  }
);
export const counterSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {},
  extraReducers: {
    [fetchAllEmployees.fulfilled]: (state, action) => {
      state.employees = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
