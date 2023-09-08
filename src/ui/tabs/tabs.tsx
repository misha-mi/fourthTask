import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const tabs = ['New', 'Top'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { defaultTabColor, activeTabColor, defaultTextColor, activeTextColor } =
    useTheme().colors.tabsColors;

  return (
    <View style={styles.wrapper}>
      {tabs.map((item, id) => {
        const tabColor = id === activeTab ? activeTabColor : defaultTabColor;
        const textColor = id === activeTab ? activeTextColor : defaultTextColor;
        return (
          <Pressable
            key={id}
            style={{ ...styles.item, backgroundColor: tabColor }}
            onTouchEnd={() => setActiveTab(id)}>
            <Text style={{ ...styles.text, color: textColor }}>{item}</Text>
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
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Outfit-Regular',
  },
});
export default Tabs;
