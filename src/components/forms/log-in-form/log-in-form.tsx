import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../../ui/input/input';
import CustomButton from '../../../ui/custom-button/custom-button';
import IfMessage from '../../../ui/if-message/if-message';
import { ILogIntFormProps, TErrorArr, TInputs } from './type';
import { THandlerGenerateStatus } from '../join-us-form/type';
import { useLazyQuery, useMutation } from '@apollo/client';
import { LOG_IN } from '../../../apollo/service/log-in';
import { setToken } from '../../../storage/storage';
import { GET_USER } from '../../../apollo/service/get-user';

const LogInForm = ({ onNavigate }: ILogIntFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(true);

  const [getUser] = useLazyQuery(GET_USER);
  const [logIn, { data: logInData, error: logInError, loading }] = useMutation(
    LOG_IN,
    {
      errorPolicy: 'all',
      onCompleted: data => {
        setToken(data.userSignIn.token);
        getUser();
      },
    },
  );

  const incorrectErrorOrPassword = logInData?.userSignIn?.problem?.message;
  const arrErrorRequest = {
    email: '',
    password: '',
  };

  if (Array.isArray(logInError?.graphQLErrors[0].extensions.errors)) {
    logInError?.graphQLErrors[0].extensions.errors.forEach(
      ({ field, errors }: TErrorArr) => {
        arrErrorRequest[field] =
          errors[0].slice(0, 1).toUpperCase() + errors[0].slice(1);
      },
    );
  }

  const onSubmit = (data: TInputs) => {
    logIn({
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
                incorrectErrorOrPassword ||
                  arrErrorRequest.email ||
                  errors.email?.message,
              )}
              onChange={onChange}
              value={value}
              errorMessage={
                incorrectErrorOrPassword ||
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
          }}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              status={handlerGenerateStatus(
                incorrectErrorOrPassword ||
                  arrErrorRequest.password ||
                  errors.password?.message,
              )}
              isPasswordInput
              onChange={onChange}
              value={value}
              errorMessage={
                incorrectErrorOrPassword ||
                arrErrorRequest.password ||
                errors.password?.message
              }
            />
          )}
        />
      </View>

      <View style={styles.mt91}>
        <IfMessage
          ifMessage="No account?"
          thenMessage="Register"
          onClick={() => onNavigate('JoinUs')}
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

export default LogInForm;
