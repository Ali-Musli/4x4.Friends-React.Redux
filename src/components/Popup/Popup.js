import style from './Popup.module.css'

const Popup = ({ isOpen, onClose, children }) => {
    return (
      isOpen && (
        <div className={style["popup-overlay"]}>
          <div className={style["popup-content"]}>
            <span className={style["close-button"]} onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )
    );
  };
  
  export default Popup;