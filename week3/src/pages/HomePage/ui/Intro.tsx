import CommonButton from '@/shared/ui/button/CommonButton';
import styles from './Intro.module.scss';

const tagBtnData = [
    { label: "ANIMATION", onClick: () => alert("ANIMATION") },
    { label: "ILLUSTRATION", onClick: () => alert("ILLUSTRATION") },
    { label: "MOON", onClick: () => alert("MOON") },
    { label: "MOON", onClick: () => alert("MOON") }
];


const Desktop = () => {

};

const Tablet = () => {
    return (
        <>  
            <div className={styles.mainImg}>
                <img src="src/shared/assets/images/image_intro.png" alt="intro image" />
            </div>
            <div className={styles.intro}>
                <div className={styles.intro__nftInfo}>
                    <div className={styles.intro__nftInfo__title}>
                        <p>The Orbitians</p>
                        <p>Minted on Sep 30, 2022</p>
                    </div>
                    <div className={styles.intro__nftInfo__createdBy}>
                        <p>Created By</p>
                        <div className={styles.creator}>
                            <img src="src/shared/assets/images/image_avatar.png" alt="creator image" />
                            <span>Orbitian</span>
                        </div>
                    </div>
                    <div className={styles.intro__nftInfo__description}>
                        <p>Description</p>
                        <p>The Orbitians is a collection of 10,000 unique NFTs on the Solana blockchain,</p>
                        <p>There are all sorts of beings in the NFT universe. The most advanced and friendly of the bunch are Orbitians.</p>
                        <p>They live in a metal space machines, high up in the sky and only have one foot on Earth.<br/>
                        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                        </p>
                    </div>
                    <div className={styles.intro__nftInfo__details}>
                        <p>Details</p>
                        <div className={styles.detailBtn}>
                            <img src="src/shared/assets/icons/icon_globe.svg" alt="globe icon" />
                            <span>View on Etherscan</span>
                        </div>
                        <div className={styles.detailBtn}>
                            <img src="src/shared/assets/icons/icon_globe.svg" alt="globe icon" />
                            <span>View Original</span>
                        </div>
                    </div>
                    <div className={styles.intro__nftInfo__tags}>
                        <p>Tags</p>
                        <div className={styles.tagBtns}>
                            {tagBtnData.map((tagBtn, index) => (
                                <CommonButton
                                    key={index} 
                                    label={tagBtn.label}
                                    size="tag"
                                    variant="tagFilled"
                                    icon=""
                                    onClick={tagBtn.onClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.auction}>
                    <p>Auction ends in:</p>
                    <div className={styles.timer}>
                        <div className={styles.timer__time}>
                            <span className={styles.timer__time__value}>59</span>
                            <span className={styles.timer__time__label}>Hours</span>
                        </div>
                        <span className={styles.timer__time__colon}>:</span>
                        <div className={styles.timer__time}>
                            <span className={styles.timer__time__value}>59</span>
                            <span className={styles.timer__time__label}>Minutes</span>
                        </div>
                        <span className={styles.timer__time__colon}>:</span>
                        <div className={styles.timer__time}>
                            <span className={styles.timer__time__value}>59</span>
                            <span className={styles.timer__time__label}>Seconds</span>
                        </div>
                    </div>
                    <div className={styles.bidBtn}>
                        <CommonButton
                                label="Place Bid"
                                size="medium"
                                variant="filled"
                                icon=""
                                style={{ width: '255px' }}
                                onClick={() => alert("Place Bid")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const Mobile = () => {

    return (
        <>  
            <div className={styles.mainImg}>
                <img src="src/shared/assets/images/image_intro.png" alt="intro image" />
            </div>
            <div className={styles.intro}>
                <div className={styles.intro__nftInfo}>
                    <div className={styles.intro__nftInfo__title}>
                        <p>The Orbitians</p>
                        <p>Minted on Sep 30, 2022</p>
                    </div>
                    <div className={styles.auction}>
                        <p>Auction ends in:</p>
                        <div className={styles.timer}>
                            <div className={styles.timer__time}>
                                <span className={styles.timer__time__value}>59</span>
                                <span className={styles.timer__time__label}>Hours</span>
                            </div>
                            <span className={styles.timer__time__colon}>:</span>
                            <div className={styles.timer__time}>
                                <span className={styles.timer__time__value}>59</span>
                                <span className={styles.timer__time__label}>Minutes</span>
                            </div>
                            <span className={styles.timer__time__colon}>:</span>
                            <div className={styles.timer__time}>
                                <span className={styles.timer__time__value}>59</span>
                                <span className={styles.timer__time__label}>Seconds</span>
                            </div>
                        </div>
                        <div className={styles.bidBtn}>
                            <CommonButton
                                    label="Place Bid"
                                    size="medium"
                                    variant="filled"
                                    icon=""
                                    style={{ width: '255px' }}
                                    onClick={() => alert("Place Bid")}
                            />
                        </div>
                    </div>
                    <div className={styles.intro__nftInfo__createdBy}>
                        <p>Created By</p>
                        <div className={styles.creator}>
                            <img src="src/shared/assets/images/image_avatar.png" alt="creator image" />
                            <span>Orbitian</span>
                        </div>
                    </div>
                    <div className={styles.intro__nftInfo__description}>
                        <p>Description</p>
                        <p>The Orbitians is a collection of 10,000 unique NFTs on the Solana blockchain,</p>
                        <p>There are all sorts of beings in the NFT universe. The most advanced and friendly of the bunch are Orbitians.</p>
                        <p>They live in a metal space machines, high up in the sky and only have one foot on Earth.<br/>
                        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                        </p>
                    </div>
                    <div className={styles.intro__nftInfo__details}>
                        <p>Details</p>
                        <div className={styles.detailBtn}>
                            <img src="src/shared/assets/icons/icon_globe.svg" alt="globe icon" />
                            <span>View on Etherscan</span>
                        </div>
                        <div className={styles.detailBtn}>
                            <img src="src/shared/assets/icons/icon_globe.svg" alt="globe icon" />
                            <span>View Original</span>
                        </div>
                    </div>
                    <div className={styles.intro__nftInfo__tags}>
                        <p>Tags</p>
                        <div className={styles.tagBtns}>
                            {tagBtnData.map((tagBtn, index) => (
                                <CommonButton
                                    key={index} 
                                    label={tagBtn.label}
                                    size="tag"
                                    variant="tagFilled"
                                    icon=""
                                    onClick={tagBtn.onClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Intro = {
    Desktop,
    Tablet,
    Mobile
};