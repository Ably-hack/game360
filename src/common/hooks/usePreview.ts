import { KeyboardEventHandler, useState } from 'react';

const usePreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onKeyUpHandler: KeyboardEventHandler<HTMLDivElement> = (e: {
    key: string;
  }) => {
    if (e.key === 'Enter') {
      setOpen(!open);
    }
  };
  return { open, handleOpen, onKeyUpHandler };
};

export default usePreview;
