import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/login">Login</Link>
      <Link className={styles.link} to="/signup">Sign Up</Link>
    </header>
  );
}

export default Header;
