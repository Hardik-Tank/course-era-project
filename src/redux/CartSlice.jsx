import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      state.totalQuantity++;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      state.totalAmount += action.payload.price;
    },

    increaseQuantity(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      item.quantity++;
      item.totalPrice += item.price;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },

    decreaseQuantity(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.quantity--;
        item.totalPrice -= item.price;
      }

      state.totalQuantity--;
      state.totalAmount -= item.price;
    },

    removeItem(state, action) {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.totalPrice;

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
