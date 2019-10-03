import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import  {Feather} from '@expo/vector-icons'
import Carousel from '../components/Home/Carousel';
import { RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';

export default function HomeScreen(props) {
    
    return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.toggleDrawer()}>
                <Feather name="menu" size={32} />
           </TouchableOpacity>
        <Text style={styles.title}>Magic Lab effects</Text>

        </View>
        <Svg id="Layer_1" style={styles.svg} fill="#2F3044" data-name="Layer 1" viewBox="0 0 511 511"><Path class="cls-1" d="M75.53 212.37l39.25 30.81a10 10 0 0 0 15.43-4.18l18.59-46.31a10 10 0 0 0-3.1-11.57l-39.25-30.81A10 10 0 0 0 91 154.49L72.43 200.8a10 10 0 0 0 3.1 11.57zm29.06-38.09l22.9 18-10.84 27-22.9-18z" /><Path class="cls-1" d="M473.83 62.23L245.41 1a30 30 0 0 0-36.67 21.2l-16 59.56-153.58 41.16A30 30 0 0 0 18 159.59l28.42 106.09a10 10 0 0 0 19.28-5.17L37.27 154.43a10 10 0 0 1 7.06-12.22L186.82 104l-66.29 247.41a30 30 0 0 0 21.17 36.67l189.49 50.78-193.48 51.84a10 10 0 0 1-12.23-7.06l-39.12-146a10 10 0 1 0-19.28 5.17l39.12 146A29.91 29.91 0 0 0 142.87 510l226.88-60.79.37.1a30 30 0 0 0 36.67-21.17l59.1-220.58a10 10 0 1 0-19.28-5.17l-59.1 220.58a10 10 0 0 1-12.22 7.03l-2.84-.76-225.58-60.44a10 10 0 0 1-7.06-12.22L228 27.36a10 10 0 0 1 12.22-7.06l228.42 61.2a10 10 0 0 1 7.06 12.22l-8.44 31.52a10 10 0 1 0 19.28 5.17L495 98.9a30 30 0 0 0-21.17-36.67z" /><Path class="cls-1" d="M278.68 274.81a21.42 21.42 0 0 0 13.09 10 21.82 21.82 0 0 0 5.64.75 21.4 21.4 0 0 0 10.72-2.89l50.14-29a44.72 44.72 0 0 0-36.4-81.19 44.73 44.73 0 0 0-72.14 52.11zm-14.14-78.91a24.8 24.8 0 0 1 23.88-18.36 25 25 0 0 1 6.45.85 24.6 24.6 0 0 1 15 11.54 10 10 0 0 0 13.63 3.65 24.76 24.76 0 1 1 24.76 42.88l-50.14 29a1.64 1.64 0 0 1-2.18-.58l-29-50.14a24.6 24.6 0 0 1-2.4-18.84zM266.09 128a16.3 16.3 0 0 0 12.44-1.63l27.8-16.05a29.24 29.24 0 0 0-21.08-53.85 29.24 29.24 0 0 0-45.17 36.13l16.05 27.8a16.29 16.29 0 0 0 9.96 7.6zm-5.33-58.09a9.28 9.28 0 0 1 12.67 3.4A10 10 0 0 0 287.07 77a9.28 9.28 0 0 1 9.28 16.07l-24.72 14.27-14.27-24.72a9.29 9.29 0 0 1 3.4-12.67zM319.45 389.41a16.29 16.29 0 0 0 10 7.63 16.58 16.58 0 0 0 4.28.57 16.3 16.3 0 0 0 8.16-2.2l27.8-16.05a29.25 29.25 0 0 0-21.08-53.86 29.25 29.25 0 0 0-45.18 36.11zm.31-44.82a9.28 9.28 0 0 1 17-2.24 10 10 0 0 0 13.63 3.65 9.28 9.28 0 0 1 9.28 16.07L335 376.35l-14.27-24.72a9.22 9.22 0 0 1-.97-7.04zM469.16 156.75a10 10 0 1 0 7.06 12.25 10 10 0 0 0-7.06-12.25zM76 299.09a10 10 0 1 0-7 12.22 10 10 0 0 0 7-12.23z" /></Svg>
        <Text style={styles.description}>Effect Of Drinking beer From The Phone Rotate Phone Sideways showing screen to the audience.now Drink the ber from the phone</Text>
           <View style={styles.Carousel}>
                <Carousel navigation={props.navigation}/>
           </View>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null,
  };
   

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF1F4',
        flex:1,
        justifyContent: 'center',
        position: 'relative',
    
        
    },
    svg: {
        height: hp('40.37%'),
        width: wp('50.91%'),
        alignSelf: 'center',
        marginTop: hp('2%')
    },
    titleContainer: {
       flexDirection: 'row',
       marginTop: hp('8.04%'),
       alignItems: 'flex-start',
       justifyContent: 'center',
       position: 'relative'
      
    },
    button: {
        position: 'absolute',
        left: 15,
        top: 0,
        
    },
    title:{
        fontSize: RFValue('20'),
        color: '#000000',
        textTransform: 'capitalize',
        fontFamily: 'roboto-regular',
        letterSpacing: 2
      
    },
    description: {
        color: '#8C98AC',
        marginLeft:  wp('6.65%'),
        marginRight: wp('6.65%'),
        fontSize : RFValue('15'),
        fontFamily: 'roboto-regular',
        lineHeight: RFValue('18'),
        marginTop: hp('1%')
    },
    Carousel: {
        marginTop: 'auto',   
    },
})  