import { render, screen } from '@testing-library/react';
import Basket from './Basket';

describe('рендеринг корзины', () => {
  test('корзина без элементов', () => {
    render(<Basket />)

    const basketDisplay = screen.getByText('В вашей корзине еще нет товаров')

    expect(basketDisplay).toBeInTheDocument();
  })

  test('расчет итого корзины', () => {
    // AAA
    // Arrange
    const items = [
      { price: 100, qty: 2, uid: 1 }, // 200
      { price: 250, qty: 4, uid: 2 } // 1000
    ];
    // ACT
    render(<Basket items={items} defaultPromoValue={0} />)

    // ASSERT
    const basketDisplay = screen.getByText('1200₽')
    expect(basketDisplay).toBeInTheDocument();
  })
  test('расчет итого корзины с промокодом', () => {
    const items = [
      { price: 100, qty: 2, uid: 1 }, // 200
      { price: 250, qty: 4, uid: 2 } // 1000
    ];
    render(<Basket items={items} defaultPromoValue={200} />)

    const basketDisplay = screen.getByText('1000₽')

    expect(basketDisplay).toBeInTheDocument();
  })
})