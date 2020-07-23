import { CHANGE_USER_ACTION } from "./AdminConstants";

export const changeUserAction = (userAction) => ({
  type: CHANGE_USER_ACTION,
  payload: userAction,
});
