import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles["footer__row"]}>
                    <div className={styles["footer__text"]}>footer 2024</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;