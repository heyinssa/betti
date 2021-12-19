import { useState } from 'react';

const useModalHandle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return [open, close, isOpen];
};

export default useModalHandle;
