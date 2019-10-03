import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PinkLock from '../components/Pin/PinkLock';


export default class LockScreen extends React.Component {

  state = {
    resultText: `Your Passcode is required ${"\n"} to enable Effect`
  };
  
  changeText = () => {
    this.setState({resultText: `Wrong  Password required,Try Again ${"\n"} to enable Effect` });
  }

  cancelButton = () => {
    this.props.navigation.navigate('Home')
  }
  hint = () => {
  alert('0104');
  }
  render() {
    const props = this.props;
    return (
        <ScrollView>
          <View style={styles.container}>
          <ImageBackground style={styles.container}
            resizeMode='cover'
            source={require('../assets/images/iphonebg.jpg')}>
    
            <View style={[styles.container, styles.overlay]} >
              <Text style={styles.title}>Enter Passcode</Text>
              <Text style={styles.result}>{this.state.resultText}</Text>
              <PinkLock navigation={props.navigation} changeText={this.changeText}/>
              <View style={styles.hint}>
                <TouchableOpacity onPress={this.hint}>
                <Text style={styles.hintText}>Hint</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.cancelButton}>
                  <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
            </View>
            </View>
           
          </ImageBackground>
          {/* <AceOfHearts/> */}
    
        </View>
        </ScrollView>
    )
  }
}

LockScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  overlay: {
    backgroundColor: 'rgba(216,12,45,0.54)'

  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginTop: hp('13.83%'),
    fontFamily: 'roboto-regular'
  },
  result: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: hp('6.2%'),
    marginBottom:hp('5.32%'),
    fontFamily: 'roboto-light'

  },
  hint: {
    marginTop: hp('8.10%'),
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: hp('7%')
  },
  hintText: {
    fontSize: 16,
    color: '#fff',
   marginLeft: wp('5%')
    
  },
  cancel: {
    fontSize: 16,
    color: '#fff',
    marginRight: wp('5%'),


  }
});
