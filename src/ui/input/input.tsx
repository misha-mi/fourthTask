import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { IInput } from './type';
import { INPUT_COLORS } from './colors';
import { useState } from 'react';
import CheckSVG from '../../assets/svg/check-svg';
import ShowSVG from '../../assets/svg/show-svg';
import NoShowSVG from '../../assets/svg/no-show-svg';

const {
  labelColor,
  initialColor,
  typingColor,
  disabledColor,
  successColor,
  errorColor,
  caretColor,
} = INPUT_COLORS;

const Input = ({ placeholder, label, status, isPasswordInput }: IInput) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);

  let statusColor: string;

  switch (status) {
    case 'disabled':
      statusColor = disabledColor;
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

  const showSVG = !isShow ? (
    <NoShowSVG color={statusColor} />
  ) : (
    <ShowSVG color={statusColor} />
  );

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapper}>
        <TextInput
          secureTextEntry={isPasswordInput && !isShow}
          editable={status !== 'disabled'}
          placeholder={placeholder}
          placeholderTextColor={initialColor}
          selectionColor={caretColor}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChangeText={setValue}
          style={[styles.input, underlineInput, textColor]}
        />
        <View style={styles.positionSVG}>
          {status === 'success' && !isPasswordInput ? (
            <CheckSVG color={successColor} />
          ) : null}
          <Pressable
            onTouchEnd={() =>
              setIsShow(isShow => !isShow && status !== 'disabled')
            }>
            {isPasswordInput ? showSVG : null}
          </Pressable>
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
    color: labelColor,
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
