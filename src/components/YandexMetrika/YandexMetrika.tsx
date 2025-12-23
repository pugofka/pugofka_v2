'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

const COUNTER_ID = 189795;

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.toString();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const url = search ? `${pathname}?${search}` : pathname;

    ym('hit', url);
  }, [pathname, search]);

  return (
    <YMInitializer
      accounts={[COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
}
