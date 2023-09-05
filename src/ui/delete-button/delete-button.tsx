import { Text, Pressable, StyleSheet } from 'react-native';
import TrashSVG from '../../assets/svg/trash-svg';
import { LIGHT_THEME } from '../../assets/colors';

const DeleteButton = () => {
  return (
    <Pressable style={styles.wrapper}>
      <TrashSVG />
      <Text style={styles.text}>Delete</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 73,
    height: 364,
    backgroundColor: LIGHT_THEME.errorColor,
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
