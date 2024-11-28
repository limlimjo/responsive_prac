import styles from './CommonInput.module.scss';

const CommonInput = ({
    imgSrc= '',
    imgAlt='',
    type = 'text',
    placeholder = '',
    style = {},

}) => {
  return (
    <div className={styles.commonInput}>
        <div className={styles.commonInput__inputBox}>
            {/* 이미지가 없는 input도 있을 수 있으므로 이 부분 어떻게 할지 생각 */}
            <img src={imgSrc} alt={imgAlt} />
            <input type={type} placeholder={placeholder} style={style} className={styles.commonInput__inputBox__input} />
        </div>
    </div>
  );
}

export default CommonInput;