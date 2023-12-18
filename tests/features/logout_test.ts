Feature('Log out');

Before(({ backdoor, I }) => {
  backdoor.setupDatabase();

  I.login();
});

Scenario('Logout success', ({ I }) => {
  I.amOnPage('/');

  I.see('장바구니');

  I.click('로그아웃');

  I.waitForText('로그인');

  I.dontSee('장바구니');
});
