import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { IPostCard } from './type';
import ProfileImg from '../../ui/profile-img/profile-img';
import IconButton from '../../ui/icon-button/icon-button';
import HeartSVG from '../../assets/svg/heart-svg';
import ShareSVG from '../../assets/svg/share-svg';
import { useTheme } from '@react-navigation/native';
import DeleteButton from '../../ui/delete-button/delete-button';
import { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { LIKE_POST } from '../../apollo/service/like-post';
import { UNLIKE_POST } from '../../apollo/service/unlike-post';
import { GET_FAVORITES_POSTS } from '../../apollo/service/get-favorites-posts';

const PostCard = ({ isOpen, postData }: IPostCard) => {
  const [likePost] = useMutation(LIKE_POST);
  const [unlikePost] = useMutation(UNLIKE_POST);

  const {
    title,
    createdAt,
    description,
    isLiked,
    likesCount,
    mediaUrl,
    author,
    id,
  } = postData;

  const { backgroundColor, titleColor, textColor } =
    useTheme().colors.postCardColors;

  const WIDTH = Dimensions.get('window').width;

  const refScroll = useRef<ScrollView>(null);

  const postColor = isOpen ? 'transparent' : backgroundColor;

  const headerJustifyContent = isOpen
    ? styles.justifyContentC
    : styles.justifyContentSB;

  const showTitle = !isOpen ? (
    <Text style={{ ...styles.title, color: titleColor }}>{title}</Text>
  ) : null;

  const handlerTouchEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const lengthForDelete = Math.floor(
      event.nativeEvent.contentSize.width -
        event.nativeEvent.layoutMeasurement.width,
    );

    if (refScroll.current) {
      lengthForDelete >= event.nativeEvent.contentOffset.x
        ? refScroll.current?.scrollTo({ x: 0, y: 0, animated: true })
        : console.log(lengthForDelete, event.nativeEvent.contentOffset.x);
    }
  };

  const handlerLike = () => {
    const options = {
      variables: { id },
      refetchQueries: [GET_FAVORITES_POSTS, 'GetFavoritesPosts'],
    };
    isLiked ? unlikePost(options) : likePost(options);
  };

  return (
    <ScrollView
      horizontal
      ref={refScroll}
      onScrollEndDrag={handlerTouchEnd}
      showsHorizontalScrollIndicator={false}>
      <View style={[{ backgroundColor: postColor, width: WIDTH }, styles.post]}>
        <View style={[headerJustifyContent, styles.flexRow]}>
          {showTitle}
          <Text style={{ ...styles.text, color: textColor }}>{createdAt}</Text>
        </View>

        <Image source={{ uri: mediaUrl }} style={styles.image} />

        {isOpen ? (
          <Text style={[{ ...styles.text, color: textColor }, styles.mt20]}>
            {description}
          </Text>
        ) : null}

        <View style={[styles.justifyContentSB, styles.flexRow, styles.mt20]}>
          <View style={[styles.gap8, styles.flexRow]}>
            <ProfileImg userImg={author.avatarUrl} size="verySmall" />
            <Text style={{ ...styles.text, color: textColor }}>
              {author.firstName}
            </Text>
          </View>

          <View style={[styles.gap12, styles.flexRow]}>
            <View style={[styles.gap8, styles.flexRow]}>
              <IconButton
                onRenderSVG={color => <HeartSVG color={color} />}
                isActive={isLiked}
                onClick={handlerLike}
              />
              <Text style={{ ...styles.text, color: titleColor }}>
                {likesCount}
              </Text>
            </View>

            <IconButton onRenderSVG={color => <ShareSVG color={color} />} />
          </View>
        </View>
      </View>
      <DeleteButton />
    </ScrollView>
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
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
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
});

export default PostCard;
