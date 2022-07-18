const SearchInput = ({ onChange }) => (
  <input
    type='text'
    placeholder={'Search...'}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
