import { StoreObject, ClickEventHandler } from '../types';

const Item = (
  {
    itemProps: { name, price, type },
    onItemSelect,
  }: { itemProps: StoreObject; onItemSelect: (item: StoreObject) => void },
  { key }: { key: string }
) => {
  return (
    <li
      data-testid='test-item'
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
