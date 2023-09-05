import { ImageBackground, StyleSheet, Text } from "react-native";
import DeleteButton from "./ui/delete-button/delete-button";
import CustomButton from "./ui/custom-button/custom-button";
import ProfileImg from "./ui/profile-img/profile-img";

const Index = () => {
  return (
    <ImageBackground
      source={require("./assets/img/welcome-bg.jpg")}
      style={styles.wrapper}
    >
      <CustomButton title="hello" />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    color: "white",
    // fontFamily: "Outfit-SemiBold"
  }
})

export default Index;