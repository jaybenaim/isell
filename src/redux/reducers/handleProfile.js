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
      const { addresses, profileId } = action.payload;
      return Object.assign({}, state, {
        profile: { shippingInfo: { addresses }, id: profileId }
      });
    default:
      return state;
  }
};
export default handleProfile;
