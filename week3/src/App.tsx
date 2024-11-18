// react-responsive 라이브러리 사용하여 반응형 웹 구현
import { useMediaQuery } from 'react-responsive';
import type { PropsWithChildren } from 'react';

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
    <div>
      <Desktop>
        <div>데스크탑</div>
      </Desktop>
      <Tablet>
        <div>태블릿</div>
      </Tablet>
      <Mobile>
        <div>모바일</div>
      </Mobile>
    </div>
  );
}

export default App;