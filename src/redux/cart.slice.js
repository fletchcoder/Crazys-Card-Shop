import { createSlice } from "@reduxjs/toolkit";
import { magicAmount } from "@/app/store/magic/[cardpack]/page";
import { yugiAmount } from "@/app/store/yugioh/[cardpack]/page";
import { pokeAmount } from "@/app/store/pokemon/[cardpack]/page";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addMagicCards: (state, action) => {
			const itemExists = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (itemExists) {
				itemExists.quantity += magicAmount;
			} else {
				state.items.push({ ...action.payload, quantity: magicAmount });
			}
		},

		addYugiCards: (state, action) => {
			const cardExists = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (cardExists) {
				cardExists.quantity += yugiAmount;
			} else {
				state.items.push({ ...action.payload, quantity: yugiAmount });
			}
		},

		addPokeCards: (state, action) => {
			const packExists = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (packExists) {
				packExists.quantity += pokeAmount;
			} else {
				state.items.push({ ...action.payload, quantity: pokeAmount });
			}
		},

		removeFromCart: (state, action) => {
			const removeItem = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			state.items = removeItem;
		},

		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const cartReducer = cartSlice.reducer;

export const {
	addMagicCards,
	addYugiCards,
	addPokeCards,
	removeFromCart,
	clearCart,
} = cartSlice.actions;
