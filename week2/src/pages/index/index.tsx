import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '../../components/common/header/CommonHeader';
import styles from './styles/index.module.scss';
import Intro from './components/Intro';
import Card from './components/Card';
import { nftData } from '../../data/dummyData';

const CARD_LIST = nftData;

const index = () => {

  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <CommonHeader />
      {/* 인트로 */}
      <Intro/>
      {/* 카테고리 */}
      <div className={styles.page__category}>
        <div className={styles.page__category__menu}>
          <p>NFTs</p>
          <span>302</span>
        </div>
        <div className={styles.page__category__menu}>
          <p>Collections</p>
          <span>67</span>
        </div>
      </div>
      {/* 카드 UI */}
      <Card data={CARD_LIST} />
      {/* 공통 푸터 */}
      <CommonFooter />
    </div>
  );
}

export default index;