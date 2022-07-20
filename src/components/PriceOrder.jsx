const PriceOrder = ({ onChange, arrow, ascending }) => (
  <button onClick={(click) => onChange(!ascending)}>
    Order by price {arrow}
  </button>
);

export default PriceOrder;
