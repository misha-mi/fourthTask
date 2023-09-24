import Input from '../input/input';
import { IPhoneInput } from './type';

function PhoneInput({ phone, setPhone }: IPhoneInput) {
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
    setPhone(value.replace(/\s/g, ''));
  };

  return (
    <Input
      label="Phone number"
      placeholder="Enter your phone number"
      status={'waiting'}
      onChange={change}
      value={getValue()}
      errorMessage={''}
      isPhonePad
    />
  );
}

export default PhoneInput;
