import { Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {

    // const isAuthenticated = localStorage.getItem("user");

    return (
        <Routes>
            {/* <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} /> */}
            <Route path="/" element={<Home />}/>
            {/* <Route path="*" element={ <Navigate to="/"  />}/> */}
        </Routes>
    );
};


export default AppRoutes;