import { StoreItemType, ClickEventHandler } from '../types';

const Item = (
  {
    itemProps: { name, price, type },
    onItemSelect,
  }: { itemProps: StoreItemType; onItemSelect: (item: StoreItemType) => void },
  { key }: { key: string }
) => {
  return (
    <li
      key={key}
      onClick={(e: ClickEventHandler) => {
        onItemSelect({ name, price, type });
      }}
    >
      <p>{name}</p>
      <p>{price}</p>
      <p>{type}</p>
    </li>
  );
};

export default Item;
