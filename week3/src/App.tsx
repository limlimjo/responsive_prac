// react-responsive 라이브러리 사용하여 반응형 웹 구현
import { useMediaQuery } from 'react-responsive';
import type { PropsWithChildren } from 'react';
import { Header } from './shared/ui/header/Header';
import styles from './App.module.scss';
import { Footer } from './shared/ui/footer/Footer';
import { Intro } from './pages/HomePage/ui/Intro';
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
        <Header.Desktop/>
        <Intro.Desktop/>
        <CardContent.Desktop/>
        <Footer.Desktop/>
      </Desktop>
      <Tablet>
        <Header.Tablet/>
        <Intro.Tablet/>
        <CardContent.Tablet/>
        <Footer.Tablet/>
      </Tablet>
      <Mobile>
        <Header.Mobile/>
        <Intro.Mobile/>
        <CardContent.Mobile/>
        <Footer.Mobile/>
      </Mobile>
    </div>
  );
}

export default App;