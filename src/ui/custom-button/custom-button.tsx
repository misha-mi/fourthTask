import { ActivityIndicator, View, Pressable, Text, StyleSheet } from "react-native";
import { DARK_THEME, LIGHT_THEME } from "../../assets/colors";

const { primaryDefault, primaryPressed, color7 } = LIGHT_THEME;

const CustomButton = ({ title, onClick, size = "large" }: ICustomButton) => {


  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? primaryPressed : primaryDefault,
        },
        styles.wrapper,
      ]}
    >
      {/* <Text style={styles.text}>{title}</Text> */}
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 343,
    height: 56,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center"
  },
  large: {
    width: 343,
    height: 56,
    backgroundColor: primaryDefault,
  },
  text: {
    color: color7,
    fontSize: 16
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})

export default CustomButton;