import { useCartStore } from '@/common/store/cartStore';
import { CartItemType } from '@/common/types/cart';
import { currencyFormat } from '@/common/utils/helpers';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import Image from 'next/image';
import React, { FC } from 'react';
import toast from 'react-hot-toast';
import { styled } from 'twin.macro';

interface BaseItemCardProps {
  title?: string;
  price?: number;
}

type ItemCardProps = BaseItemCardProps;

const ItemCard: FC<ItemCardProps> = (props) => {
  const { title = '', price = 0 } = props;
  const cartStore = useCartStore();

  const isProductOnCart = () => {
    const productsTitle = cartStore.productList.map((data: CartItemType) => data.title);
    if (productsTitle.includes(title)) return true;
    return false;
  };

  const addToCart = () => {
    if (!isProductOnCart()) {
      cartStore.addProductToCart({ title: title, price: price, quantity: 1 });
      cartStore.setCartPaid(false);
      toast.success('Produk berhasil ditambahkan ke keranjnag!');
    } else {
      const newProductList = cartStore.productList.filter(
        (data: CartItemType) => data.title !== title,
      );
      cartStore.setProductList(newProductList);
      toast.success('Produk berhasil dihapus dari keranjnag!');
    }
  };

  return (
    <StyledItemCard tw="transition-all" isProductOnCart={isProductOnCart()}>
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
        <h4 tw="font-semibold line-clamp-1">{title}</h4>
        <h4>{currencyFormat(price)}</h4>
        <PrimaryButton size="sm" onClick={() => addToCart()}>
          {isProductOnCart() ? 'Remove' : 'Add to cart'}
        </PrimaryButton>
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;

type StyledItemCard = {
  isProductOnCart: boolean;
};

const StyledItemCard = styled.div<StyledItemCard>`
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
