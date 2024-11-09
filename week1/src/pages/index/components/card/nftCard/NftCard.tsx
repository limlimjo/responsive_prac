import styles from './NftCard.module.scss'

const NftCard = ({
  nftImgUrl,
  like,
  time,
  title,
  creatorProfileUrl,
  creatorAccount,
  currentBid
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__image}>
          <a className={styles.wrapper__image__heartIcon}>
              <img src={like ? "src/assets/images/common/icon/image_heart_fill.svg" : "src/assets/images/common/icon/image_heart.svg"} alt="heart_icon" />
          </a>
          <span className={styles.wrapper__image__clockIcon}>
              <img src="src/assets/images/common/icon/image-clock.svg" alt="clock_icon" />
              <span>{time}</span>
          </span>
          <div className={styles.nftImage}>
              <img src={nftImgUrl} alt="NFT" />
          </div>
      </div>
      <div className={styles.wrapper__desc}>
          <span className={styles.wrapper__desc__title}>{title}</span>
          <div className={styles.wrapper__desc__users}>
              {creatorProfileUrl.map((url, index) => (
                  <img key={index} src={url} alt="" />
              ))}
              <span>{creatorAccount.join(', ')}</span>
          </div>
          <div className={styles.wrapper__desc__bid}>
              <div className={styles.wrapper__desc__bid__currencyContent}>
                  <span className={styles.currencyTitle}>Current Bid:</span>
                  <div className={styles.currencyImage}>
                      <img src="src/assets/images/common/icon/image_currency.svg" alt="" />
                      <span className={styles.currency}>{currentBid} ETH</span>
                  </div>
              </div>
              <button>Place a Bid</button>
          </div>
      </div>
    </div>
  )
}

export default NftCard