import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default axios.create({
  baseURL: "https://isellapi.herokuapp.com/api"
});
