import CommonButton from '../button/CommonButton';
import styles from './Header.module.scss';

const Desktop = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__leftBox}>
                <img src="src/shared/assets/icons/icon_storeFront.svg" alt="icon_storeFront" />
                <span>NFT Marketplace</span>
            </div>
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
        </div>
    );
};

const Tablet = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__leftBox}>
                <img src="src/shared/assets/icons/icon_storeFront.svg" alt="icon_storeFront" />
                <span>NFT Marketplace</span>
            </div>
            <img src="src/shared/assets/icons/icon_burgurMenu.svg" alt="icon_burgerMenu" />
        </div>
    );
};

const Mobile = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__leftBox}>
                <img src="src/shared/assets/icons/icon_storeFront.svg" alt="icon_storeFront" />
                <span>NFT Marketplace</span>
            </div>
            <img src="src/shared/assets/icons/icon_burgurMenu.svg" alt="icon_burgerMenu" />
        </div>
    );
};

export const Header = {
    Desktop,
    Tablet,
    Mobile
};