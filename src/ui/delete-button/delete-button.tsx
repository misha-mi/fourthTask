
import { Text, Pressable, StyleSheet } from "react-native";
import TrashSVG from "../../assets/svg/trash-svg";
import { LIGHT_THEME } from "../../assets/colors";

const DeleteButton = () => {
  return (
    <Pressable style={style.wrapper}>
      <TrashSVG />
      <Text>Delete</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  wrapper: {
    width: 73,
    height: 364,
    backgroundColor: LIGHT_THEME.errorColor,
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  }
})

export default DeleteButton;