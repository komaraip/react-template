import React from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className={`container ${styles.auth}`} style={{ minHeight: "82vh" }}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" />
      </div>

      <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
              <Link to="/reset">Forgot Password?</Link>
            </div>
          </form>

          <span className={styles.register}>
            <p>
              Don't have an account?
              <Link to="/register"> Register</Link>
            </p>          
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;