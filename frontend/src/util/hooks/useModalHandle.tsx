import { useState } from 'react';

const useModalHandle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = (): void => {
    setIsOpen(true);
  };
  const close = (): void => {
    setIsOpen(false);
  };

  return [open, close, isOpen] as const;
};

export default useModalHandle;
