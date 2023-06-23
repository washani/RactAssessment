import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors, Spacing} from '../../styles';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as RF,
} from 'react-native-responsive-dimensions';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Header from '../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {serUserSearchInfo} from '../../redux/mapInfo/actions';
import {mapInfomationSelector} from '../../redux/mapInfo/selectors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? hp(6.5) : StatusBar.currentHeight;
const StatusBarPlaceHolder = () => {
  return (
    <View
      style={{
        width: '100%',
        height: STATUS_BAR_HEIGHT,
        backgroundColor: Colors.GREEN_DARK,
      }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
};

const MapScreen = props => {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const [searchLovcation, setSearchLovcation] = useState({
    latitude: 3.13871,
    longitude: 101.6821,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [allResults, setAllResults] = useState([]);
  const userSearchResults = useSelector(mapInfomationSelector);

  useEffect(() => {
    setAllResults(userSearchResults);
  }, []);

  //================= Push All user search reults into state and Selectors ========
  const setUserSearchInformarion = async data => {
    let newValue = data?.name;
    if (userSearchResults.length !== 0) {
      await setAllResults([...allResults, newValue]);
      dispatch(serUserSearchInfo({allResults}));
    } else {
      dispatch(serUserSearchInfo({newValue}));
    }
  };

  return (
    <>
      <StatusBarPlaceHolder />
      <SafeAreaView style={styles.container}>
        <Header title={'Search Location'} />

        <MapView
          style={{width: '100%', height: hp(60)}}
          provider={PROVIDER_GOOGLE}
          region={searchLovcation}>
          <Marker coordinate={searchLovcation}>
            <Icon name="enviroment" size={40} color={Colors.RED} />
          </Marker>
        </MapView>

        <View style={styles.valueinputSearch}>
          <GooglePlacesAutocomplete
            placeholder="Search Location"
            fetchDetails={true}
            nearbyPlacesAPI={'GoogleReverseGeocoding'}
            onPress={(data, details, place = null) => {
              console.log(details);
              setSearchLovcation({
                latitude: details?.geometry.location.lat,
                longitude: details?.geometry.location.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              setUserSearchInformarion(details);
              //dispatch(serUserSearchInfo({details}));
              console.log('geo details lat', details?.geometry.location.lat);
              console.log('geo details lat', details?.geometry.location.lng);
            }}
            query={{
              key: 'AIzaSyD2zOQdVbs_NJw1bW_xDz-eVyQgboj71hM',
              language: 'en',
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.ASH_COLOR,
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7),
    width: wp(100),
    backgroundColor: Colors.GREEN_DARK,
  },
  headertext: {
    color: Colors.WHITE,
    fontSize: Spacing.SCALE_4,
    fontWeight: '700',
    textAlign: 'center',
    padding: hp(1.7),
    width: wp(70),
  },
  valueinputSearch: {
    marginTop: hp(3),
    width: wp(85),
    height: hp(25),
  },
});

export default MapScreen;
