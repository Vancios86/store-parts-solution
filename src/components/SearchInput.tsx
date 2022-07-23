const SearchInput = ({ onChange }: { onChange: (e: string) => void }) => (
  <input
    data-testid='test-search-input'
    className='input'
    type='text'
    placeholder={'Search...'}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.currentTarget.value as string)
    }
  />
);

export default SearchInput;
