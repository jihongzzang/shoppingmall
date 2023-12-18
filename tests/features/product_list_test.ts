Feature('Product List');

Scenario('All products', ({ I }) => {
  I.amOnPage('/');

  I.click('전체');

  I.see('CBCL 하트자수맨투맨');
  I.see('CBCL 핀턱자수후드');
});

Scenario('Category', ({ I }) => {
  I.amOnPage('/');

  I.click('상의');

  I.see('CBCL 하트자수맨투맨');
  I.dontSee('CBCL 핀턱자수후드');

  I.click('아우터');

  I.dontSee('CBCL 하트자수맨투맨');
  I.see('CBCL 핀턱자수후드');

  I.click('하의');

  I.dontSee('CBCL 하트자수맨투맨');
  I.dontSee('CBCL 핀턱자수후드');
});
