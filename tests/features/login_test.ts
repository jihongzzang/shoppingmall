Feature('Log in');

Before(({ backdoor }) => {
  backdoor.setupDatabase();
});

Scenario('Login success', ({ I }) => {
  I.amOnPage('/');

  I.click('로그인');

  I.fillField('이메일', 'tester@example.com');

  I.fillField('비밀번호', 'password');

  I.click('로그인', { css: 'form' });

  I.waitForText('장바구니');
});

Scenario('Login failed', ({ I }) => {
  I.amOnPage('/');

  I.click('로그인');

  I.fillField('이메일', 'tester@example.com');

  I.fillField('비밀번호', 'xxx');

  I.click('로그인', { css: 'form' });

  I.waitForText('로그인 실패');
});
