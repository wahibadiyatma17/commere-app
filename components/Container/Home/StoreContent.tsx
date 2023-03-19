import { useGetVehicles } from '@/common/hooks/vehicleHooks';
import React, { FC, useMemo } from 'react';
import { CgProfile } from 'react-icons/cg';
import 'twin.macro';

import { useAccountStore } from '@/common/store/accountStore';
import ItemCard from './components/ItemCard';

const StoreContent: FC = () => {
  const { data: vehcilesRes } = useGetVehicles();
  const vehiclesData = useMemo(() => vehcilesRes?.data ?? {}, [vehcilesRes]);
  const accountStore = useAccountStore();

  return (
    <div tw="flex flex-wrap gap-x-3 gap-y-5 w-full">
      {accountStore.isProfileCompleted ? (
        vehiclesData?.results?.map((data: any, idx: number) => (
          <ItemCard
            key={idx}
            title={data?.name}
            price={data?.cost_in_credits === 'unknown' ? 0 : parseInt(data?.cost_in_credits)}
          />
        ))
      ) : (
        <div tw="flex flex-col w-full h-full justify-center items-center py-10 ">
          <CgProfile size={64} color={'#388067'} tw="mb-3" />
          <h3 tw="font-semibold text-lg text-[#555555] mb-1">Data Diri Belum Lengkap</h3>
          <span tw="text-sm text-[#555555] max-w-[80%] text-center">
            Silakan lengkapi data diri terlebih dahulu sebelum bertransaksi
          </span>
        </div>
      )}
    </div>
  );
};

export default StoreContent;
