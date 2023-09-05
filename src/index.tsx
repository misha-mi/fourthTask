import { ImageBackground, StyleSheet } from "react-native";
import DeleteButton from "./ui/delete-button/delete-button";
import CustomButton from "./ui/custom-button/custom-button";
import ProfileImg from "./ui/profile-img/profile-img";


const Index = () => {
  return (
    <ImageBackground
      source={require("./assets/img/welcome-bg.jpg")}
      style={styles.wrapper}
    >
      {/* <DeleteButton /> */}
      <CustomButton title="hello" />
      {/* <ProfileImg /> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Index;