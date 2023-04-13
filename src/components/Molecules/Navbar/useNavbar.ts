import { useCallback, useLayoutEffect, useState } from 'react';

interface IUseNavbarReponse {
  isMovil: boolean;
  open: boolean;
  showColorNavbar: boolean;
  handleCloseOpen: () => void;
}

export default function useNavbar(): IUseNavbarReponse {
  const [open, setOpen] = useState(true);
  const [isMovil, setIsMovil] = useState(false);
  const [showColorNavbar, setShowColorNavbar] = useState(false);

  const handleCloseOpen = (): void => {
    setOpen((prev) => !prev);
  };

  const menuResize = useCallback((): void => {
    const windowSize = window.innerWidth;
    if (windowSize > 768) {
      setOpen(true);
      setIsMovil(false);
    } else {
      setOpen(false);
      setIsMovil(true);
    }
  }, []);

  const scrollFunction = (): void => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      setShowColorNavbar(true);
    } else {
      setShowColorNavbar(false);
    }
  };

  useLayoutEffect(() => {
    menuResize();
    window.addEventListener('resize', menuResize);
    return () => {
      window.removeEventListener('resize', menuResize);
    };
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return { isMovil, open, showColorNavbar, handleCloseOpen };
}
