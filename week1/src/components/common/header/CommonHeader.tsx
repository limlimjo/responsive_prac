import styles from './CommonHeader.module.scss'

const CommonHeader = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__leftBox}>
            <div className={styles.header__leftBox__logoBox}>
              <img src="src/assets/images/common/logo/image-logo.svg" alt="mainLogo" className={styles.header__leftBox__logoBox__logo} />
              <a href="/" className={styles.header__leftBox__logoBox__title}>NFT Logoplace</a>
            </div>
            <div className={styles.header__leftBox__searchBox}>
              <img src="src/assets/images/common/icon/image-search.svg" alt="search_icon" className={styles.searchIcon} />
              <input type="text" className={styles.searchInput} placeholder='search' />
            </div>
        </div>
        <div className={styles.header__rightBox}>
            <ul className={styles.header__rightBox__nav}>
                <li className={styles.header__rightBox__nav__name}>Home</li>
                <li className={styles.header__rightBox__nav__name}>Brows</li>
                <li className={styles.header__rightBox__nav__name}>Create</li>
                <li className={styles.header__rightBox__nav__name}>MyNFT's</li>
            </ul>
            <a className={styles.header__rightBox__bellIcon}>
              <img src="src/assets/images/common/icon/image-bell.svg" alt="bell_icon" className={styles.bellIcon} />
            </a>
            <a className={styles.header__rightBox__account}>
              <p className={styles.title}>Account</p>
              <img src="src/assets/images/header/image_account.png" alt="account_profile_image" />
            </a>
        </div>
        <div className={styles.header__tabletMenu}>
          <img src="src/assets/images/common/icon/image_menu.svg" alt="" />
        </div>
    </div>
  )
}

export default CommonHeader