/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import styles from './HeroBanner.module.css';

export interface IHeroBanner {}

const HeroBanner: React.FC<IHeroBanner> = () => {
    const icon = faArrowDownLong;
    return (
    <div className={`row ${styles.herobanner}`}>
        <div className={`col-7 ${styles.herobanner__container}`}>
            <div className={`col-5 ${styles.herobanner__title}`}>
                <p>Hello, </p>
                <p>I'm Oscar Reina</p>
            </div>
            <div className={`col-7 ${styles.herobanner__name}`}>
                <p>A second-year software engineering student who is trying to specialize in cloud architecture.</p>
            </div>
            <div className={`col-1 ${styles.herobanner__icon}`}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            
        </div>
    </div>
  );
};

export default HeroBanner;