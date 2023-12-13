import numberFormat from './numberFormat';

const context = describe;

describe('numberFormat Function', () => {
  context('when given a small number', () => {
    it('should format it withoth commas', () => expect(numberFormat(123)).toBe('123'));
  });

  context('when given a large number', () => {
    it('should format it with commas', () => expect(numberFormat(123456)).toBe('123,456'));
  });

  context('when given zero', () => {
    it('should handle zero correctly', () => expect(numberFormat(0)).toBe('0'));
  });

  context('when given a negative number', () => {
    it('should format it correctly', () => expect(numberFormat(-123)).toBe('-123'));
  });
});
