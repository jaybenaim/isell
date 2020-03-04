import { GET_PROFILE } from "../actionTypes";

const handleProfile = (
  state = {
    profile: { shippingInfo: [] }
  },
  action
) => {
  switch (action.type) {
    case GET_PROFILE:
      console.log(action.payload);
      return Object.assign({}, state, {
        profile: { shippingInfo: action.payload }
      });
    default:
      return state;
  }
};
export default handleProfile;
