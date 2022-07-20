const Item = ({ itemProps: { name, price, type } }) => {
  return (
    <li key={name}>
      <p>{name}</p>
      <p>{price}</p>
      <p>{type}</p>
    </li>
  );
};

export default Item;
