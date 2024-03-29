import React, { useState, MutableRefObject, useEffect, useRef } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
};

export const useRefHeight = (): [
  MutableRefObject<HTMLElement | null>,
  number | null,
  () => void,
] => {
  const ref = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const calculateHeightFromRef = () => {
    if (ref.current) setHeight(ref.current.clientHeight);
  };

  useEffect(() => {
    calculateHeightFromRef();
  }, [ref]);

  return [ref, height, calculateHeightFromRef];
};

export const getChildrenOnDisplayName = (children: any, displayName: string) =>
  React.Children.map(children, (child) => (child.type.displayName === displayName ? child : null));

export const currencyFormat = (price: number, options?: Intl.NumberFormatOptions) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }).format(price);
};
