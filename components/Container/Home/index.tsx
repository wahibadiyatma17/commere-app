import React, { FC, useEffect, useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import 'twin.macro';

import MobileOnlyLayout from '@/components/Layout';
import { MENU_TAB } from '@/common/constants';
import { BaseMenuTabType, MenuTabNameType } from '@/common/types/home';
import HomeContent from './HomeContent';
import CartContent from './CartContent';
import StoreContent from './StoreContent';
import { useAccountStore } from '@/common/store/accountStore';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTabNameType>('Home');
  const router = useRouter();
  const accountStore = useAccountStore();
  const submitRef = useRef<any>(null);
  const onSubmit = () => {
    submitRef?.current?.click();
  };

  const onLoggedOut = () => {
    accountStore.onLoggedOut;
    toast.success('Logout berhasil!');
    router.push('/login');
  };

  useEffect(() => {
    if (!accountStore.accountData.isLoggedIn) router.push('/login');
  }, [accountStore.accountData.isLoggedIn]);

  return (
    <MobileOnlyLayout
      hasHeader={false}
      hasFooter={activeTab !== 'Store'}
      buttonFooterprops={{
        text: getButtonText(activeTab),
        onClick: () => onSubmit(),
      }}
    >
      <Tabs colorScheme={'green'}>
        <div tw="flex flex-col gap-4">
          <div tw="w-full flex justify-between items-center">
            <div tw="w-[80%]">
              <TabList>
                {MENU_TAB.map((data: BaseMenuTabType) => (
                  <Tab key={data.id} onClick={() => setActiveTab(data.name)} w={'8rem'}>
                    {data.name}
                  </Tab>
                ))}
              </TabList>
            </div>
            <div tw="w-[20%] flex justify-end cursor-pointer" onClick={() => onLoggedOut()}>
              <FiLogOut size={20} color={'#EF4444'} />
            </div>
          </div>
          <div tw="w-full">{renderActiveTab(submitRef)}</div>
        </div>
      </Tabs>
    </MobileOnlyLayout>
  );
};

export default Home;

const renderActiveTab = (submitRef: React.MutableRefObject<any>) => {
  return (
    <TabPanels>
      <TabPanel p={0}>
        <HomeContent submitRef={submitRef} />
      </TabPanel>
      <TabPanel p={0}>
        <StoreContent />
      </TabPanel>
      <TabPanel p={0}>
        <CartContent submitRef={submitRef} />
      </TabPanel>
    </TabPanels>
  );
};

const getButtonText = (activeTab: MenuTabNameType) => {
  if (activeTab === 'Home') return 'Lengkapi data diri anda';
  else if (activeTab === 'Cart') return 'Lanjutkan';
};
