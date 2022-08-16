import Item from "./Item";
import "./Transaction.css"



// & Data Array
const Transaction = (props) => {

  // & Loop data from array with spread operator (so short)
  const { item } = props

  return (
    <div>
      <ul className="item-list">
        {item.map((element) => {
          return <Item {...element} key={element.id} />
        })}
      </ul>
    </div>
  ); // ^ Data from Context
}

export default Transaction