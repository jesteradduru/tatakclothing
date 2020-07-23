import { CHANGE_USER_ACTION } from "./components/ProductDetails/AdminConstants";

const initialState = {
  isSignedIn: true,
  accessLevel: "admin",
  user: {
    name: "Jester",
    action: "view",
  },
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_ACTION:
      return Object.assign({}, state, { user: { action: action.payload } });
    default:
      return state;
  }
};
