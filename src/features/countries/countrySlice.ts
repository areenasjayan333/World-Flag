import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return res.data;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    displayed: 6,
    regionFilter: "",
  },
  reducers: {
    loadMore(state) {
      state.displayed += 6;
    },
    setFilter(state, action) {
      state.regionFilter = action.payload;
      state.displayed = 6;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { loadMore, setFilter } = countrySlice.actions;
export default countrySlice.reducer;
