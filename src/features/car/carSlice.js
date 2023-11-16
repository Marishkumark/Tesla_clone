import { createSlice } from "@reduxjs/toolkit";
import carData from "../../data";

const initialState = {
  carData: carData,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

console.log(carSlice);

export default carSlice.reducer;
