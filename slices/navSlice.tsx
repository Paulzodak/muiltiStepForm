import { createSlice } from "@reduxjs/toolkit";
interface nav {
  navItems: [];
}
const initialState = {
  navItems: [
    {
      id: 0,
      name: "1",
      active: true,
    },
    {
      id: 1,
      name: "2",
      active: false,
    },
    {
      id: 2,
      name: "3",
      active: false,
    },
    {
      id: 3,
      name: "4",
      active: false,
    },
  ],
};
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    set: () => {},
  },
});
export const { set } = navSlice.actions;
export default navSlice.reducer;
