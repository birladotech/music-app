import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation((user) => axios.post(`/post/login`, user), {
    onSuccess: () => {
      // ✅ refetch the comments list for our blog post
      queryClient.invalidateQueries("login ");
    },
  });
};

export default useLogin;
