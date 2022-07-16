import { useRef } from 'react';
import './BasketPromoCode.css';
import Button from './Button';



function BasketPromoCode() {
  const promoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTING::", promoRef.current.value);
  }
  return (
    <div className='BasketPromoCode'>
      <form onSubmit={handleSubmit}>
        <input
          ref={promoRef}
          className='BasketPromoCode_input'
          placeholder='Промокод'
        />
        <Button value='Применить' onClickHandler={() => alert('Применить')} />
      </form>
    </div>
  )
}

export default BasketPromoCode