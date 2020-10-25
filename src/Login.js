import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginData } from "./loginServer";
import { isError, validateLogin } from "./utilities/validation";

function Login() {
  const history = useHistory();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  const [error, setError] = useState(null);

  const handleChange = e => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [fieldName]: value });
  };

  const handleBlur = e => {
    const fieldName = e.target.name;

    setTouched({ ...touched, [fieldName]: true });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isError(errors)) {
      return;
    }

    setError(null);
    if (
      loginData.username === details.email &&
      loginData.password === details.password
    ) {
      history.push("/dashboard");
    } else {
      setError("Username or Password did not match");
    }
  };

  const errors = validateLogin(details);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username"
            value={details.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={details.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <div>
          <button disabled={isError(errors)}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
