import React, { FC } from 'react';
import 'twin.macro';
import CartItemCard from './components/CartItemCard';

const CartContent: FC = () => {
  return (
    <div tw="flex flex-col gap-4 w-full">
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </div>
  );
};

export default CartContent;
