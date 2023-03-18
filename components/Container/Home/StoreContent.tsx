import React, { FC } from 'react';
import 'twin.macro';
import ItemCard from './components/ItemCard';

const StoreContent: FC = () => {
  return (
    <div tw="flex flex-wrap gap-x-3 gap-y-5 w-full">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default StoreContent;
