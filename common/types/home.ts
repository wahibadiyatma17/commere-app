export type MenuTabNameType = 'Home' | 'Store' | 'Cart';

export interface BaseMenuTabType {
  id: number;
  name: MenuTabNameType;
}

export type MenuTabsProps = Array<BaseMenuTabType>;
