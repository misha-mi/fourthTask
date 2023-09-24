import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { IInput } from './type';
import { useState } from 'react';
import CheckSVG from '../../assets/svg/check-svg';
import ShowSVG from '../../assets/svg/show-svg';
import NoShowSVG from '../../assets/svg/no-show-svg';
import { useTheme } from '@react-navigation/native';

const Input = ({
  placeholder,
  label,
  status,
  isPasswordInput,
  onChange,
  value,
  errorMessage,
  isPhonePad,
}: IInput) => {
  const {
    labelColor,
    initialColor,
    typingColor,
    disabledColor,
    successColor,
    errorColor,
    caretColor,
  } = useTheme().colors.inputColors;

  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);

  let statusColor: string;

  switch (status) {
    case 'disabled':
      statusColor = initialColor;
      break;
    case 'success':
      statusColor = successColor;
      break;
    case 'error':
      statusColor = errorColor;
      break;
    case 'waiting':
      statusColor = isFocus || value ? typingColor : initialColor;
      break;
  }

  const underlineInput = { borderBottomWidth: 2, borderColor: statusColor };
  const textColor = { color: statusColor };
  const labelStatusColor = status === 'waiting' ? labelColor : statusColor;

  const showSVG = !isShow ? (
    <NoShowSVG color={statusColor} />
  ) : (
    <ShowSVG color={statusColor} />
  );

  return (
    <View>
      <Text
        style={{
          ...styles.label,
          color: labelStatusColor,
        }}>
        {label}
      </Text>
      <View style={styles.wrapper}>
        <TextInput
          secureTextEntry={isPasswordInput && !isShow}
          editable={status !== 'disabled'}
          placeholder={placeholder}
          placeholderTextColor={statusColor}
          selectionColor={caretColor}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChangeText={onChange}
          style={[styles.input, underlineInput, textColor]}
          keyboardType={isPhonePad ? 'phone-pad' : 'default'}
        />

        <Text style={{ color: statusColor, marginTop: 6 }}>{errorMessage}</Text>

        <View style={styles.positionSVG}>
          {status === 'success' && !isPasswordInput ? (
            <CheckSVG color={successColor} />
          ) : (
            <Pressable
              onTouchEnd={() =>
                setIsShow(isShow => !isShow && status !== 'disabled')
              }>
              {isPasswordInput ? showSVG : null}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Outfit-SemiBold',
  },
  input: {
    width: 'auto',
    height: 49,
    padding: 0,
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
  },
  positionSVG: {
    position: 'absolute',
    right: 0,
    top: 17,
  },
});

export default Input;
