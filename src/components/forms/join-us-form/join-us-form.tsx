import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../../ui/input/input';
import CustomButton from '../../../ui/custom-button/custom-button';
import IfMessage from '../../../ui/if-message/if-message';
import { useMutation } from '@apollo/client';
import { JOIN_US } from '../../../apollo/service/join-us';
import {
  IJoinUsFormProps,
  TErrorArr,
  THandlerGenerateStatus,
  TInputs,
} from './type';
import { setToken } from '../../../storage/storage';

const JoinUsForm = ({ onNavigate }: IJoinUsFormProps) => {
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(true);
  const [joinUs, { data: joinUsData, error: joinUsError, loading }] =
    useMutation(JOIN_US, {
      errorPolicy: 'all',
      onCompleted: data => {
        setToken(data.userSignUp.token);
        onNavigate('SuccessJoinUsPage');
      },
    });

  const emailErrorRequest = joinUsData?.userSignUp?.problem?.message;
  const arrErrorRequest = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  if (Array.isArray(joinUsError?.graphQLErrors[0].extensions.errors)) {
    joinUsError?.graphQLErrors[0].extensions.errors.forEach(
      ({ field, errors }: TErrorArr) => {
        arrErrorRequest[field] =
          errors[0].slice(0, 1).toUpperCase() + errors[0].slice(1);
      },
    );
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit = (data: TInputs) => {
    joinUs({
      variables: { ...data },
    });
  };

  const handlerClickButtonSubmit = () => {
    if (isAfterFirstSubmit) setIsAfterFirstSubmit(false);
    handleSubmit(onSubmit)();
  };

  const handlerGenerateStatus: THandlerGenerateStatus = errorMessage => {
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
              status={handlerGenerateStatus(
                emailErrorRequest ||
                  arrErrorRequest.email ||
                  errors.email?.message,
              )}
              onChange={onChange}
              value={value}
              errorMessage={
                emailErrorRequest ||
                arrErrorRequest.email ||
                errors.email?.message
              }
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be longer than or equal to 5 characters',
            },
          }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              status={handlerGenerateStatus(
                arrErrorRequest.password || errors.password?.message,
              )}
              isPasswordInput
              onChange={onChange}
              value={value}
              errorMessage={
                arrErrorRequest.password || errors.password?.message
              }
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: 'Confirm password is required',
            minLength: {
              value: 5,
              message: 'Password must be longer than or equal to 5 characters',
            },
          }}
          name="passwordConfirm"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Confirm password"
              placeholder="Confirm your password"
              status={handlerGenerateStatus(
                arrErrorRequest.passwordConfirm ||
                  errors.passwordConfirm?.message,
              )}
              isPasswordInput
              onChange={onChange}
              value={value}
              errorMessage={
                arrErrorRequest.passwordConfirm ||
                errors.passwordConfirm?.message
              }
            />
          )}
        />
      </View>

      <View style={styles.mt91}>
        <IfMessage
          ifMessage="Already have an account?"
          thenMessage="Log in"
          onClick={() => onNavigate('LogIn')}
        />
      </View>

      <View style={styles.mt20}>
        <CustomButton
          onClick={handlerClickButtonSubmit}
          title="Continue"
          status={loading ? 'loading' : 'waiting'}
        />
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
