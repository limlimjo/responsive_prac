import CommonHeader from '@/components/common/header/CommonHeader'
import styles from './styles/index.module.scss'
import CommonFooter from '@/components/common/footer/CommonFooter'

import { nftData, creatorData } from '../../data/dummyData';
import { useEffect, useState } from 'react';
import NftCard from './components/card/nftCard/NftCard';
import CreatorCard from './components/card/creatorCard/CreatorCard';

const index = () => {

    const [nftInfo, setNftInfo] = useState([]);
    const [creatorInfo, setCreatorInfo] = useState([]);
    const [exploreInfo, setExploreInfo] = useState([]);
    const [nftInfoVisible, setNftInfoVisible] = useState(5);
    const [creatorInfoVisible, setCreatorInfoVisible] = useState(7);
    const [exploreInfoVisible, setExploreInfoVisible] = useState(10);
  
    useEffect(() => {
        setNftInfo(nftData.slice(0, 5));
        setCreatorInfo(creatorData);
        setExploreInfo(nftData.slice(0, 10));
    }, []);

    // 화면 크기에 따라 카드 수 변경
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 375) {
                setNftInfoVisible(2);
                setCreatorInfoVisible(4);
                setExploreInfoVisible(3);
            } else if (window.innerWidth <= 1024) {
                setNftInfoVisible(3);
                setCreatorInfoVisible(5);
                setExploreInfoVisible(6);
            } else {
                setNftInfoVisible(5);
                setCreatorInfoVisible(7);
                setExploreInfoVisible(10);
            }
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

    const [activeCategory, setActiveCategory] = useState("All categories");

    const handleBtnClick = (category) => {
        setActiveCategory(category);
    };

    // 선택된 카테고리에 따른 데이터 필터링
    const filteredData = 
        activeCategory === "All categories"
            ? exploreInfo
            : exploreInfo.filter((item) => item.category === activeCategory);

    return (
        <div className={styles.page}>
            {/* 공통 헤더 UI 부분 */}
            <CommonHeader/>
            <div className={styles.page__contents}>
                {/* NFTs Intro UI 부분 START */}
                <div className={styles.page__contents__introBox}>
                    <img src="src/assets/images/intro/image_intro.png" alt="" />
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper__left}>
                            <span className={styles.wrapper__left__title}>
                                Explore Unique Digital Art And<br/>
                                Collectibles
                            </span>
                            <span className={styles.wrapper__left__desc}>
                                Lorem ipsum dolor sit amet consectetur. laculis vestibulum purus<br/>
                                facilisi ultrices sed faucibus proin cum ut. Eu dictum nisi facilisis non<br/>
                                habitant senectus eget sollicitudin.
                            </span>
                            <div className={styles.wrapper__left__btn}>
                                <button className={styles.discoverBtn}>
                                    <span>Discover now</span>
                                    <img src="src/assets/images/common/icon/image_arrowRight.svg" alt="" />
                                </button>
                                <button className={styles.createBtn}>
                                    <img src="src/assets/images/common/icon/image_diamond.svg" alt="" />
                                    <span>Create your own</span>
                                </button>
                            </div>
                        </div>
                        <div className={styles.wrapper__right}>
                            <div className={styles.wrapper__right__salesBox}>
                                <img src="src/assets/images/common/icon/image_totalSales.svg" alt="" />
                                <span>160K</span>
                                <span>Total sales</span>
                            </div>
                            <div className={styles.wrapper__right__usersBox}>
                                <div className={styles.leftUsersBox}>
                                    <img src="src/assets/images/intro/image_userProfile1.png" alt="" />
                                    <img src="src/assets/images/intro/image_userProfile2.png" alt="" />
                                    <img src="src/assets/images/intro/image_userProfile3.png" alt="" />
                                </div>
                                <div className={styles.rightUsersBox}>
                                    <span>12K</span>
                                    <span>Active users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.page__contents__introBoxBtn}>
                    <button className={styles.discoverBtn}>
                        <span>Discover now</span>
                        <img src="src/assets/images/common/icon/image_arrowRight.svg" alt="" />
                    </button>
                    <button className={styles.createBtn}>
                        <img src="src/assets/images/common/icon/image_diamond_purple.svg" alt="" />
                        <span>Create your own</span>
                    </button>
                </div>
                {/* Featured NTFS UI 부분 */}
                <div className={styles.page__contents__featuredBox}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.titleWrapper__title}>Featured NFTs</span>
                        <span className={styles.titleWrapper__next}>
                            <img src="src/assets/images/common/icon/image_left.svg" alt="" />
                            <img src="src/assets/images/common/icon/image_right.svg" alt="" />
                        </span>
                        <span className={styles.titleWrapper__more}>See All</span>
                    </div>
                    {/* Card UI 공통 부분 START */}
                    <div className={styles.mainWrapper}>
                    {nftInfo.slice(0, nftInfoVisible).map((item) => (
                        <NftCard 
                            key={item.id}
                            nftImgUrl={item.nftImgUrl}
                            like={item.like}
                            time={item.time}
                            title={item.title}
                            creatorProfileUrl={item.creatorProfileUrl}
                            creatorAccount={item.creatorAccount}
                            currentBid={item.currentBid}
                        />
                    ))}
                    </div>
                    {/* Card UI 공통 부분 END */}
                </div>
                {/* Meet Our Talented Creators UI 부분 */}
                <div className={styles.page__contents__creatorsBox}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.titleWrapper__title}>Meet Our Talented Creators</span>
                        <span className={styles.titleWrapper__more}>See All</span>
                    </div>
                    <div className={styles.mainWrapper}>
                    {creatorInfo.slice(0, creatorInfoVisible).map((item) => (
                        <CreatorCard
                            key={item.id}
                            rank={item.rank}
                            creatorProfileUrl={item.creatorProfileUrl}
                            creator={item.creator}
                            creatorAccount={item.creatorAccount}
                            itemCount={item.itemCount}
                        />
                    ))}
                    </div>
                </div>
                {/* Explore UI 부분 */}
                <div className={styles.page__contents__exploreBox}>
                    <span className={styles.title}>Explore</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur. laculis vestibulum purus<br/>
                        facilisi ultrices sed faucibus proin cum ut.
                    </p>
                    <div className={styles.button}>
                        <div className={styles.button__left}>
                            {["All categories", "Art", "Photography", "Virtual worlds", "Game"].map(
                                (category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleBtnClick(category)}
                                        className={
                                            activeCategory === category
                                                ? styles.activeButton
                                                : styles.inactiveButton
                                        }
                                    >
                                        {category}
                                    </button>
                                )
                            )}
                        </div>
                        <div className={styles.button__right}>
                            <button>
                                <span>Filter</span>
                                <img src="src/assets/images/common/icon/image_filter.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    {/* Card UI 공통 부분 START */}
                    <div className={styles.mainWrapper}>
                    {filteredData.slice(0, exploreInfoVisible).map((item) => (
                        <NftCard 
                            key={item.id}
                            nftImgUrl={item.nftImgUrl}
                            like={item.like}
                            time={item.time}
                            title={item.title}
                            creatorProfileUrl={item.creatorProfileUrl}
                            creatorAccount={item.creatorAccount}
                            currentBid={item.currentBid}
                        />
                    ))}
                    </div>
                    {/* Card UI 공통 부분 END */}
                    <div className={styles.loadButton}>
                        <button>
                            <span>Load more</span>
                            <img src="src/assets/images/common/icon/image_down.svg" alt="" />
                        </button>
                    </div>
                </div>
                {/* Join Our Community 부분 */}
                <div className={styles.page__contents__communityBox}>
                    <div className={styles.mainImage}>
                        <img src="src/assets/images/community/image_community.png" alt="image_community" />
                    </div>
                    <div className={styles.desc}>
                        <span>Join Our Community</span>
                        <p>Lorem ipsum dolor sit amet consectetur. laculis vestibulum purus facilisi ultrices sed faucibus proin cum ut. Lorem ipsum dolor sit amet consectetur. laculis vestibulum purus facilisi ultrices sed faucibus proin cum ut.</p>
                        <div className={styles.emailCont}>
                            <input type="text" className={styles.emailInput} placeholder='Enter your email address' />
                            <button>Get Email</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 공통 푸터 UI 부분 */}
            <CommonFooter/>
        </div>
    )
}

export default index