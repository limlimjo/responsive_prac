import styles from './CardContent.module.scss';
import { nftData } from '../../../shared/mocks/dummyData.js';
import Card from '@/shared/ui/card/Card.js';
import CommonButton from '@/shared/ui/button/CommonButton.js';

const CARD_LIST = nftData;

const CardContent = ({ count, isDesktop, isTablet, isMobile }) => {
    
    const displayCard = CARD_LIST.slice(0, count);

    return (
        <div className={styles.cardContent}>
            <div className={styles.cardContent__title}>
                <p>More From This Artist</p>
                {(isDesktop || isTablet) && (
                    <CommonButton
                        label="Go To Artist Page"
                        size="medium"
                        variant="outlined"
                        icon="src/shared/assets/icons/icon_arrowRight.svg"
                        onClick={() => alert("Go To Artist Page")}
                    />
                )}
            </div>
            <div className={styles.cardContent__cardContainer}>
                {displayCard.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            {isMobile && (
                <CommonButton
                    label="Go To Artist Page"
                    size="medium"
                    variant="outlined"
                    icon="src/shared/assets/icons/icon_arrowRight.svg"
                    style={{ width: '100%' }}
                    onClick={() => alert("Go To Artist Page")}
                />
            )}
        </div>
    );
};

export const Desktop = () => <CardContent count={9} isDesktop={true} isTablet={false} isMobile={false} />;
export const Tablet = () => <CardContent count={6} isDesktop={false} isTablet={true} isMobile={false} />;
export const Mobile = () => <CardContent count={2} isDesktop={false} isTablet={false} isMobile={true} />;

export const CardContents = {
    Desktop,
    Tablet,
    Mobile
};