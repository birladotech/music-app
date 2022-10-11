import axios from "axios";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { paymentAtom } from "../../atom/atom";
import { plongaye_payement } from "../../constants/constants";

export const getPayment = async () => {
  const { data } = await axios.post("/post/getPayment");
  return data;
};

export default function useGetPayment() {
  const setPayment = useSetRecoilState(paymentAtom);
  return useQuery("payment", getPayment, {
    onSuccess: (data) => {
      setPayment(data?.data?.payer);
      window.localStorage.setItem(plongaye_payement, data?.data?.payer);
    },
  });
}
