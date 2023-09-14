import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children }) => {
  const wrappedChildren = (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>{children}</div>
    </div>
  );

  return createPortal(wrappedChildren, document.body);
};

export default Modal;
