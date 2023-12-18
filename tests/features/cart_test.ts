Feature('Cart');

Before(({ backdoor }) => {
  backdoor.setupDatabase();
});

Scenario('Empty cart', ({ I }) => {
  I.amOnPage('/cart');

  I.see('장바구니가 비었습니다');
});

Scenario('Add to cart', ({ I }) => {
  I.amOnPage('/products');

  I.click('CBCL 하트자수맨투맨');

  I.click('[role="combobox"]');

  I.click('blue');

  I.click('장바구니에 담기');

  I.waitForText('장바구니에 담았습니다');

  I.amOnPage('/cart');

  I.see('CBCL 하트자수맨투맨');

  I.see('(컬러: blue');

  I.see('합계');

  I.see('128,000원');
});
