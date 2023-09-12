import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Appearance,
} from 'react-native';
import DeleteButton from './ui/delete-button/delete-button';
import ProfileImg from './ui/profile-img/profile-img';
import CustomButton from './ui/custom-button/custom-button';
import Upload from './ui/upload/upload';
import CopyInput from './ui/copy-input/copy-input';
import TextButton from './ui/text-button/text-button';
import TextWithIconButton from './ui/text-with-icon-button/text-with-icon-button';
import LogOutSVG from './assets/svg/log-out-svg';
import UserSVG from './assets/svg/user-svg';
import MoonSVG from './assets/svg/moon-svg';
import Tapbar from './ui/tapbar/tapbar';
import Tabs from './ui/tabs/tabs';
import CheckInput from './ui/check-input/check-input';
import IconButton from './ui/icon-button/icon-button';
import CloseSVG from './assets/svg/close-svg';
import ArrowSVG from './assets/svg/arrow-svg';
import HeartSVG from './assets/svg/heart-svg';
import ShareSVG from './assets/svg/share-svg';
import PhotoSVG from './assets/svg/photo-svg';
import PostCard from './components/post-card/post-card';
import RoundButton from './ui/round-button/round-button';
import CameraSVG from './assets/svg/camera-svg';
import PlusSVG from './assets/svg/plus-svg';
import Input from './ui/input/input';
import Navigation from './HOC/navigation/navigation';
import WelcomePage from './components/welcome-page/welcome-page';

const Index = () => {
  const handlerChangeColorTheme = () => {
    const theme = Appearance.getColorScheme();
    if (theme === 'dark') {
      Appearance.setColorScheme('light');
    } else {
      Appearance.setColorScheme('dark');
    }
  };

  return (
    <Navigation>
      {/* <ImageBackground
        source={require('./assets/img/welcome-bg.jpg')}
        style={styles.wrapper}>
        <Button title="Change Theme" onPress={handlerChangeColorTheme} />
        <ScrollView>
          <Text style={styles.text}>Profile Image</Text>
          <ProfileImg />
          <ProfileImg size="medium" userImg="../../assets/img/user.png" />
          <ProfileImg size="small" />
          <ProfileImg size="verySmall" userImg="../../assets/img/user.png" />

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
          </View>

          <Text style={styles.text}>Copy Input</Text>
          <View style={styles.container}>
            <CopyInput textCopy="Hello" />
            <CopyInput textCopy="Hello" status="loading" />
            <CopyInput textCopy="Hello" status="disabled" />
          </View>

          <Text style={styles.text}>Text button</Text>
          <View style={styles.bgWhite}>
            <TextButton text="Done" />
            <TextButton text="Done" isDisabled />
          </View>

          <Text style={styles.text}>Text with icon button</Text>
          <View style={styles.bgBlack}>
            <TextWithIconButton
              text="Exit"
              onRenderSVG={(color: string) => (
                <>
                  <LogOutSVG color={color} />
                </>
              )}
            />
            <TextWithIconButton
              text="Exit"
              isDisabled
              onRenderSVG={(color: string) => (
                <>
                  <LogOutSVG color={color} />
                </>
              )}
            />
            <TextWithIconButton
              text="Profile"
              onRenderSVG={(color: string) => (
                <>
                  <UserSVG size="small" color={color} />
                </>
              )}
            />
            <TextWithIconButton
              text="Profile"
              isDisabled
              onRenderSVG={(color: string) => (
                <>
                  <UserSVG size="small" color={color} />
                </>
              )}
            />
            <TextWithIconButton
              text="Night theme"
              onRenderSVG={(color: string) => (
                <>
                  <MoonSVG color={color} />
                </>
              )}
            />
            <TextWithIconButton
              text="Night theme"
              isDisabled
              onRenderSVG={(color: string) => (
                <>
                  <MoonSVG color={color} />
                </>
              )}
            />
          </View>

          <Text style={styles.text}>Tapbar</Text>
          <View style={styles.container}>
            <Tapbar />
          </View>

          <Text style={styles.text}>Tabs</Text>
          <View style={styles.container}>
            <Tabs />
          </View>

          <Text style={styles.text}>Check Input</Text>
          <View style={styles.bgWhite}>
            <CheckInput />
            <CheckInput type="round" />
          </View>

          <Text style={styles.text}>Icon Button</Text>
          <View style={[styles.bgBlack, styles.flexRow]}>
            <View style={styles.gap8}>
              <IconButton onRenderSVG={color => <CloseSVG color={color} />} />
              <IconButton
                onRenderSVG={color => <CloseSVG color={color} />}
                status="disabled"
              />
            </View>
            <View style={styles.gap8}>
              <IconButton onRenderSVG={color => <ArrowSVG color={color} />} />
              <IconButton
                onRenderSVG={color => <ArrowSVG color={color} />}
                status="disabled"
              />
            </View>
            <View style={styles.gap8}>
              <IconButton onRenderSVG={color => <HeartSVG color={color} />} />
              <IconButton
                onRenderSVG={color => <HeartSVG color={color} />}
                status="disabled"
              />
            </View>
            <View style={styles.gap8}>
              <IconButton onRenderSVG={color => <ShareSVG color={color} />} />
              <IconButton
                onRenderSVG={color => <ShareSVG color={color} />}
                status="disabled"
              />
            </View>
            <View style={styles.gap8}>
              <IconButton onRenderSVG={color => <PhotoSVG color={color} />} />
              <IconButton
                onRenderSVG={color => <PhotoSVG color={color} />}
                status="disabled"
              />
            </View>
          </View>

          <Text style={styles.text}>Post Card</Text>
          <View style={[styles.container, styles.bgBlack]}>
            <PostCard />
            <PostCard isOpen />
          </View>

          <Text style={styles.text}>Round Button</Text>
          <View style={[styles.bgBlack, styles.flexRow]}>
            <View style={styles.gap8}>
              <RoundButton
                onRenderSVG={color => <CloseSVG color={color} isSmall />}
                size="small"
                isCloseButton
              />
              <RoundButton
                onRenderSVG={color => <CloseSVG color={color} isSmall />}
                size="small"
                isCloseButton
                isDisabled
              />
            </View>
            <View style={styles.gap8}>
              <RoundButton
                onRenderSVG={color => <CameraSVG color={color} />}
                size="medium"
              />
              <RoundButton
                onRenderSVG={color => <CameraSVG color={color} />}
                size="medium"
                isDisabled
              />
            </View>
            <View style={styles.gap8}>
              <RoundButton
                onRenderSVG={color => <PlusSVG color={color} />}
                size="large"
              />
              <RoundButton
                onRenderSVG={color => <PlusSVG color={color} />}
                size="large"
                isDisabled
              />
            </View>
          </View>

          <Text style={styles.text}>Input</Text>
          <View style={[styles.container, styles.bgBlack]}>
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              status="waiting"
            />
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              status="disabled"
            />
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              status="success"
            />
            <Input
              label="E-mail"
              placeholder="Enter your e-mail"
              status="error"
            />

            <Input
              label="Password"
              isPasswordInput
              placeholder="Enter your password"
              status="waiting"
            />
            <Input
              label="Password"
              isPasswordInput
              placeholder="Enter your password"
              status="disabled"
            />
            <Input
              label="Password"
              isPasswordInput
              placeholder="Enter your password"
              status="success"
            />
            <Input
              label="Password"
              isPasswordInput
              placeholder="Enter your password"
              status="error"
            />
          </View>
        </ScrollView>
      </ImageBackground> */}
      <WelcomePage />
    </Navigation>
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
  bgWhite: {
    padding: 10,
    borderRadius: 10,
    gap: 6,
    backgroundColor: 'white',
  },
  bgBlack: {
    padding: 10,
    borderRadius: 10,
    gap: 6,
    backgroundColor: '#424244',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  gap8: {
    gap: 8,
  },
});

export default Index;
