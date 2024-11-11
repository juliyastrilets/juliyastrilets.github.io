'use client';
import { ScrollTop } from '@/shared/scroll-top';
import { useEffect, useState } from 'react';
import Home from '@/pages/home';

export default function HomePage() {
  const [isShowScrollTop, setIsShowScrollTop] = useState(false);

  const handleWindowScroll = () => {
    const scrollTop = document.scrollingElement?.scrollTop;
    if (scrollTop && scrollTop > 400) {
      setIsShowScrollTop(true);
    } else {
      setIsShowScrollTop(false);
    }
  };

  useEffect(() => {
    if (typeof window === 'object') {
      window?.addEventListener('scroll', handleWindowScroll);
    }
  }, [isShowScrollTop]);

  return (
    <main>
      <Home />
      {isShowScrollTop && <ScrollTop />}
    </main>
  );
}
