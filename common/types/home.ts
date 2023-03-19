export type MenuTabNameType = 'Home' | 'Store' | 'Cart';

export interface BaseMenuTabType {
  id: number;
  name: MenuTabNameType;
}

export type MenuTabsProps = Array<BaseMenuTabType>;

export type BaseActiveTabProps = {
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
};
