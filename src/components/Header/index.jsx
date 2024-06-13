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
          <img src="https://i.pinimg.com/564x/90/1a/95/901a954dcd0fb8163288ea6b579594b5.jpg" />
        </div>
        <div className={classnames(styles.title, styles.nonSelect)}>
          <h1>Hi, welcome to my portfolio</h1>
        </div>
        {quote && (
          <p
            className={styles.quote}
          >{`"${quote.content}" - ${quote.author}`}</p>
        )}
      </div>
    </header>
  );
};

export default Header;
