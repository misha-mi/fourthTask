import { Text, Pressable, StyleSheet } from 'react-native';
import TrashSVG from '../../assets/svg/trash-svg';
import { useTheme } from '@react-navigation/native';
import { IDeleteButton } from './type';

const DeleteButton = ({ onDelete }: IDeleteButton) => {
  const { backgroundColor, textColor } =
    useTheme().colors.myColors.deleteButtonColors;

  return (
    <Pressable
      style={{ ...styles.wrapper, backgroundColor: backgroundColor }}
      onTouchEnd={onDelete}>
      <TrashSVG color={textColor} />
      <Text style={{ ...styles.text, color: textColor }}>Delete</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 73,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
  },
});

export default DeleteButton;
