import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '../../components/common/header/CommonHeader';
import styles from './styles/index.module.scss';
import Intro from './components/Intro';
import Card from './components/Card';
import { nftData } from '../../data/dummyData';
import { useState } from 'react';

const CARD_LIST = nftData;

const index = () => {

  const [activeCategoryMenu, setActiveCategoryMenu] = useState('NFTs');

  const handleMenuClick = (categoryMenu) => {
    setActiveCategoryMenu(categoryMenu);
  }

  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <CommonHeader />
      {/* 인트로 */}
      <Intro/>
      {/* 카테고리 */}
      <div className={styles.page__category}>
        <a href="#" 
          className={`${styles.page__category__menu} 
                      ${activeCategoryMenu === 'NFTs' ? styles.active : styles.inactive}`}
          onClick={() => handleMenuClick('NFTs')}
        >
          <p>NFTs</p>
          <span>302</span>
        </a>
        <a href="#" 
          className={`${styles.page__category__menu} 
                      ${activeCategoryMenu === 'Collections' ? styles.active : styles.inactive}`}
            onClick={() => handleMenuClick('Collections')}
          >
          <p>Collections</p>
          <span>67</span>
        </a>
      </div>
      {/* 카드 UI */}
      <Card data={CARD_LIST} />
      {/* 공통 푸터 */}
      <CommonFooter />
    </div>
  );
}

export default index;