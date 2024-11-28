import styles from './styles/index.module.scss';

import CommonHeader from '@/components/common/header/CommonHeader';
import CommonFooter from '@/components/common/footer/CommonFooter';
import Account from './components/Account';

const index = () => {
  return (
    <div className={styles.page}>
        {/* 공통 헤더 UI 부분 */}
        <CommonHeader/>
        {/* Create Account UI 부분 */}
        <Account/>
        {/* 공통 푸터 UI 부분 */}
        <CommonFooter/>
    </div>
  );
}

export default index;