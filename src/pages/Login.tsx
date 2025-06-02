import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", "Oz");
    navigate("/"); // Redirige sin recargar la app
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;