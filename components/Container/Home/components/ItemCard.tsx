import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

const ItemCard: FC = () => {
  return (
    <StyledItemCard tw="transition-all">
      <div tw="relative w-full h-[7.5rem] rounded-md">
        <Image
          src={'/img/image-empty-placeholder.png'}
          alt={'image placeholder'}
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-md"
        />
      </div>
      <div tw="flex flex-col gap-2 p-2 w-full text-sm text-[#555555]">
        <h4 tw="font-semibold">Title</h4>
        <h4>Price</h4>
        <PrimaryButton size="sm">Add to cart</PrimaryButton>
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;

const StyledItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  height: max-content;
  cursor: pointer;
  border-radius: 0.75rem;
  :hover {
    transform: scale(1.02);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`;
