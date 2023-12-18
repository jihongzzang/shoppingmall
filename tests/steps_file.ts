const { I } = inject();

export = () => actor({
  async login() {
    I.amOnPage('/');

    I.click('로그인');

    I.fillField('E-mail', 'tester@example.com');

    I.fillField('Password', 'password');

    I.click('로그인', { css: 'form' });

    I.waitForText('로그아웃');
  },
});
