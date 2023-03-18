import React, { FC } from 'react';
import Image from 'next/image';
import { styled } from 'twin.macro';

const CheckoutItemCard: FC = () => {
  return (
    <StyledCheckoutItemCard tw="transition-all">
      <div tw="relative w-[3.5rem] h-[3.5rem] rounded-md">
        <Image
          src={'/img/image-empty-placeholder.png'}
          alt={'image placeholder'}
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-md"
        />
      </div>
      <div tw="flex flex-col gap-1 flex-[3]">
        <h3 tw="font-bold text-lg">Title</h3>
        <span tw="text-base">Price</span>
      </div>
      <div tw="h-full self-start flex-[1]">
        <h4 tw="font-bold text-[#555555] text-base">Rp 20.000</h4>
      </div>
    </StyledCheckoutItemCard>
  );
};

export default CheckoutItemCard;

const StyledCheckoutItemCard = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  background-color: #ffffff;
  padding: 0.75rem;
`;
