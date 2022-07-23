import { ItemType } from '../types';

const TypeSelect = ({
  itemTypes,
  onChange,
}: {
  itemTypes: Array<ItemType>;
  onChange: (selectedType: ItemType) => void;
}) => (
  <select
    name='item-types'
    data-testid='test-type-select'
    onChange={(e): void => {
      onChange(e.target.value as ItemType);
    }}
  >
    <option value=''>All</option>
    {itemTypes.map((type: ItemType) => (
      <option key={type} value={type.toLowerCase()}>
        {type}
      </option>
    ))}
  </select>
);

export default TypeSelect;
