import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`} style={{ minHeight: "82vh" }}>
      <div className={styles.img}>
        <img src={resetImg} alt="Login" width="400" />
      </div>

      <br/>

      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form>
            <input type="text" placeholder="example@gmail.com" required />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
