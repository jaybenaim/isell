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
      const { addresses } = action.payload;
      return Object.assign({}, state, {
        profile: { shippingInfo: { addresses } }
      });
    default:
      return state;
  }
};
export default handleProfile;
