import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import variables from "./../../utils/variables";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token != null && token != "") {
      navigate("/dashboard");
    }
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const VerifyUser = async () => {
    axios
      .post(`${variables.base_url}/api/verify-user`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res?.data?.success) {
          console.log(res.data);
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("userId", res?.data?.user?._id);
          localStorage.setItem("name", res?.data?.user?.name);
          localStorage.setItem("email", res?.data?.user?.email);

          navigate("/dashboard");
        } else {
          console.log(res?.data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form shadow shadow-lg rounded p-4">
        <h2 className="text-center ">Login</h2>
        <h5 className="text-center mb-4">Login to your account</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className=" form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>

            <div>Reset Password</div>
          </div>
          <Link>
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={VerifyUser}
            >
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
