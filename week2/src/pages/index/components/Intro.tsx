import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__mainBox}>
        <span className={styles.title}>Browse Marketplace</span>
        <span className={styles.desc}>Browse through more than 50k NFTs on the NFTs on the NFT Marketplace.</span>
      </div>
      <div className={styles.intro__searchBox}>
        <input type="text" placeholder='Search your favorite NFTs' />
        <span></span>
      </div>
    </div>
  );
}

export default Intro;