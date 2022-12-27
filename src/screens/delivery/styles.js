import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 60,
  },
  backButton: {
    marginLeft: 41,
    width: 24,
    height: 24,
  },
  headerText: {
    marginLeft: 96,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
    lineHeight: 21,
    height: 25,
    color: CUSTOM_COLOR.Black,
  },
  screenTheme: {
    marginTop: 45,
    height: 45,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 34,
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  underThemeContainer: {
    marginTop: 45,
    flexDirection: 'row',
  },
  leftUnderTheme: {
    marginLeft: 53,
    fontFamily: FONT_FAMILY.ProTextBold,
    height: 55,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  rightUnderTheme: {
    marginLeft: 121,
    color: CUSTOM_COLOR.UniversityOfTennesseeOrange,

    height: 20,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: FONT_FAMILY.ProTextRegular,
  },
  detailContainer: {
    marginTop: 22,
    backgroundColor: CUSTOM_COLOR.White,
    width: 315,
    height: 156,
    marginHorizontal: 50,
    borderRadius: 20,
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 10},
    shadowColor: CUSTOM_COLOR.Black,
    shadowOpacity: 0.03,
  },
  detailNameContainer: {
    position: 'absolute',
    top: 25,
    left: 30,
    bottom: 103,
    right: 53,
    borderBottomWidth: 0.5,
  },
  detailName: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  detailAddressContainer: {
    position: 'absolute',
    top: 61,
    left: 30,
    right: 53,
    bottom: 51,
    borderBottomWidth: 0.5,
  },
  detailAddress: {
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    lineHeight: 18,
    color: CUSTOM_COLOR.Black,
  },
  detailNumberContainer: {
    paddingLeft: 30,
    marginTop: 113,
  },
  detailNumber: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    lineHeight: 18,
  },
  option: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    marginTop: 42,
    marginLeft: 56,
  },
  option1Container: {
    width: 315,
    height: 75,
  },
  option1: {
    opacity: 1,
    paddingLeft: 52,
    paddingTop: 30,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  underline: {
    marginTop: 25,
    marginLeft: 52,
    marginRight: 32,
    height: 0,
    borderWidth: 0.5,
    opacity: 0.3,
  },
  option2Container: {
    height: 81,
    width: 315,
    borderRadius: 20,
  },
  option2: {
    paddingTop: 25,
    paddingLeft: 52,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentContainer: {
    flexDirection: 'row',
    marginTop: 67,
    marginHorizontal: 50,
    height: 30,
  },
  paymentText: {
    marginTop: 5,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentNumber: {
    marginLeft: 200,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 22,
    lineHeight: 26,
    color: CUSTOM_COLOR.Black,
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 50,
  },
});

export default styles;