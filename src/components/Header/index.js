import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';
import {Colors, Spacing} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linearGradient}>
        <TouchableOpacity
          style={styles.backSection}
          onPress={() => navigation.goBack()}>
          <Icon name="left" size={30} color="#fff" style={styles.historyIcon} />
        </TouchableOpacity>
        <Text style={styles.headertext}>{props.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
          <Icon
            name="rightcircle"
            size={30}
            color="#fff"
            style={styles.historyIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(100),
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7),
    backgroundColor: Colors.GREEN_DARK,
  },
  backSection: {
    // justifyContent: 'space-around',
    // width: wp(10),
  },
  headertext: {
    color: Colors.WHITE,
    fontSize: Spacing.SCALE_4,
    fontWeight: '700',
    textAlign: 'center',
    padding: hp(1.7),
    width: wp(70),
  },

  historyIcon: {
    marginRight: wp(5),
    color: Colors.WHITE,
  },
});

export default Header;
