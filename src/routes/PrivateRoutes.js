import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { paymentAtom } from "../atom/atom";
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const payment = useRecoilValue(paymentAtom);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!payment ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
