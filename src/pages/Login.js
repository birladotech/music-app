import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import coverTioby from "../assets/images/cover.png";
import loading from "../assets/images/loading-plongaye.svg";
import { userAtom } from "../atom/atom";
import Header from "../components/Header/Header";
import { PAYER, plongaye_user_token } from "../constants/constants";
import useGetPayment from "../hooks/get/useGetPayment";
import useLogin from "../hooks/post/useLogin";

let user_token = window.localStorage.getItem(plongaye_user_token);

const schema = yup
  .object({
    email: yup.string().email("Email not valid").required(),
    password: yup.string().required(),
  })
  .required();

export default function Login() {
  const loginMutation = useLogin();
  const [user, setUser] = useRecoilState(userAtom);
  const [errorMsg, setErrorMsg] = useState({});

  const history = useHistory();
  const payment = useGetPayment();
  const {
    register: loginForm,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (payment?.data?.payer == PAYER) {
      history.push("/albums");
    }
    if (user_token && user_token != null) {
      history.push("/payment");
    }
  }, []);

  const onSubmit = (data) => {
    _handleLoginMutation(data.email, data.password);
  };

  // Appel au serveur
  const _handleLoginMutation = (email, password) => {
    let dataInfo = {
      email: email,
      password: password,
    };

    loginMutation.mutate(dataInfo, {
      onSuccess: (data) => {
        console.log("Error : ", data?.data?.error);
        if (data?.data?.error) {
          setErrorMsg(data?.data?.error);
          console.log("Message: ", data?.data);
        } else {
          setUser(data?.data?.data);
          window.localStorage.setItem(
            plongaye_user_token,
            data?.data?.data?.token
          );
          history.push("/payment");
        }
      },
    });
  };

  return (
    <div className="bg-white">
      <Header />

      {/* <!-- Section: Design Block --> */}
      <section className="">
        {/* <!-- Jumbotron --> */}
        <div
          className="py-3 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src={coverTioby} className="img-fluid" alt="Phone image" />
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <h1 className="text-center mt-3">Login</h1>
                  <div className="card-body py-3 px-md-5">
                    <form
                      action=""
                      method="POST"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* <!-- Error alert --> */}
                      {errorMsg?.auth && (
                        <div className="my-2">
                          <p className="alert alert-danger" role="alert">
                            {errorMsg?.auth}
                          </p>
                        </div>
                      )}
                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          name="email"
                          {...loginForm("email")}
                        />
                        <label className="form-label mt-2" htmlFor={"email"}>
                          Email address
                        </label>
                        <p>{errors.email?.message}</p>
                        {errorMsg?.email && (
                          <div className="my-2">
                            <p className="alert alert-danger" role="alert">
                              {errorMsg?.email}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* <!-- Password input --> */}
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          {...loginForm("password")}
                        />
                        <label className="form-label mt-2" htmlFor={"password"}>
                          Password
                        </label>
                        <p>{errors.email?.message}</p>
                        {errorMsg?.password && (
                          <div className="my-2">
                            <p className="alert alert-danger" role="alert">
                              {errorMsg?.password}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* <!-- Submit button --> */}
                      {loginMutation.status !== "loading" ? (
                        <div
                          className={
                            "d-flex align-items-center justify-content-center"
                          }
                        >
                          <button
                            type={"submit"}
                            name="login"
                            style={{ width: "120px", marginRight: "auto" }}
                            className="btn btn-primary btn-block mb-3 "
                          >
                            Login
                          </button>

                          <NavLink exact to={"/register"}>
                            <div
                              className="btn btn-outline-secondary btn-block text-dark mb-3  "
                              style={{ width: "120px" }}
                            >
                              Register
                            </div>
                          </NavLink>
                        </div>
                      ) : (
                        <div className="d-flex align-items-center justify-content-center">
                          <img
                            src={loading}
                            alt="loading"
                            style={{ width: 100, height: 100 }}
                          />
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
  );
}
