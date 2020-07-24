const initialState = {
  isSignedIn: true,
  accessLevel: "admin",
  user: {
    name: "Jester",
  },
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
