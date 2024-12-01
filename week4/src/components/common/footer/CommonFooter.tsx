import CommonButton from '../button/CommonButton';
import styles from './CommonFooter.module.scss';

const CommonFooter = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__menu}>
            <div className={styles.footer__menu__nftmarket}>
                <div className={styles.footer__menu__nftmarket__title}>
                    <img src="src/assets/icons/icon_storeFront.svg" alt="storeFront" />
                    <h5>NFT Marketplace</h5>
                </div>
                <p>NFT marketplace UI created with Anima for Figma.</p>
                <p>Join our community</p>
                <div className={styles.footer__menu__nftmarket__logo}>
                    <img src="src/assets/icons/icon_discordLogo.svg" alt="discord" />
                    <img src="src/assets/icons/icon_youtubeLogo.svg" alt="youtube" />
                    <img src="src/assets/icons/icon_twitterLogo.svg" alt="twitter" />
                    <img src="src/assets/icons/icon_instagramLogo.svg" alt="instagram" />
                </div>
            </div>
            <div className={styles.footer__menu__explore}>
                <h5>Explore</h5>
                <ul>
                    <li>Marketplace</li>
                    <li>Rankings</li>
                    <li>Connect a wallet</li>
                </ul>
            </div>
            <div className={styles.footer__menu__subscribe}>
                <h5>Join Our Weekly Digest</h5>
                <p>Get exclusive promotions & updates straight to your inbox.</p>
                <div className={styles.footer__menu__subscribe__subscribeBtn}>
                    <input type="text" placeholder='Enter your email here' />
                        <CommonButton
                            className={`${styles.showOnPcTablet}`}
                            label="Subscribe"
                            size="medium"
                            variant="filled"
                            icon=""
                            style={{ position: 'absolute',  right: 0 }}
                            onClick={() => alert("Subscribe")}
                        />
                        <CommonButton
                            className={`${styles.showOnMobile}`}
                            label="Subscribe"
                            size="medium"
                            variant="filled"
                            icon="src/assets/icons/icon_envelopeSimple.svg"
                            style={{ width: '100%', height: '46px' }}
                            onClick={() => alert("Subscribe")}
                        />
                </div>
            </div>
        </div>
        <div className={styles.footer__copyright}>
            <span>Ⓒ NFT Market. Use this template freely.</span>
        </div>
    </div>
  );
}

export default CommonFooter;