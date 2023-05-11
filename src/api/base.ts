import axios from "axios";

const apiConfig = axios.create({
  baseURL: "https://stage.achareh.ir/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
  },
});

export default apiConfig;
