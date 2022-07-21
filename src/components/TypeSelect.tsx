import { ItemType } from '../types';

const TypeInput = ({
  itemTypes,
  onChange,
}: {
  itemTypes: Array<ItemType>;
  onChange: (selectedType: ItemType) => void;
}) => (
  <select
    name='item-types'
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

export default TypeInput;
