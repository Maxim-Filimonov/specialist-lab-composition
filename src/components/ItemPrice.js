import './ItemPrice.css'

const ItemPrice = ({ value, currency }) => (
  <div className='ItemPrice'>{value}{currency}</div>
)
export default ItemPrice;