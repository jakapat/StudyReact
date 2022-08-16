import PropTypes from 'prop-types';
import './Item.css'



const Item = (props) => {
    const { title, amount } = props  // & create varaible to recieve props value
    const status = amount < 0 ? "expense" : "income"
    return (
        <li className={status}>{title} <span>{amount}</span></li>
    );
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
}

export default Item