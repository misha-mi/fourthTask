import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import DeleteButton from './ui/delete-button/delete-button';
import ProfileImg from './ui/profile-img/profile-img';
import CustomButton from './ui/custom-button/custom-button';
import Upload from './ui/upload/upload';
import CopyInput from './ui/copy-input/copy-input';

const Index = () => {
  return (
    <ImageBackground
      source={require('./assets/img/welcome-bg.jpg')}
      style={styles.wrapper}>
      <ScrollView>
        {/* <Text style={styles.text}>Profile Image</Text>
        <ProfileImg />
        <ProfileImg size="medium" userImg="../../assets/img/user.png" />
        <ProfileImg size="small" />

        <Text style={styles.text}>Delete Button</Text>
        <DeleteButton />

        <Text style={styles.text}>Custom Button</Text>
        <View style={styles.container}>
          <CustomButton title="Create an account" />
          <CustomButton title="Create an account" status="loading" />
          <CustomButton title="Create an account" status="disabled" />
          <View style={styles.wrapperMedium}>
            <CustomButton title="Create an account" size="medium" />
            <CustomButton
              title="Create an account"
              status="loading"
              size="medium"
            />
            <CustomButton
              title="Create an account"
              status="disabled"
              size="medium"
            />
            <CustomButton title="Error" size="medium" isRedText />
          </View>
        </View>

        <Text style={styles.text}>Upload</Text>
        <View style={styles.container}>
          <Upload isEmpty={true} />
          <Upload isEmpty={false} />
        </View> */}

        <Text style={styles.text}>Copy Input</Text>
        <View style={styles.container}>
          <CopyInput textCopy="Hello" />
          <CopyInput textCopy="Hello" status="loading" />
          <CopyInput textCopy="Hello" status="disabled" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Nokwy',
    backgroundColor: 'green',
  },
  container: {
    width: 343,
    alignItems: 'stretch',
    gap: 10,
  },
  wrapperMedium: {
    borderRadius: 22,
    overflow: 'hidden',
  },
});

export default Index;
