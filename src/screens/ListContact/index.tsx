import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AlphabetList} from 'react-native-section-alphabet-list';

import Metrics from '@/assets/metrics';
import {StyledImage, StyledInput} from '@/components/base';
import HomeHeader from '@/components/common/HomeHeader';

const ListContact = () => {
  const data = [
    {phone: '0977272123', key: 1, value: 'Nguyễn Tiến Nam'},
    {phone: '0977272123', key: 2, value: 'Vũ Mạnh Linh'},
    {phone: '0977272123', key: 3, value: 'Winston Smith'},
    {phone: '0977272123', key: 4, value: 'William Blazkowicz'},
    {phone: '0977272123', key: 5, value: 'Gordon Comstock'},
    {phone: '0977272123', key: 6, value: 'Philip Ravelston'},
    {phone: '0977272123', key: 7, value: 'Rosemary Waterlow'},
    {phone: '0977272123', key: 8, value: 'Julia Comstock'},
    {phone: '0977272123', key: 9, value: 'Mihai Maldonado'},
    {phone: '0977272123', key: 10, value: 'Murtaza Molina'},
    {phone: '0977272123', key: 11, value: 'Peter Petigrew'},
    {phone: '0977272123', key: 12, value: 'Trần Thái Hà'},
    {phone: '0977272123', key: 13, value: 'Bảo Ngọc'},
  ];
  return (
    <View style={styles.container}>
      <HomeHeader title="Liên hệ" />
      <StyledInput
        placeholder="Tìm kiếm danh bạ"
        containerStyle={styles.searchBarView}
        customStyle={styles.searchBarInput}
      />
      <AlphabetList
        style={styles.list}
        data={data}
        indexLetterStyle={styles.indexLetterStyle}
        indexLetterContainerStyle={styles.indexLetterContainerStyle}
        renderCustomSectionHeader={section => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderLabel}>{section.title}</Text>
          </View>
        )}
        renderCustomItem={item => (
          <View style={styles.listItemContainer}>
            <StyledImage
              source={{uri: `https://i.pravatar.cc/150?img=${item.key}`}}
              customStyle={styles.avatar}
            />
            <View>
              <Text style={styles.listItemLabel}>{item.value}</Text>
              <Text style={styles.listItemLabel2}>{item.phone}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 10,
    paddingBottom: Metrics.safeBottomPadding + 56,
    flex: 1,
    backgroundColor: 'rgba(242, 165, 74, 0.01)',
  },
  searchBarView: {
    paddingHorizontal: 10,
    width: '100%',
  },
  searchBarInput: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
  },
  list: {
    paddingTop: 10,
  },
  indexLetterStyle: {
    color: '#F2A54A',
    fontSize: 13,
  },
  indexLetterContainerStyle: {
    // paddingRight: 10,
  },
  sectionHeaderContainer: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionHeaderLabel: {},
  listItemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  listItemLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  listItemLabel2: {
    color: '#828282',
    fontSize: 14,
    marginTop: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 16,
  },
});

export default ListContact;
