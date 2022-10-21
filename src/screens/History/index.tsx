/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Icons} from '@/assets';
import {StyledIcon, StyledText, StyledTouchable} from '@/components/base';
import HomeHeader from '@/components/common/HomeHeader';

const HistoryItem = ({item}) => {
  return (
    <StyledTouchable customStyle={styles.itemContainer}>
      <View style={{flexDirection: 'row'}}>
        <StyledIcon
          source={
            item.type === 'phone' ? Icons.missPhoneCall : Icons.missVideoCall
          }
          size={20}
          customStyle={styles.itemTypeIcon}
        />
        <View>
          <StyledText customStyle={styles.itemName} originValue={item.value} />
          <StyledText customStyle={styles.itemPhone} originValue={item.phone} />
        </View>
      </View>
      <View style={styles.itemInfoView}>
        <StyledText originValue={item.date} customStyle={styles.itemDate} />
        <StyledIcon source={Icons.infoCall} size={20} />
      </View>
    </StyledTouchable>
  );
};

const History = () => {
  const data = [
    {
      phone: '0977272123',
      date: 'Hôm Nay',
      type: 'phone',
      key: 1,
      value: 'Nguyễn Tiến Nam',
    },
    {
      phone: '0977272123',
      date: 'Hôm Nay',
      type: 'phone',
      key: 2,
      value: 'Vũ Mạnh Linh',
    },
    {
      phone: '0977272123',
      date: 'Hôm Nay',
      type: 'video',
      key: 3,
      value: 'Winston Smith',
    },
    {
      phone: '0977272123',
      date: 'Thứ Bảy',
      type: 'phone',
      key: 4,
      value: 'William Blazkowicz',
    },
    {
      phone: '0977272123',
      date: 'Thứ Bảy',
      type: 'phone',
      key: 5,
      value: 'Gordon Comstock',
    },
    {
      phone: '0977272123',
      date: 'Thứ Tư',
      type: 'video',
      key: 6,
      value: 'Philip Ravelston',
    },
    {
      phone: '0977272123',
      date: 'Thứ Tư',
      type: 'phone',
      key: 7,
      value: 'Rosemary Waterlow',
    },
    {
      phone: '0977272123',
      date: 'Thứ Tư',
      type: 'phone',
      key: 8,
      value: 'Julia Comstock',
    },
    {
      phone: '0977272123',
      date: 'Thứ Ba',
      type: 'video',
      key: 9,
      value: 'Mihai Maldonado',
    },
    {
      phone: '0977272123',
      date: 'Thứ Hai',
      type: 'phone',
      key: 10,
      value: 'Murtaza Molina',
    },
    {
      phone: '0977272123',
      date: 'Thứ Hai',
      type: 'phone',
      key: 11,
      value: 'Peter Petigrew',
    },
    {
      phone: '0977272123',
      date: 'Thứ Hai',
      type: 'video',
      key: 12,
      value: 'Trần Thái Hà',
    },
    {phone: '0977272123', date: '', type: 'phone', key: 13, value: 'Bảo Ngọc'},
  ];
  return (
    <View style={styles.container}>
      <HomeHeader title="Lịch sử" />
      <FlatList
        data={data}
        renderItem={({item}) => <HistoryItem item={item} key={item.key} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTypeIcon: {
    marginRight: 17,
  },
  itemName: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemPhone: {
    color: '#828282',
    fontSize: 14,
    marginTop: 8,
  },
  itemDate: {
    color: '#828282',
    fontSize: 13,
    marginRight: 27,
  },
  itemInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default History;
