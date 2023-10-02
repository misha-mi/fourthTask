import Input from '../input/input';
import { IPhoneInputProps } from './type';

function PhoneInput({ phone, setPhone, errorMessage }: IPhoneInputProps) {
  const mask = '+7 xxx xxx xx xx';
  const getValue = () => {
    const arrNumber = phone.replace('+7', '').replace('+', '').split('');
    if (!arrNumber.length) return '';
    let value = mask;
    arrNumber.forEach(item => {
      value = value.replace('x', item);
    });
    return value.replace(/x/g, '').trim();
  };

  const change = (value: string) => {
    const phone = value.replace(/\s/g, '').slice(0, 12);
    if (phone === '+7') {
      setPhone(null);
    } else {
      setPhone(phone);
    }
  };

  return (
    <Input
      label="Phone number"
      placeholder="Enter your phone number"
      status={errorMessage ? 'error' : 'waiting'}
      onChange={change}
      value={getValue()}
      errorMessage={errorMessage}
      isPhonePad
    />
  );
}

export default PhoneInput;
