import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../../ui/custom-button/custom-button';
import VerticalSlider from '../../ui/vertical-slider/vertical-slider';
import Input from '../../ui/input/input';
import { useTheme } from '@react-navigation/native';
import { IDatePickerProps } from './type';
import { stylesText } from '../../global-styles';

const DatePicker = ({ setDate, date }: IDatePickerProps) => {
  const { color1, color7 } = useTheme().colors.myColors.defaultColors;

  const [modalVisible, setModalVisible] = useState(false);
  const [day, setDay] = useState('1');
  const [month, setMonth] = useState('January');
  const [year, setYear] = useState('2023');

  const getMonthsArr = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date(0, i).toLocaleString('en-US', { month: 'long' });
      arr.push(month);
    }
    return arr;
  };

  const handlerAddZero = (num: string | number) => {
    if (+num < 10) {
      return '0' + num;
    }
    return num.toString();
  };

  const getDaysArr = (year: string, month: number) => {
    const endDay = new Date(+year, month - 1, 0).getDate();
    const arr: string[] = [];
    for (let i = 1; i <= endDay; i++) {
      arr.push(handlerAddZero(i));
    }
    return arr;
  };

  const getYearsArr = (yearStart: number) => {
    const yearEnd = new Date().getFullYear();
    const arr = [];
    for (let i = yearStart; i <= yearEnd; i++) {
      arr.push(i.toString());
    }
    return arr;
  };

  const getIndexMonth = (month: string) => {
    for (let i = 0; i < 12; i++) {
      const monthCompare = new Date(0, i).toLocaleString('en-US', {
        month: 'long',
      });
      if (monthCompare === month) return i;
    }
    return 0;
  };

  const handlerConfirm = () => {
    const monthId = handlerAddZero(getIndexMonth(month) + 1);
    setDate(`${year}-${monthId}-${day}`);
    setModalVisible(false);
  };

  return (
    <View>
      <Pressable onTouchEnd={() => setModalVisible(true)}>
        <Input
          label="B-day"
          placeholder="Select date of birth"
          value={date}
          status="disabled"
        />
      </Pressable>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            ...styles.modalView,
            backgroundColor: color7,
            padding: 16,
          }}>
          <Text
            style={[
              stylesText.outfitSemiBold16,
              {
                color: color1,
                textAlign: 'center',
              },
            ]}>
            Pick the date of your birth
          </Text>

          <View
            style={[{ backgroundColor: color1 }, styles.divider, styles.mt18]}
          />

          <View style={styles.wrapper}>
            <View
              style={[
                { backgroundColor: color1 },
                styles.divider,
                styles.positionTop,
              ]}></View>
            <View style={styles.wrapperSliders}>
              <View style={{ flexBasis: 100 }}>
                <VerticalSlider
                  data={getDaysArr(year, getIndexMonth(month))}
                  value={day}
                  setValue={setDay}
                  alignItemValue={'flex-end'}
                />
              </View>

              <View style={{ flexBasis: 100 }}>
                <VerticalSlider
                  data={getMonthsArr()}
                  value={month}
                  setValue={setMonth}
                  alignItemValue={'center'}
                />
              </View>

              <View style={{ flexBasis: 100 }}>
                <VerticalSlider
                  data={getYearsArr(1970)}
                  value={year}
                  setValue={setYear}
                  alignItemValue={'flex-start'}
                />
              </View>
            </View>

            <View
              style={[
                { backgroundColor: color1 },
                styles.divider,
                styles.positionBottom,
              ]}
            />
          </View>
        </View>
        <View style={styles.modalView}>
          <CustomButton
            title="Confirm"
            size="medium"
            onClick={handlerConfirm}
          />
          <CustomButton
            title="Cancel"
            size="medium"
            onClick={() => setModalVisible(false)}
            isRedText
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 49,
  },
  modalView: {
    width: 'auto',
    margin: 20,
    borderRadius: 15,
    gap: 1,
    backgroundColor: '#696969',
    overflow: 'hidden',
  },
  wrapper: {
    position: 'relative',
    marginTop: 18,
  },
  divider: {
    height: 1,
    width: '100%',
  },
  positionBottom: {
    position: 'absolute',
    bottom: '50%',
    transform: [{ translateY: -12 }],
  },
  positionTop: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: 12 }],
  },
  wrapperSliders: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  mt18: {
    marginTop: 18,
  },
});

export default DatePicker;
