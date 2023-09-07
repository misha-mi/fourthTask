import { Image, StyleSheet, Text, View } from 'react-native';
import { IPostCard } from './type';
import ProfileImg from '../../ui/profile-img/profile-img';
import IconButton from '../../ui/icon-button/icon-button';
import HeartSVG from '../../assets/svg/heart-svg';
import ShareSVG from '../../assets/svg/share-svg';
import { DARK_THEME, LIGHT_THEME } from '../../assets/colors';

const { color3, color7, color1 } = true ? DARK_THEME : LIGHT_THEME;

const PostCard = ({ isOpen }: IPostCard) => {
  const backgroundColor = isOpen ? 'transparent' : color7;

  const headerJustifyContent = isOpen
    ? styles.justifyContentC
    : styles.justifyContentSB;

  const title = !isOpen ? <Text style={styles.title}>Apple love</Text> : null;

  return (
    <View style={[{ backgroundColor: backgroundColor }, styles.post]}>
      <View style={[headerJustifyContent, styles.flexRow]}>
        {title}
        <Text style={styles.text}>11.09.22</Text>
      </View>
      <Image
        source={require('../../assets/img/upload.jpg')}
        style={styles.image}
      />
      {isOpen ? (
        <Text style={[styles.text, styles.mt20]}>
          The Queen of the Carnival in Rio de Janeiro and up to two princesses
          having the duty to woo the revelry, along with the King Momo. Unlike
          some cities, in the city of Rio de Janeiro, Queens of Carnival do not
          see a certain school of samba. In competitions, princesses are usually
          placed as second and third, and are correspondingly 1st and
          2nd Princess. Some of them after the reign become queens or battery
          bridesmaids. Incorporated into every aspect of the Rio carnival are
          dancing and music. The most famous dance is carnival samba,
          a Brazilian dance with African influences. The samba remains a popular
          dance not only in carnival but in the ghettos outside of the main
          cities.Some of them after the reign become queens or battery
          bridesmaids. Incorporated into every aspect of the Rio
        </Text>
      ) : null}
      <View style={[styles.justifyContentSB, styles.flexRow, styles.mt20]}>
        <View style={[styles.gap8, styles.flexRow]}>
          <ProfileImg userImg="../../assets/img/user.png" size="verySmall" />
          <Text style={styles.text}>Hannah K.</Text>
        </View>
        <View style={[styles.gap12, styles.flexRow]}>
          <View style={[styles.gap8, styles.flexRow]}>
            <IconButton onRenderSVG={color => <HeartSVG color={color} />} />
            <Text style={[styles.text, styles.colorWhite]}>137</Text>
          </View>
          <IconButton onRenderSVG={color => <ShareSVG color={color} />} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  justifyContentSB: {
    justifyContent: 'space-between',
  },
  justifyContentC: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: color1,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: color3,
  },
  image: {
    width: 'auto',
    marginTop: 12,
    height: 200,
    borderRadius: 17,
  },
  mt20: {
    marginTop: 20,
  },
  gap8: {
    gap: 8,
  },
  gap12: {
    gap: 12,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorWhite: {
    color: color1,
  },
});

export default PostCard;
