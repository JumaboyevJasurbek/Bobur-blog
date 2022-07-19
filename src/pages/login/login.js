import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/logo";
import { AuthContext } from "../../contexts/auth";
import "./login.scss";

const Login = () => {
  const { setToken } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && passwordValue) {
      setLoading(true);
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setToken(data.token);
          navigate("/");
        })
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="container login">
      <Logo />

      <form className="login__form" onSubmit={handleFormSubmit}>
        <h1 className="login__heading">Login</h1>
        <input
          className="login__input"
          ref={emailRef}
          aria-label="Email"
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <input
          className="login__input"
          ref={passwordRef}
          aria-label="Password"
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button className="login__button" disabled={loading} type="submit">
          Submit
        </button>
        <span style={{ color: "red" }}>{error}</span>
        {/* <p>Email: eve.holt@reqres.in</p>
        <p>Password: cityslicka</p> */}
      </form>
    </div>
  );
};

export default Login;
