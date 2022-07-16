import BasketHeader from "./BasketHeader"
import BasketItem from "./BasketItem";
import Button from "./Button"
import BasketPromoInfo from './BasketPromoInfo';
import BasketTotal from './BasketTotal';
import BasketPromoCode from './BasketPromoCode';
import { useState } from "react";


function Basket({ items = [], defaultPromoValue = -500 }) {
  const [count, setCount] = useState(0);

  if (items.length === 0) {
    return (
      <div>
        <p>
          В вашей корзине еще нет товаров
        </p>
      </div>
    )
  }

  const countItemsInBasket = items.reduce((acc, next) => acc + next.qty, 0);
  const amountTotal = items.reduce(
    (acc, next) => acc + next.price * next.qty,
    0
  );

  return (
    <div className="Basket">
      <Button value={`Считать ${count}`} onClickHandler={() => setCount(count + 1)} />
      <BasketHeader count={countItemsInBasket} />
      <div className="Basket__items">
        {items.map((item) => (
          <BasketItem {...item} key={item.uid} />
        ))}
        <BasketPromoInfo code={"REACTSPECIALIST"} />
        <BasketTotal value={amountTotal} currency={"₽"} />
      </div>
      <BasketPromoCode code={""} />
      <Button
        value="Продолжить покупку"
        onClickHandler={() => alert("Продолжить")}
        className="btn-proceed"
      />
    </div>
  )
}
export default Basket;