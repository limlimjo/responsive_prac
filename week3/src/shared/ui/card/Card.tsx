import styles from './Card.module.scss';

const Card = ({ item }) => {
    const { title, nftImgUrl, creatorAccount, creatorProfileUrl, price, highestBid } = item;
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__image}>
                <img src={nftImgUrl} alt="nft_image" />
            </div>
            <div className={styles.wrapper__desc}>
                <div className={styles.info}>
                    <span className={styles.title}>{title}</span>
                    <div className={styles.users}>
                        <img src={creatorProfileUrl} alt="creatorProfile_image" />
                        <span>{creatorAccount}</span>
                    </div>
                </div>
                <div className={styles.bid}>
                    <div className={styles.bid__priceCont}>
                        <span className={styles.title}>Price</span>
                        <span className={styles.price}>{price} ETH</span>
                    </div>
                    <div className={styles.bid__highestBidCont}>
                        <span className={styles.title}>Highest Bid</span>
                        <span className={styles.price}>{highestBid} wETH</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;