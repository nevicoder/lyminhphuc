import styles from "./Bio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faUser,
  faBriefcase,
  faCode,
  faLanguage,
  faLocation,
  faLocationPinLock,
  faMapLocation,
  faLocationDot,
  faPenToSquare,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const mipu = import.meta.env.MIPU;
function Bio() {
  return (
    <>
      {mipu}
      <ul className={styles.list}>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <p>Ly Minh Phuc</p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faCakeCandles} />
            <p>15/11/1996</p>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faBriefcase} />
            <div>
              <p>Content Creator</p>
              <p>Business Owner</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faPenToSquare} />
            <div>
              <p className={styles.icons}>
                <FontAwesomeIcon icon={faNodeJs} />
                <FontAwesomeIcon icon={faPhotoVideo} />
                <FontAwesomeIcon icon={faLanguage} />
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
            <p>Ho Chi Minh city</p>
          </div>
        </li>
        <li></li>
      </ul>
      <div className={styles.bio}>
        I'm a boy who is always curious about everything in life. I dedicate my
        life to the community by sharing my knowledge and my POV around many
        topics like technology, psychedelics, spirituality...
        <br />
        <br />
        Currently working as as part-time content creator for 1cm2 magazine, as
        well as running my own small business.
        <br />
        <br />
        Contact me if you wanna work together, want to share an idea or just
        want to gossip sometime :D
      </div>
    </>
  );
}

export default Bio;
