import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalWrapper from '@components/Modal/ModalWrapper';

const Modal: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
      <ModalWrapper>
        {children}
      </ModalWrapper>
      , document.getElementById('modal') as HTMLElement)
    : null;
};

export default Modal;
