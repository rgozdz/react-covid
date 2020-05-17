import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const lastUpdateDate = new Date(lastUpdate).toLocaleDateString();

  if (!confirmed) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const active = confirmed.value - recovered.value - deaths.value;
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.confirmed}`}>
        <h2>Confirmed</h2>
        <CountUp
          className={styles.amount}
          start={0}
          end={confirmed.value}
          duration={2.5}
          separator=","
        ></CountUp>
        <br></br>
        <span>Last update: {lastUpdateDate}</span>
      </div>
      <div className={`${styles.card} ${styles.active}`}>
        <h2>Still active</h2>
        <CountUp
          className={styles.amount}
          start={0}
          end={active}
          duration={2.5}
          separator=","
        ></CountUp>
        <br></br>
        <span>Last update: {lastUpdateDate}</span>
      </div>
      <div className={`${styles.card} ${styles.recovered}`}>
        <h2>Recovered</h2>
        <CountUp
          className={styles.amount}
          start={0}
          end={recovered.value}
          duration={2.5}
          separator=","
        ></CountUp>
        <br></br>
        <span>Last update: {lastUpdateDate}</span>
      </div>
      <div className={`${styles.card} ${styles.deaths}`}>
        <h2>Deaths</h2>
        <CountUp
          className={styles.amount}
          start={0}
          end={deaths.value}
          duration={2.5}
          separator=","
        ></CountUp>
        <br></br>
        <span>Last update: {lastUpdateDate}</span>
      </div>
    </div>
  );
};

export default Card;
