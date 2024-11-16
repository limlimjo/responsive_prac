import CommonButton from '../button/CommonButton';
import styles from './CommonFooter.module.scss';

const CommonFooter = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__top}>
            <div className={styles.footer__top__menu1}>
                <div className={styles.footer__top__menu1__title}>
                    {/* <img src="src/assets/icons/icon_storeFront.svg" alt="icon_storeFront" /> */}
                    <span></span>
                    <h5>NFT Marketplace</h5>
                </div>
                <p>NFT marketplace UI created with Anima for Figma.</p>
                <div className={styles.footer__top__menu1__community}>
                    <p>Join our community</p>
                    <div className={styles.footer__top__menu1__community__logo}>
                        <img src="src/assets/icons/icon_discordLogo.svg" alt="discordLogo" />
                        <img src="src/assets/icons/icon_youtubeLogo.svg" alt="youtubeLogo" />
                        <img src="src/assets/icons/icon_twitterLogo.svg" alt="twitterLogo" />
                        <img src="src/assets/icons/icon_instagramLogo.svg" alt="instagramLogo" />
                    </div>
                </div>
            </div>
            <div className={styles.footer__top__menu2}>
                <h5>Explore</h5>
                <ul>
                    <li>Marketplace</li>
                    <li>Rankings</li>
                    <li>Connect a wallet</li>
                </ul>
            </div>
            <div className={styles.footer__top__menu3}>
                <h5>Join Our Weekly Digest</h5>
                <p>Get exclusive promotions & updates straight to your inbox.</p>
                <div className={styles.footer__top__menu3__subscribeBtn}>
                    <input type="text" placeholder='Enter your email here' />
                    <CommonButton
                        label="Subscribe"
                        size="medium"
                        variant="filled"
                        icon=""
                        style={{ position: 'absolute',  right: 0 }}
                        onClick={() => alert("Subscribe")}
                    />
                </div>
                <div className={styles.footer__top__menu3__subscribeMobileBtn}>
                    <input type="text" placeholder='Enter Your Email Address' />
                    <CommonButton
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