import styles from './Header.module.css';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className={`row ${styles.header}`}>
      
      <div className={`col-3 ${styles.header__logo}`}>
        ORG.
      </div>

      <div className={'col-9'}>
        <ul className={styles.header__menu}>
          <li className={styles.header__menu_item}>
            <a href='#'>Work</a>
          </li>
          <li className={styles.header__menu_item}>
            <a href='#'>About</a>
          </li>
          <li className={styles.header__menu_item}>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    
    </header>
  );
};

export default Header;