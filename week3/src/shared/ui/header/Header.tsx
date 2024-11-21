import styles from './Header.module.scss';

const Desktop = () => {

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