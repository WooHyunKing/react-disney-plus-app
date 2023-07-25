import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3c25469963033856e4e0ed533ee51d00",
    language: "ko-KR",
  },
});

export default instance;
