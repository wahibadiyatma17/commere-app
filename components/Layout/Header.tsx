import React, { FC } from 'react';
import Image from 'next/image';
import 'twin.macro';

const Header: FC = (props) => {
  return (
    <div tw="flex w-full">
      <div tw="m-auto py-6">
        <div tw="relative w-[7.25rem] h-[1.75rem]">
          <Image
            src="/icon/icon-login.png"
            alt="Logkar Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
