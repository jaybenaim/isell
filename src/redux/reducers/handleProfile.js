import { GET_PROFILE } from "../actionTypes";

const handleProfile = (
  state = {
    profile: { shippingInfo: [] }
  },
  action
) => {
  switch (action.type) {
    case GET_PROFILE:
      const { profile } = action.payload;
      return Object.assign({}, state, {
        profile
      });
    default:
      return state;
  }
};
export default handleProfile;
