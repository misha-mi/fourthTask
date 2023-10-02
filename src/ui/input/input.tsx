import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { IInputProps } from './type';
import { useState } from 'react';
import CheckSVG from '../../assets/svg/check-svg';
import ShowSVG from '../../assets/svg/show-svg';
import NoShowSVG from '../../assets/svg/no-show-svg';
import { useTheme } from '@react-navigation/native';
import { stylesText } from '../../global-styles';

const Input = ({
  placeholder,
  label,
  status,
  isPasswordInput,
  onChange,
  value,
  errorMessage,
  isPhonePad,
  isTextArea,
}: IInputProps) => {
  const {
    labelColor,
    initialColor,
    typingColor,
    successColor,
    errorColor,
    caretColor,
  } = useTheme().colors.myColors.inputColors;

  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [height, setHeight] = useState(0);

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
  const heightInput = { height: height };

  const showSVG = !isShow ? (
    <NoShowSVG color={statusColor} />
  ) : (
    <ShowSVG color={statusColor} />
  );

  return (
    <View>
      <Text
        style={{
          ...stylesText.outfitSemiBold14,
          color: labelStatusColor,
        }}>
        {label}
      </Text>
      <View style={styles.wrapper}>
        <TextInput
          style={[
            styles.input,
            stylesText.outfitRegular16,
            underlineInput,
            textColor,
            heightInput,
          ]}
          secureTextEntry={isPasswordInput && !isShow}
          editable={status !== 'disabled'}
          placeholder={placeholder}
          placeholderTextColor={statusColor}
          selectionColor={caretColor}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChangeText={onChange}
          keyboardType={isPhonePad ? 'phone-pad' : 'default'}
          multiline={isTextArea}
          onContentSizeChange={e => setHeight(e.nativeEvent.contentSize.height)}
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
  input: {
    width: 'auto',
    padding: 0,
    paddingTop: 14,
    paddingBottom: 14,
  },
  positionSVG: {
    position: 'absolute',
    right: 0,
    top: 17,
  },
});

export default Input;
