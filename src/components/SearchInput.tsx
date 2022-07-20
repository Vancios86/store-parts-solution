const SearchInput = ({ onChange }: { onChange: Function }) => (
  <input
    className='input'
    type='text'
    placeholder={'Search...'}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
