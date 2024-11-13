import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '../../components/common/header/CommonHeader';
import styles from './styles/index.module.scss';

const index = () => {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <CommonHeader />
      {/* 공통 푸터 */}
      <CommonFooter />
    </div>
  );
}

export default index;