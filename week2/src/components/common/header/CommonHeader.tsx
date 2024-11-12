import styles from './CommonHeader.module.scss';
import CommonButton from '@/components/common/button/CommonButton';
import $icon_user from "@/assets/icons/icon_user.svg";

const CommonHeader = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__leftBox}>
            <img src="src/assets/icons/icon_storeFront.svg" alt="icon_storeFront" />
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
                icon={$icon_user}
                onClick={() => alert("Sign Up")}
            />
        </div>
    </div>
  );
}

export default CommonHeader;