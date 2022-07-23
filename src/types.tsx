import React from 'react';

export type InputChangeEventHandler =
  React.ChangeEventHandler<HTMLInputElement>;
export type SelectChangeEventHandler =
  React.ChangeEventHandler<HTMLSelectElement>;
export type ClickEventHandler = React.MouseEvent<HTMLElement>;

export type StoreObject = {
  name: string;
  price: string;
  type: ItemType;
};

export type Data = Array<StoreObject>;
export type Arrow = '↑' | '↓' | '';
export type ItemType = 'monitor' | 'mouse' | 'keyboard' | 'mousepad' | string;
export type Route = 'home' | 'details' | '';
