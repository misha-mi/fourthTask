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

const Index = () => {
  return (
    <ImageBackground
      source={require('./assets/img/welcome-bg.jpg')}
      style={styles.wrapper}>
      <ScrollView>
        <Text style={styles.text}>Profile Image</Text>
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
  bgWhite: {
    padding: 10,
    borderRadius: 10,
    gap: 6,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
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
