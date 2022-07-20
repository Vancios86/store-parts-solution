const TypeInput = ({ itemTypes, onChange }) => (
  <select
    name='item-types'
    onChange={(e) => {
      onChange(e.target.value);
    }}
  >
    <option value=''>All</option>
    {itemTypes.map((type) => (
      <option key={type} value={type.toLowerCase()}>
        {type}
      </option>
    ))}
  </select>
);

export default TypeInput;
