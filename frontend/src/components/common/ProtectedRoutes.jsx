import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("===>>>>" + token);
    if (token == null || token == "") {
      navigate("/");
    }
  }, []);

  return <Outlet />;
};

export default ProtectedRoutes;
