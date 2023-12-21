const { I } = inject();

export = () => actor({
  login() {
    I.amOnPage('/');

    I.click('로그인');

    I.fillField('이메일', 'tester@example.com');

    I.fillField('비밀번호', 'password');

    I.click('로그인', { css: 'form' });

    I.waitForText('로그아웃');
  },
});
