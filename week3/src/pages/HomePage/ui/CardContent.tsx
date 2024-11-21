import styles from './CardContent.module.scss';
import { nftData } from '../../../shared/mocks/dummyData.js';
import Card from '@/shared/ui/card/Card.js';
import CommonButton from '@/shared/ui/button/CommonButton.js';

const CARD_LIST = nftData;

const Desktop = () => {

};

const Tablet = () => {
    const displayCard = CARD_LIST.slice(0,6);

    return (
        <div className={styles.cardContent}>
            <div className={styles.cardContent__title}>
                <p>More From This Artist</p>
                <CommonButton
                    label="Go To Artist Page"
                    size="medium"
                    variant="outlined"
                    icon="src/shared/assets/icons/icon_arrowRight.svg"
                    onClick={() => alert("Go To Artist Page")}
                />
            </div>
            <div className={styles.cardContent__cardContainer}>
                {displayCard.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const Mobile = () => {
    const displayCard = CARD_LIST.slice(0,2);

    return (
        <div className={styles.cardContent}>
            <p>More From This Artist</p>
            <div className={styles.cardContent__cardContainer}>
                {displayCard.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <CommonButton
                label="Go To Artist Page"
                size="medium"
                variant="outlined"
                icon="src/shared/assets/icons/icon_arrowRight.svg"
                style={{ width: '100%' }}
                onClick={() => alert("Go To Artist Page")}
            />
        </div>
    );
};

export const CardContent = {
    Desktop,
    Tablet,
    Mobile
};