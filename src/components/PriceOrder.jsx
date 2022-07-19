const PriceOrder = ({ onChange }) => (
  <div className='input price-order-input'>
    <label htmlFor='price-order'>Order price</label>
    <input
      name='price-order'
      type='checkbox'
      placeholder={'Search...'}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  </div>
);

export default PriceOrder;
