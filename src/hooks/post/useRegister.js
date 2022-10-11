import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation((user) => axios.post(`/post/register`, user), {
    onSuccess: () => {
      // ✅ refetch the comments list for our blog post
      queryClient.invalidateQueries("login ");
    },
  });
};

export default useRegister;
