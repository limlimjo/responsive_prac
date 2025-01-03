import styles from './Card.module.scss';
import { useState, useEffect } from 'react';

const Card = ({ data }) => {

    const [nftInfo, setNftInfo] = useState([]);

    // 화면 크기에 따라 카드 수 변경
    useEffect(() => {
        const handleResize = () => {
            let count;

            // 모바일
            if (window.innerWidth <= 375) {
                count = 5;
            // 태블릿
            } else if (window.innerWidth <= 834) {
                count = 8;
            // PC
            } else {
                count = 12;
            }
            setNftInfo(data.slice(0, count));
        };

        // 초기 사이즈 확인
        handleResize();

        // 사용자가 화면 크기 변경할 때마다 handleResize 함수 실행
        window.addEventListener('resize', handleResize);
        
        // 컴포넌트가 사라질 때 resize 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={styles.cardContainer}>
            {nftInfo.map(({ id, title, nftImgUrl, creatorAccount, creatorProfileUrl, price, highestBid }) => (
                <div key={id} className={styles.wrapper}>
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
            ))}
        </div>
    );
}

export default Card;