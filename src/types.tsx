import React from 'react';

export type InputChangeEventHandler =
  React.ChangeEventHandler<HTMLInputElement>;
export type TextAreaChangeEventHandler =
  React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler =
  React.ChangeEventHandler<HTMLSelectElement>;

export type storeItemProps = {
  name: string;
  price: string;
  type: string;
};

export type dataType = [
  {
    name: string;
    price: string;
    type: string;
  }
];
