import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/fullclone-74a4e/us-central1/api",
	// api cloud function url
});

export default instance;
