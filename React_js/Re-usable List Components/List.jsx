import './List.css'; // Import the CSS file

function List(props) {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => (
    <li key={item.id} className="list-item">
      {item.name}:&nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-heading">{category}</h3>
      <ol className="list-container">{listItems}</ol>
    </>
  );
}

export default List;

