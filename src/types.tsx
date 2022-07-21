import React from 'react';

export type InputChangeEventHandler =
  React.ChangeEventHandler<HTMLInputElement>;
export type SelectChangeEventHandler =
  React.ChangeEventHandler<HTMLSelectElement>;
export type ClickEventHandler = React.MouseEvent<HTMLElement>;

export type StoreItemType = {
  name: string;
  price: string;
  type: ItemType;
};

export type DataType = Array<StoreItemType>;
export type Arrow = '↑' | '↓' | '';
export type ItemType = 'monitor' | 'mouse' | 'keyboard' | 'mousepad' | '';
