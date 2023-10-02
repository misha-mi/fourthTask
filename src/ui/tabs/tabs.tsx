import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ITabsProps } from './type';
import { TSort } from '../../types';
import { stylesText } from '../../global-styles';

const tabs: TSort[] = ['new', 'top'];

const Tabs = ({ sort, setSort }: ITabsProps) => {
  const { defaultTabColor, activeTabColor, defaultTextColor, activeTextColor } =
    useTheme().colors.myColors.tabsColors;

  return (
    <View style={styles.wrapper}>
      {tabs.map((item, id) => {
        const tabColor = sort === item ? activeTabColor : defaultTabColor;
        const textColor = sort === item ? activeTextColor : defaultTextColor;
        return (
          <Pressable
            key={id}
            style={{ ...styles.item, backgroundColor: tabColor }}
            onTouchEnd={() => setSort(item)}>
            <Text
              style={[
                stylesText.outfitRegular18,
                { color: textColor, textAlign: 'center' },
              ]}>
              {item.slice(0, 1).toUpperCase() + item.slice(1)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 47,
    borderRadius: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    height: 47,
    justifyContent: 'center',
  },
});
export default Tabs;
