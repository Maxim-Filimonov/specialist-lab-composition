import "./ItemInfo.css"
const ItemInfo = ({ title, description }) => (
    <div className='ItemInfo'>
        <h3 className='ItemInfo_title'>{title}</h3>
        <p className='ItemInfo_description'>{description}</p>
    </div>
)
export default ItemInfo;