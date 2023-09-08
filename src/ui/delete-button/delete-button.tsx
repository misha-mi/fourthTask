import { Text, Pressable, StyleSheet } from 'react-native';
import TrashSVG from '../../assets/svg/trash-svg';
import { useTheme } from '@react-navigation/native';

const DeleteButton = () => {
  const { backgroundColor, textColor } = useTheme().colors.deleteButtonColors;

  return (
    <Pressable style={[styles.wrapper, { backgroundColor: backgroundColor }]}>
      <TrashSVG color={textColor} />
      <Text style={[styles.text, { color: textColor }]}>Delete</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 73,
    height: 364,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#F4F5F4',
  },
});

export default DeleteButton;
