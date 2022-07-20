const PriceOrder = ({
  onChange,
  arrow,
  ascending,
}: {
  onChange: Function;
  arrow: string;
  ascending: boolean;
}) => (
  <button
    onClick={(click: React.MouseEvent<HTMLElement>) => onChange(!ascending)}
  >
    Order by price {arrow}
  </button>
);

export default PriceOrder;
