import styles from './CommonButton.module.scss'

const CommonButton = ({ 
    label, onClick, disabled = false, 
    className = '',
    size = 'medium',
}) => {
  return (
    <button
        className={`common-button ${size} ${className}`}
        onClick={onClick}
        disabled={disabled}
    >
        {label}
    </button>
  )
}

export default CommonButton