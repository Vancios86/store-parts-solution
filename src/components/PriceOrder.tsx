import { Arrow, ClickEventHandler } from '../types';

const PriceOrder = ({
  onChange,
  arrow,
  ascending,
}: {
  onChange: (ascending: boolean) => void;
  arrow: Arrow;
  ascending: boolean;
}) => (
  <button onClick={(click: ClickEventHandler) => onChange(!ascending)}>
    Arrange by price {arrow}
  </button>
);

export default PriceOrder;
