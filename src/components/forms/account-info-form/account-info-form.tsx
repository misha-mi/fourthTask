import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import Input from '../../../ui/input/input';
import { TControl } from '../../../types';
import PhoneInput from '../../../ui/phone-input/phone-input';

const AccountInfoForm = ({ control }: TControl) => {
  const emailError = control.getFieldState('email');
  const phoneError = control.getFieldState('phone');
  return (
    <View>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email Address is required',
          pattern: {
            value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            message: 'Email must be an email',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            label="E-mail"
            placeholder="Enter your e-mail"
            status={emailError.error?.message ? 'error' : 'waiting'}
            onChange={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="phone"
        rules={{
          pattern: {
            value: /^\+7\d{10}$/,
            message: 'Phone must be an phone',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            phone={value || ''}
            setPhone={onChange}
            errorMessage={phoneError.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="country"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Country"
            placeholder="Enter your country"
            status={'waiting'}
            onChange={onChange}
            value={value}
            errorMessage={''}
          />
        )}
      />
    </View>
  );
};

export default AccountInfoForm;
