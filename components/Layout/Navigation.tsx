import React, { FC } from 'react';
import Image from 'next/image';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import 'twin.macro';

interface BaseNavigationProps {
  title?: string;
  onBack?: () => void;
  hasBack?: boolean;
}

export type NavigationProps = BaseNavigationProps;

const Navigation: FC<NavigationProps> = (props) => {
  const { title, onBack = () => history.back(), hasBack = true } = props;

  return (
    <div tw="w-full overflow-hidden p-4 flex items-center mx-auto max-w-[24.5rem] md:px-6">
      <div tw="flex items-center flex[1 0 22%]">
        {hasBack && <AiOutlineArrowLeft width={32} height={32} onClick={() => onBack()} />}
      </div>
      <p tw="flex[1 0 58%] min-w-0 text-center font-medium text-base">{title}</p>
      <div tw="flex[1 0 20%] min-w-0" />
    </div>
  );
};

export default Navigation;
