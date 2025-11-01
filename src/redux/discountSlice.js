import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coupon: null,
  discountPercent: 0,
  error: null,
};

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  FREESHIP: 5,
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    applyCoupon(state, action) {
      const code = action.payload.toUpperCase();
      if (coupons[code]) {
        state.coupon = code;
        state.discountPercent = coupons[code];
        state.error = null;
      } else {
        state.coupon = null;
        state.discountPercent = 0;
        state.error = 'Invalid coupon code';
      }
    },
    clearCoupon(state) {
      state.coupon = null;
      state.discountPercent = 0;
      state.error = null;
    },
  },
});

export const { applyCoupon, clearCoupon } = discountSlice.actions;
export default discountSlice.reducer;
