import {StyleSheet} from 'react-native';

import {Themes} from '@/assets/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    width: 100,
    height: 100,
  },
  containerTitle: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    color: Themes.COLORS.base,
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
    lineHeight: 35,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
  },
  bottomButtons: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },
  noLoginText: {
    fontStyle: 'italic',
    color: '#828282',
    marginBottom: 24,
  },
  loginButton: {
    borderRadius: 4,
    borderColor: Themes.COLORS.base,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 14,
    width: '100%',
  },
  loginText: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  loginBaseButton: {
    backgroundColor: Themes.COLORS.base,
    marginBottom: 12,
  },
  loginBaseText: {
    color: Themes.COLORS.white,
  },
  loginManualButton: {
    //
  },
  loginManualText: {
    color: Themes.COLORS.base,
  },
});

export default styles;
