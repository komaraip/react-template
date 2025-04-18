import React from "react";
import styles from "./Footer.module.scss";

const date = new Date();

export const year = date.getFullYear();

const App = () => {
  return <div className={styles.footer}>&copy; {year} All rights reserved</div>; 
};

export default App;