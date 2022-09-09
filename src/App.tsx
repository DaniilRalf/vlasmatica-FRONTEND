import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Client from "./pages/client/Client";
import Landing from "./pages/landing/Landing";
import { CheckAuthSevice } from "./services/CheckAuthService";


function App() {

  // NAVIGATION--------------------------------------------------
    const navigate = useNavigate();
    useEffect(() => {
      async function getToken() {
        let token = await CheckAuthSevice()
        if (token){
          navigate("/main");
        }
      };
      getToken();
    }, []);
  // NAVIGATION--------------------------------------------------
  
  return (
    <div>
      <Routes>
            <Route path="/main" element={<Landing />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/client" element={<Client />}></Route>
        </Routes>
    </div>
  );
}

export default App;
