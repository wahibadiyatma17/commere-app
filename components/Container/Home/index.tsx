import React, { FC, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import 'twin.macro';

import MobileOnlyLayout from '@/components/Layout';
import { MENU_TAB } from '@/common/constants';
import { BaseMenuTabType, MenuTabNameType } from '@/common/types/home';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTabNameType>('Home');

  return (
    <MobileOnlyLayout hasHeader={false} hasFooter={false}>
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
            <div tw="w-[20%] flex justify-end">
              <FiLogOut size={20} color={'#EF4444'} />
            </div>
          </div>
          {renderActiveTab()}
        </div>
      </Tabs>
    </MobileOnlyLayout>
  );
};

export default Home;

const renderActiveTab = () => {
  return (
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  );
};
