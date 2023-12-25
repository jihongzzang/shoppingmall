const PhoneRegex = /[^0-9]/g;

export default function phoneNumberFormat(phoneNumber: string) {
  return phoneNumber.replace(PhoneRegex, '');
}
