import styles from "./Header.module.scss";
import classnames from "classnames";
import { useEffect, useState } from "react";
import {} from "react";
const Header = () => {
  const [quote, setQuote] = useState();
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((data) => data.json())
      .then((item) => setQuote(item));
  }, []); 
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/441910616_2922124204601693_7825640999028613187_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG6tvpNyxnjubGHxs_BQB9iVF9z7EbYH3dUX3PsRtgfd_6dHwf2iNiL0ik0O2ai3Varhzty2qhom2-uF4ikHWat&_nc_ohc=XEdHAcXTlAsQ7kNvgHQMUbC&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYA5tG7rHi23aYZVoQtUG63MmLK-ByOvOj3iscZ1cYrIlw&oe=666622A8" />
        </div>
        <div className={classnames(styles.title, styles.nonSelect)}>
          <h1>Hi, welcome to my portfolio</h1>
        </div>
        {quote && (
          <p className={styles.quote}>{`"${quote.content}" - ${quote.author}`}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
