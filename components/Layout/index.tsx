import React, { FC, MutableRefObject, useEffect } from 'react';
import { Global } from '@emotion/react';
import { css } from 'twin.macro';

import { useWindowSize, useRefHeight } from '@/common/utils/helpers';

import Header from './Header';
import Navigation, { NavigationProps } from './Navigation';

interface BaseMobileOnlyLayoutProps {
  children?: React.ReactNode;
  navigationProps?: NavigationProps;
}

export type MobileOnlyLayoutProps = BaseMobileOnlyLayoutProps;

const MobileOnlyLayout: FC<MobileOnlyLayoutProps> = (props) => {
  const { children, navigationProps = { title: 'Logkar Commerce' } } = props;
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const [headerNavigationWrapperRef, headerNavigationWrapperHeight] = useRefHeight();

  return (
    <div tw="flex w-screen h-full md:bg-[#9CFFDD]">
      <Global styles={globalCSS} />
      <div tw="relative overflow-x-hidden m-auto w-full h-full min-h-screen bg-white box-shadow[0px 4px 30px 0px #FF61120D] md:max-w-[27.5rem]">
        <div
          ref={headerNavigationWrapperRef as MutableRefObject<HTMLDivElement>}
          tw="fixed w-full bg-white top-0 border border-solid border-white md:(border-none max-w-[27.5rem]) z-50"
        >
          {!isMobile && <Header />}
          <div tw="md:(mt-1)">
            <Navigation {...navigationProps} />
          </div>
        </div>
        {headerNavigationWrapperHeight !== null && (
          <main css={mainCSS(headerNavigationWrapperHeight)}>{children}</main>
        )}
      </div>
    </div>
  );
};

export default MobileOnlyLayout;

const mainCSS = (paddingTop: number) => css`
  padding-top: ${paddingTop}px;
`;

const globalCSS = css`
  body {
    ::-webkit-scrollbar {
      background-color: initial !important;
      display: none !important;
      overflow: hidden !important;
      width: 0 !important;
      -webkit-appearance: none !important;
    }
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      background-color: initial;
      display: none !important;
      overflow-y: hidden !important;
    }
  }
`;
