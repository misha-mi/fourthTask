import { useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IVerticalSlider, THandlerRenderItem } from './type';

const FONT_SIZE = 20;
const HEIGHT_ITEM = FONT_SIZE + 4;
const HEIGHT_WRAPPER = getHeightWrapper();
const HEIGHT_EXTREME_ELEMENT = 8;

function getHeightWrapper() {
  let heightWrapper = HEIGHT_ITEM;
  for (let i = 1; i < 5; i++) {
    heightWrapper += (FONT_SIZE - i * 3.5 + 4) * 2;
  }
  return heightWrapper;
}

const VerticalSlider = ({
  data,
  value,
  setValue,
  alignItemValue,
}: IVerticalSlider) => {
  const refSlider = useRef<ScrollView>(null);
  const [offset, setOffset] = useState(0);

  const arr = [...data.slice(-5), ...data, ...data.slice(0, 5)];

  let valueId = data.indexOf(value) + 1;
  if (valueId <= 0) {
    setValue(data[0]);
    valueId = 1;
  }

  const handlerScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const offsetEnd = event.nativeEvent.contentSize.height - HEIGHT_WRAPPER;
    if (refSlider.current) {
      if (offsetY === 0) {
        refSlider.current.scrollTo({
          y: offsetEnd - 8,
          animated: false,
        });
        setOffset(offsetEnd);
      } else if (offsetY >= offsetEnd) {
        refSlider.current.scrollTo({
          y: HEIGHT_EXTREME_ELEMENT,
          animated: false,
        });
        setOffset(HEIGHT_EXTREME_ELEMENT);
      } else {
        setOffset(offsetY);
      }
    }
  };

  const handlerMomentScrollEnd = () => {
    if (refSlider.current) {
      const itemId = Math.round(offset / HEIGHT_EXTREME_ELEMENT);
      refSlider.current.scrollTo({
        y: itemId * HEIGHT_EXTREME_ELEMENT,
      });
      setValue(data[itemId - 1] || data[0]);
    }
  };

  const handlerGetIndex = () => {
    return Math.round(offset / HEIGHT_EXTREME_ELEMENT) + 4;
  };

  const handlerRenderItem: THandlerRenderItem = (item, index) => {
    let fontSize = HEIGHT_EXTREME_ELEMENT - 4;

    const indexActiveItem = handlerGetIndex();
    if (Math.abs(indexActiveItem - index) <= 4) {
      fontSize =
        FONT_SIZE -
        (Math.abs(offset * 3 - (index - 4) * HEIGHT_ITEM) / HEIGHT_ITEM) * 3.5;
    }

    const opacity =
      1 - Math.abs(offset * 3 - (index - 4) * HEIGHT_ITEM) / (HEIGHT_ITEM * 5);
    return (
      <Text
        key={index}
        style={{
          height: fontSize + 4,
          lineHeight: fontSize + 4,
          fontSize: fontSize,
          color: `rgba(255,255,255,${opacity || 0.2})`,
          textAlign: 'center',
        }}>
        {item}
      </Text>
    );
  };

  return (
    <View style={{ height: HEIGHT_WRAPPER }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handlerScroll}
        contentOffset={{ y: valueId * HEIGHT_EXTREME_ELEMENT, x: 0 }}
        ref={refSlider}
        onMomentumScrollEnd={handlerMomentScrollEnd}>
        <View style={{ alignItems: alignItemValue }}>
          {arr.map(handlerRenderItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default VerticalSlider;
