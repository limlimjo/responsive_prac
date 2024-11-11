import styles from './CommonButton.module.scss';

const CommonButton = ({
    label, // 버튼 텍스트
    size = 'medium', // 버튼 사이즈 (small / medium / large)
    variant = 'filled', // 버튼 스타일 (filled / outlined)
    icon,
    onClick // 클릭 이벤트
}) => {
  return (
    <button 
        className={`${styles.button} ${styles[size]} ${styles[variant]} ${styles.withIcon}`} 
        onClick={onClick}
    >
        {icon && <img src={icon} alt="icon" className={styles.icon} />}
        {label}
    </button>
  );
}

export default CommonButton;