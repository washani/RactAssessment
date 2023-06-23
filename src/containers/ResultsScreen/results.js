import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
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

const ResultsScreen = props => {
  const dispatch = useDispatch();
  const mapRef = useRef();
  const [searchLovcation, setSearchLovcation] = useState({
    latitude: 3.13871,
    longitude: 101.6821,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const userSearchResults = useSelector(mapInfomationSelector);
  const [dataResults, setSataResults] = useState([]);

  useEffect(() => {
    setSataResults(userSearchResults.allResults);
    console.log('userSearchResults', userSearchResults);
  }, []);

  const renderItem = ({item}) => (
    <View style={{padding: hp(1), width:wp(100), borderBottomWidth: 1, borderBottomColor: Colors.GRAY_PLACEHOLADER}}>
      <Text>{item}</Text>
    </View>
  
  );

  return (
    <>
      <StatusBarPlaceHolder />
      <SafeAreaView style={styles.container}>
        <Header title={'Results Screen'}/>
        {/* <Text>{userSearchResults?.details?.name}</Text> */}
        <FlatList
          data={dataResults}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          
        />
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
});

export default ResultsScreen;
