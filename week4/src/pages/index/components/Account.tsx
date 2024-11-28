import CommonButton from '@/components/common/button/CommonButton';
import styles from './Account.module.scss';
import CommonInput from "@/components/common/input/CommonInput";

const Account = () => {
  return (
    <div className={styles.account}>
        <div className={styles.account__mainImg}>
            <img src="src/assets/images/image_main.png" alt="main image" />
        </div>
        <div className={styles.account__createAccount}>
            <p>Create Account</p>
            <p>Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
            <div className={styles.account__createAccount__accountBox}>
                <div className={styles.inputBox}>
                    <CommonInput
                        imgSrc="src/assets/icons/icon_user.svg"
                        imgAlt="userIcon"
                        placeholder="Username"
                    />
                    <CommonInput
                        imgSrc="src/assets/icons/icon_envelopeSimple.svg"
                        imgAlt="envelopeIcon"
                        placeholder="Email Address"
                    />
                    <CommonInput
                        imgSrc="src/assets/icons/icon_lockKey.svg"
                        imgAlt="lockKeyIcon"
                        placeholder="Password"
                    />
                    <CommonInput
                        imgSrc="src/assets/icons/icon_lockKey.svg"
                        imgAlt="lockKeyIcon"
                        placeholder="Confirm Password"
                    />
                </div>
                <CommonButton
                    label="Create account"
                    size="medium"
                    variant="filled"
                    icon=""
                    style={{ borderRadius: "20px", paddingTop: "12px", paddingBottom: "12px", width: "330px" }}
                    onClick={() => alert("Create account")}
                />
            </div>
        </div>
    </div>
  );
}

export default Account;