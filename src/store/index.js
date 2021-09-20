import { configureStore } from "@reduxjs/toolkit";
import employeesSliceReducer from "./features/employeesSlice";

export default configureStore({
  reducer: { employees: employeesSliceReducer },
});
