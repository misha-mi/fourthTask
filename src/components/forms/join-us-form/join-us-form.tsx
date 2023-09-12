import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../../ui/input/input';
import AlreadyHave from '../../../ui/alredy-have/alredy-have';
import CustomButton from '../../../ui/custom-button/custom-button';

type Inputs = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const JoinUsForm = () => {
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  const handlerClickButtonSubmit = () => {
    if (isAfterFirstSubmit) setIsAfterFirstSubmit(false);
    handleSubmit(onSubmit)();
  };

  const handlerGenerateStatus = (errorMessage: string | undefined) => {
    if (isAfterFirstSubmit) {
      return 'waiting';
    } else if (errorMessage) {
      return 'error';
    } else {
      return 'success';
    }
  };

  return (
    <View>
      <View style={styles.gap16}>
        <Controller
          control={control}
          rules={{
            required: 'Email Address is required',
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: 'Email must be an email',
            },
          }}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              status={handlerGenerateStatus(errors.email?.message)}
              onChange={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: 'Password is required',
          }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              status={handlerGenerateStatus(errors.password?.message)}
              isPasswordInput
              onChange={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: 'Confirm password is required',
          }}
          name="passwordConfirm"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirm password"
              placeholder="Confirm your password"
              status={handlerGenerateStatus(errors.passwordConfirm?.message)}
              isPasswordInput
              onChange={onChange}
              value={value}
              errorMessage={errors.passwordConfirm?.message}
            />
          )}
        />
      </View>

      <View style={styles.mt91}>
        <AlreadyHave />
      </View>

      <View style={styles.mt20}>
        <CustomButton onClick={handlerClickButtonSubmit} title="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt91: {
    marginTop: 91,
  },
  mt20: {
    marginTop: 20,
  },
  gap16: {
    gap: 16,
  },
});

export default JoinUsForm;
