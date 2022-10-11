import axios from "axios";
import { useMutation, } from "react-query";

const usePayment = () => {
  return useMutation(
    (arrayId) => axios.post("/post/payment", arrayId, )
  )
}

export default usePayment;
