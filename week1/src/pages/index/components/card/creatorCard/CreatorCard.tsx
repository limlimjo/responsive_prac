import styles from './CreatorCard.module.scss'

const CreatorCard = ({
    rank,
    creatorProfileUrl,
    creator,
    creatorAccount,
    itemCount
}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.wrapper__rank}>{rank}</div>
        <div className={styles.wrapper__desc}>
            <img src={creatorProfileUrl} alt="image_creator" />
            <span className={styles.name}>{creator}</span>
            <span className={styles.account}>{creatorAccount}</span>
            <span className={styles.items}>{itemCount} items</span>
        </div>
    </div>
  )
}

export default CreatorCard