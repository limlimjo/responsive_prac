import styles from './CommonButton.module.scss';

const CommonButton = ({
    className = '',
    label, // 버튼 텍스트
    size = 'medium', // 버튼 사이즈 (small / medium / large)
    variant = 'filled', // 버튼 스타일 (filled / outlined)
    icon,
    style = {},
    onClick // 클릭 이벤트
}) => {
  return (
    <button 
        className={`${styles.button} ${styles[size]} ${styles[variant]} ${styles.withIcon} ${className}`} 
        style={style}
        onClick={onClick}
    >
        {icon && <img src={icon} alt="icon" className={styles.icon} />}
        {/* {icon && <object type="image/svg+xml" data={icon} className={styles.icon}></object>} */}
        {label}
    </button>
  );
}

export default CommonButton;