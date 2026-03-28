import { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  let user = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
