import styles from './CommonFooter.module.scss'

const CommonFooter = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__logoBox}>
            <div className={styles.footer__logoBox__mainLogo}>
                <img src="src/assets/images/common/logo/image-logo.svg" alt="mainLogo" className={styles.footer__logoBox__mainLogo__logo} />
                <a href="/" className={styles.footer__logoBox__mainLogo__title}>NFT Logoplace</a>
            </div>
            <div className={styles.footer__logoBox__snsLogo}>
                <img src="src/assets/images/footer/image_instagram.svg" alt="instagramLogo" className={styles.footer__logoBox__snsLogo__logo} />
                <img src="src/assets/images/footer/image_twitter.svg" alt="twitterLogo" className={styles.footer__logoBox__snsLogo__logo} />
                <img src="src/assets/images/footer/image_linkedin.svg" alt="linkedinLogo" className={styles.footer__logoBox__snsLogo__logo} />
                <img src="src/assets/images/footer/image_youtube.svg" alt="youtubeLogo" className={styles.footer__logoBox__snsLogo__logo} />
            </div>
        </div>
        <div className={styles.footer__infoBox}>
            <span className={styles.footer__infoBox__desc}>
                Lorem ipsum dolor sit amet consectetur. laculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.
            </span>
            <ul className={styles.footer__infoBox__nav}>
                <li className={styles.footer__infoBox__nav__mainName}>Explore</li>
                <li className={styles.footer__infoBox__nav__detailName}>Home</li>
                <li className={styles.footer__infoBox__nav__detailName}>Collection</li>
                <li className={styles.footer__infoBox__nav__detailName}>Connect a wallet</li>
                <li className={styles.footer__infoBox__nav__detailName}>Ranking</li>
            </ul>
            <ul className={styles.footer__infoBox__nav}>
                <li className={styles.footer__infoBox__nav__mainName}>Links</li>
                <li className={styles.footer__infoBox__nav__detailName}>Blog</li>
                <li className={styles.footer__infoBox__nav__detailName}>Contact</li>
                <li className={styles.footer__infoBox__nav__detailName}>FAQ's</li>
                <li className={styles.footer__infoBox__nav__detailName}>About us</li>
            </ul>
        </div>
    </div>
  )
}

export default CommonFooter