import axios from "axios";

const instance = axios.create({
  // The API(cloud function) URL.
  baseURL: "https://us-central1-clone-a030c.cloudfunctions.net/api",
  // "http://localhost:5001/clone-a030c/us-central1/api",
});

export default instance;
