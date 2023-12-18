const { I } = inject();

const BACKDOOR_BASE_URL = process.env.REACT_APP_BASE_API_URL || 'https://shop-demo-api-02.fly.dev';

export = {
  setupDatabase() {
    I.amOnPage(`${BACKDOOR_BASE_URL}/backdoor/setup-database`);
    I.see('OK');
  },
};
