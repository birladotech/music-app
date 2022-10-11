import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "./App.css";
import Routes from "./routes/Routes";

const queryClient = new QueryClient();

function App() {
  const initialOptions = {
    // disableFunding: 'credit',
    "client-id": "Ac-E7a0XoKGuj9jguq6_VrNmsoH5wcV8j2TM_xY1_-ZQctInk3TiwZTZlq3kBgZcGSeXSNFDYiA6b591",
    currency: "USD",
    intent: "capture",
    // "data-client-token":
    //   "EBzBsXmU4tfOQ86ZQgodxAbEzuDcZ9YioTJSNq0mIO1xikXruCsoTIvJvwMiB443NSREaa44isFvJIMx",
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <PayPalScriptProvider options={initialOptions} deferLoading={true}>
            <Routes />
          </PayPalScriptProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
