import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PAYER_PAYPAL } from "../constants/constants";
import usePayment from "../hooks/post/usePayment";

// This values are the props in the UI
const amount = "10";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  const history = useHistory();
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const paymentMutation = usePayment();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        // options={{disableFunding: 'credit' }}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const dataPayment = {
              type_payment: PAYER_PAYPAL,
            };
            // const name = details.payer.name.given_name;
            paymentMutation.mutate(dataPayment, {
              onSuccess: () => {
                history.push("/albums");
              },
            });
          });
        }}
        onCancel={(data, actions) => {}}
      />
    </>
  );
};

// export default function App() {
// 	return (
// 		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
//             <PayPalScriptProvider
//                 options={{
//                     "client-id": "test",
//                     components: "buttons",
//                     currency: "USD"
//                 }}
//             >

// 			</PayPalScriptProvider>
// 		</div>
// 	);
// }
export default ButtonWrapper;
