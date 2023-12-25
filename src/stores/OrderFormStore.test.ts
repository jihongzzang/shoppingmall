import { phoneNumberFormat } from '../utils';
import OrderFormStore from './OrderFormStore';

const context = describe;

describe('OrderFormStore', () => {
  let store: OrderFormStore;

  beforeEach(() => {
    jest.clearAllMocks();

    store = new OrderFormStore();
  });

  describe('changeName', () => {
    const name = 'Tester';

    it('sets state', () => {
      store.changeName(name);

      expect(store.name).toBe(name);
    });
  });

  describe('changeAddress1', () => {
    const address1 = 'address1';

    const postalCode = 'postalCode';

    it('sets state', () => {
      store.changeAddress1(address1, postalCode);

      expect(store.address1).toBe(address1);
      expect(store.postalCode).toBe(postalCode);
    });
  });

  describe('changeAddress2', () => {
    const address2 = 'address2';

    it('sets state', () => {
      store.changeAddress2(address2);

      expect(store.address2).toBe(address2);
    });
  });

  describe('changePhoneNumber', () => {
    const phoneNumber = '010-9459-2441';

    it('sets state', () => {
      store.changePhoneNumber(phoneNumber);

      expect(store.phoneNumber).toBe(phoneNumberFormat(phoneNumber));
    });
  });

  describe('valid', () => {
    const name = 'tester';
    const address1 = 'address1';
    const address2 = 'address2';
    const postalCode = 'postalCode';
    const phoneNumber = '010-9459-2441';

    context('when all fields are valid', () => {
      it('is true', async () => {
        store.changeName(name);
        store.changeAddress1(address1, postalCode);
        store.changeAddress2(address2);
        store.changePhoneNumber(phoneNumber);

        expect(store.valid).toBeTruthy();
      });
    });

    context('when name is blank', () => {
      it('is true', async () => {
        store.changeName('');
        store.changeAddress1(address1, postalCode);
        store.changeAddress2(address2);
        store.changePhoneNumber(phoneNumber);

        expect(store.valid).toBeFalsy();
      });
    });

    context('when address1 and postalCode are blank', () => {
      it('is true', async () => {
        store.changeName(name);
        store.changeAddress1('', '');
        store.changeAddress2(address2);
        store.changePhoneNumber(phoneNumber);

        expect(store.valid).toBeFalsy();
      });
    });

    context('when address2 is blank', () => {
      it('is true', async () => {
        store.changeName(name);
        store.changeAddress1(address1, postalCode);
        store.changeAddress2('');
        store.changePhoneNumber(phoneNumber);

        expect(store.valid).toBeFalsy();
      });
    });

    context('when phoneNumber is blank', () => {
      it('is true', async () => {
        store.changeName(name);
        store.changeAddress1(address1, postalCode);
        store.changeAddress2(address2);
        store.changePhoneNumber('');

        expect(store.valid).toBeFalsy();
      });
    });
  });
});
