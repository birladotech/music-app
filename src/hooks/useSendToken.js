import axios from "axios";
import { useMutation } from "react-query";
export const useSendToken = () => {
  return useMutation((user) => axios.post("/post/sendToken", user));
};

