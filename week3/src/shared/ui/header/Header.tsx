import CommonButton from '../button/CommonButton';
import styles from './Header.module.scss';

const Header = ({ isDesktop, isTablet, isMobile }) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__leftBox}>
                <img src="src/shared/assets/icons/icon_storeFront.svg" alt="icon_storeFront" />
                <span>NFT Marketplace</span>
            </div>
            {isMobile || isTablet ? (
                <img src="src/shared/assets/icons/icon_burgurMenu.svg" alt="icon_burgerMenu" />
            ) : (
                <div className={styles.header__rightBox}>
                    <ul className={styles.header__rightBox__nav}>
                        <li>Marketplace</li>
                        <li>Rankings</li>
                        <li>Connect a wallet</li>
                    </ul>
                    <CommonButton
                        label="Sign Up"
                        size="xSmall"
                        variant="filled"
                        icon="src/shared/assets/icons/icon_user.svg"
                        onClick={() => alert("Sign Up")}
                    />
                </div>
            )}
        </div>
    );
};

export const Desktop = () => <Header isDesktop={true} isTablet={false} isMobile={false} />;
export const Tablet = () => <Header isDesktop={false} isTablet={true} isMobile={false} />;
export const Mobile = () => <Header isDesktop={false} isTablet={false} isMobile={true} />;

export const Headers = {
    Desktop,
    Tablet,
    Mobile
};