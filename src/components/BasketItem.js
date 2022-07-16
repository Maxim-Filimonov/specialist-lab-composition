import ItemInfo from "./ItemInfo/ItemInfo"
import Counter from "./Counter"
import ItemPrice from "./ItemPrice"
import './BasketItem.css'
import PropTypes from 'prop-types';

const BasketItem = ({ title, description, price, qty, uid }) => (
  <div className='BasketItem'>
    <ItemInfo title={title} description={description} />
    <ItemPrice value={price} currency={'₽'} />
    <Counter value={qty} uid={uid} />
    <ItemPrice value={qty * price} currency={'₽'} />
  </div>
)
BasketItem.propTypes = {
  qty: PropTypes.number
}
BasketItem.defaultProps = {
  qty: 2
}

export default BasketItem;