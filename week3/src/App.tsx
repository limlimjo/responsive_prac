// react-responsive 라이브러리 사용하여 반응형 웹 구현
import { useMediaQuery } from 'react-responsive';
import type { PropsWithChildren } from 'react';
import { Headers } from './shared/ui/header/Header';
import styles from './App.module.scss';
import { Footers } from './shared/ui/footer/Footer';
import { Intros } from './pages/HomePage/ui/Intro';
import { CardContent } from './pages/HomePage/ui/CardContent';

const Desktop = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }: PropsWithChildren) => {
  const isTablet = useMediaQuery({ minWidth: 834, maxWidth: 1279 });
  return isTablet ? children : null;
};

const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({ maxWidth: 833 });
  return isMobile ? children : null;
};

function App() {

  return (
    <div className={styles.page}>
      <Desktop>
        <Headers.Desktop/>
        <Intros.Desktop/>
        <CardContent.Desktop/>
        <Footers.Desktop/>
      </Desktop>
      <Tablet>
        <Headers.Tablet/>
        <Intros.Tablet/>
        <CardContent.Tablet/>
        <Footers.Tablet/>
      </Tablet>
      <Mobile>
        <Headers.Mobile/>
        <Intros.Mobile/>
        <CardContent.Mobile/>
        <Footers.Mobile/>
      </Mobile>
    </div>
  );
}

export default App;