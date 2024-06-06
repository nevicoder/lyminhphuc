import styles from "./Experiences.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
function Experiences() {
  return (
    <ul className={styles.list}>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2024-now</div>
          <div className={styles.event}>
            <p>- Content writer at 1cm2</p>
            <p>- Launch HSV Store - Headshop based in SG</p>
          </div>
        </div>
      </li>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2023-2024</div>
          <p>- Pharmacist at Pharmacity</p>
        </div>
      </li>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2020-2021</div>
          <div className={styles.event}>
            <p>- Launched High Society Vietnam</p>
            <p>- Graduated from University</p>
          </div>
        </div>
      </li>
      <li>
        <div className={styles.item}>
          <div className={styles.milestone}>2015</div>
          <p>- Studying pharmacy at University</p>
        </div>
      </li>
    </ul>
  );
}

export default Experiences;
