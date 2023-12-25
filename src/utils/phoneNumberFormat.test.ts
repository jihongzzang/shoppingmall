import phoneNumberFormat from './phoneNumberFormat';

const context = describe;

describe('phoneNumberFormat Function', () => {
  context('when given a formatted phone number', () => {
    it('removes non-numeric characters from a phone number', () => {
      expect(phoneNumberFormat('123-456-7890')).toBe('1234567890');
      expect(phoneNumberFormat('(123) 456-7890')).toBe('1234567890');
      expect(phoneNumberFormat('+1 (123) 456-7890')).toBe('11234567890');
    });
  });

  context('when given a string with only non-numeric characters', () => {
    it('returns an empty string if the input is only non-numeric characters', () => {
      expect(phoneNumberFormat('ABC-XYZ')).toBe('');
    });
  });

  context('when given a string with only numeric characters', () => {
    it('returns the same string if the input is already only numeric characters', () => {
      expect(phoneNumberFormat('1234567890')).toBe('1234567890');
    });
  });
});
