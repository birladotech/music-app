import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../atom/atom";
import { plongaye_user_token } from "../constants/constants";
import Albums from "../pages/Albums";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Payment from "../pages/Payment";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoutes";

export default function Routes() {
  let user = useRecoilValue(userAtom);
  if (user != null && user.token) {
    window.localStorage.setItem(plongaye_user_token, user.token);
  }
  let user_token = window.localStorage.getItem(plongaye_user_token);

  (function () {
    if (user_token && user_token != null) {
      let host = "https://api.tiobydsb.com";
      axios.defaults.baseURL = host;
      axios.defaults.headers.common["Authorization"] = `Bearer ${user_token}`;
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    } else {
      let host = "https://api.tiobydsb.com";
      axios.defaults.baseURL = host;
      axios.defaults.headers.common["Authorization"] = null;
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    }
  })();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/payment" component={Payment} />
        <PrivateRoute exact path="/albums" component={Albums} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
