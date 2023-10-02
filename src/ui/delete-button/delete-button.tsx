import { Text, Pressable, StyleSheet } from 'react-native';
import TrashSVG from '../../assets/svg/trash-svg';
import { useTheme } from '@react-navigation/native';
import { IDeleteButtonProps } from './type';
import { stylesText } from '../../global-styles';

const DeleteButton = ({ onDelete }: IDeleteButtonProps) => {
  const { backgroundColor, textColor } =
    useTheme().colors.myColors.deleteButtonColors;

  return (
    <Pressable
      style={{ ...styles.wrapper, backgroundColor: backgroundColor }}
      onTouchEnd={onDelete}>
      <TrashSVG color={textColor} />
      <Text style={{ ...stylesText.outfitRegular14, color: textColor }}>
        Delete
      </Text>
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
});

export default DeleteButton;
