import logo from './../../img/img_1.jpg';
import check from './../../img/check.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className={styles.hi}>
            <div className={styles.container}>
            <div className={styles["hi__row"]}>
                <div className={styles["hi__body"]}>
                <div className={styles["hi__title"]}><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Привет, друг</NavLink></div>
                    <ul className={styles["hi__list"]}>
                        <li><NavLink to="/columns" className={({ isActive }) => (isActive ? styles.active : '')}><img src={check} alt="check" />Columns</NavLink></li>
                        <li><NavLink to="/vertical" className={({ isActive }) => (isActive ? styles.active : '')}><img src={check} alt="check" />Vertical</NavLink></li>
                    </ul>
                </div>
                <div className={styles["hi__image"]}>
                    <img src={logo} alt="img_1" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;