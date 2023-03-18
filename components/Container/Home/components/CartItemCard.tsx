import React, { FC } from 'react';
import Image from 'next/image';
import { FiTrash } from 'react-icons/fi';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { styled } from 'twin.macro';

const CartItemCard: FC = () => {
  return (
    <StyledCartItemCard tw="transition-all">
      <div tw="relative w-[4rem] h-[4rem] rounded-md">
        <Image
          src={'/img/image-empty-placeholder.png'}
          alt={'image placeholder'}
          fill
          style={{ objectFit: 'cover' }}
          tw="rounded-md"
        />
      </div>
      <div tw="flex flex-col gap-3 flex-[3]">
        <h3 tw="font-bold text-lg">Title</h3>
        <span tw="text-base">Price</span>
      </div>
      <div tw="h-full self-end flex-[1]">
        <div tw="flex gap-3 items-center">
          <FiTrash size={20} color={'#388067'} />
          <div tw="h-5 w-[1px] bg-gray-500" />
          <div tw="flex gap-2">
            <AiOutlineMinusCircle size={20} color={'#388067'} />
            <span tw="text-[#555555] font-semibold text-sm">1</span>
            <AiOutlinePlusCircle size={20} color={'#388067'} />
          </div>
        </div>
      </div>
    </StyledCartItemCard>
  );
};

export default CartItemCard;

const StyledCartItemCard = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid #388067;
  background-color: #ffffff;
  padding: 0.75rem;
`;
