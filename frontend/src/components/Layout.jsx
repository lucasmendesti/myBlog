import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  /*let token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
*/
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      <Navbar />
        <main className="max-w-5xl w-full mx-auto px-4 py-10 flex-grow">
          <Outlet />
        </main>
    </div>
  );
};

export default Layout;
