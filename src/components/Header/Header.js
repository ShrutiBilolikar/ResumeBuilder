import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Our <span>Resume</span> Builder Makes it Easy!
        </p>
        <p className={styles.heading}>
          <span>Resume</span> that Ensures You stand Out.
          <br />
          <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
