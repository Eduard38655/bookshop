import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersData from "../../../Backend/UsersData.js";
import styles from "../../Styles/LoginStyles/LoginStyles.module.css";
function Login(params) {
  const [UserName, SetUsername] = useState("");
  const [Password, SetPassword] = useState("");
  const [isValid, SetisValid] = useState(true);
  const [Users, SetUsers] = useState(UsersData);
  const navigate = useNavigate();
  function ValidateUser(e) {
    e.preventDefault();
    const Filter = Users.filter(
      (e) => e.User === UserName && e.password === Password
    );

    localStorage.setItem("UserData", JSON.stringify(Filter));

    if (Filter.length > 0) {
      SetisValid(true);
      navigate("/");
    } else {
      SetisValid(false);
    }
  }
  return (
    <form method="get" className={styles.LoginForm}>
      <div className={styles.InputContainer}>
        <h2>
          Welcome to ChronoVault <br />{" "}
          <span>Access the world of exclusive timepieces</span>
        </h2>

        <div className={styles.DivInputs}>
          <div>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              onChange={(e) => {
                SetUsername(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            />
          </div>

          <p>
            <a href="#">Forgot password?</a> |{" "}
            <a href="#">Don't have an account</a>
          </p>

          {isValid ? (
            <>
              <button onClick={ValidateUser}>Login</button>
            </>
          ) : (
            "Sigh in"
          )}
        </div>
      </div>
    </form>
  );
}
export default Login;
