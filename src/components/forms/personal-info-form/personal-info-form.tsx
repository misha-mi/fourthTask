import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import Input from '../../../ui/input/input';
import { TControl } from '../../../types';

const PersonalInfoForm = ({ control }: TControl) => {
  return (
    <View>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="First name"
            placeholder="Enter your first name"
            status={'waiting'}
            onChange={onChange}
            value={value}
            errorMessage={''}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Last name"
            placeholder="Enter your last name"
            status={'waiting'}
            onChange={onChange}
            value={value}
            errorMessage={''}
          />
        )}
      />

      <Controller
        control={control}
        name="middleName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Surname"
            placeholder="Enter your surname"
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

export default PersonalInfoForm;
