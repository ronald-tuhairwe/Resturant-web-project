import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Adminpage from "./component/adminPage";
import CustomerPage from "./component/customerPage";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [
    { username: "ronnie", password: "1234" },
    { username: "admin", password: "1234" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate("/men");
    }
  };

  const loggedInUser = localStorage.getItem("authenticated");

  if (!authenticated) {
    return (
      <div
        style={{
          background: "transparent url('/images/login.jpg') ",
        }}
      >
        <div class="container ms-2 p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="Username"
              placeholder="UserName.."
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password.."
              onChange={(e) => setpassword(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>{" "}
        </div>

        <img class="img-fluid" src={`/images/jav3.jpg`} alt="..." />
      </div>
    );
  } else {
    if (username === "admin") {
      return <Adminpage />;
    } else {
      return <CustomerPage />;
    }
  }
};

export default Login;
