export const initialState = {
	basket: [],
	user: null,
};

// Selector - go trough whole basket, for each item add price to amount( amount is set to 0)
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			// cut one from index
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket!`
				);
			}
			return {
				...state,
				basket: newBasket,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};
		default:
			return state;
	}
};

export default reducer;
