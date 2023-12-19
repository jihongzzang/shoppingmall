Feature('Sign up');

Before(({ backdoor }) => {
  backdoor.setupDatabase();
});

Scenario('Signup success', ({ I }) => {
  I.amOnPage('/');

  I.click('로그인');

  I.click('회원 가입');

  I.fillField('이메일', 'jujihong@example.com');
  I.fillField('이름', 'Jujihong');
  I.fillField('비밀번호', 'password');
  I.fillField('비밀번호 확인', 'password');

  I.click('회원 가입', { css: 'form' });

  I.waitForText('회원 가입 완료');
});

Scenario('Email has been already taken', ({ I }) => {
  I.amOnPage('/');

  I.click('로그인');

  I.click('회원 가입');

  I.fillField('이메일', 'tester@example.com');
  I.fillField('이름', 'Tester');
  I.fillField('비밀번호', 'password');
  I.fillField('비밀번호 확인', 'password');

  I.click('회원 가입', { css: 'form' });

  I.waitForText('회원 가입에 실패했습니다.');
});

Scenario('Password confirmation does not match', ({ I }) => {
  I.amOnPage('/');

  I.click('로그인');

  I.click('회원 가입');

  I.fillField('이메일', 'tester@example.com');
  I.fillField('이름', 'Tester');
  I.fillField('비밀번호', 'password');
  I.fillField('비밀번호 확인', 'xxx');

  I.see('회원 가입', { css: 'button[disabled]' });
});
