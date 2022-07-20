const TypeInput = ({
  itemTypes,
  onChange,
}: {
  itemTypes: [];
  onChange: Function;
}) => (
  <select
    name='item-types'
    onChange={(e) => {
      onChange(e.target.value);
    }}
  >
    <option value=''>All</option>
    {itemTypes.map((type: string) => (
      <option key={type} value={type.toLowerCase()}>
        {type}
      </option>
    ))}
  </select>
);

export default TypeInput;
