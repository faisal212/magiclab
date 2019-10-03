import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, NavigationActions, SafeAreaView } from 'react-navigation';
import { RFValue } from "react-native-responsive-fontsize";

import LockScreen from '../screens/LockScreen';
import CardScreen from '../screens/CardScreen';
import HomeScreen from '../screens/HomeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const LockStack = createStackNavigator(
  {
    Home: HomeScreen,
    LockScreen: LockScreen,
    Card: CardScreen

  },
  config
);


const prevGetStateForAction = LockStack.router.getStateForAction;

LockStack.router = {
  ...LockStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'Navigation/BACK') {
      const routes = [state.routes[0]];
      console.log(routes)
      const routes2 = [];
      routes.forEach((element, index) => {
        element.key = element.routeName + index;
        routes2.push(element);
      });
      routes.push(action);
      return {
        ...state,
        routes2,
        index: 0,

      }
    }
    return prevGetStateForAction(action, state);

  }
};





const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <NavigationItems  {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activeItem: {
    backgroundColor: '#EE273E'
  },
  NavigationItems: {
    fontSize: RFValue('15'),
    fontFamily: 'roboto-light',
    color: '#fff',
    paddingVertical: 19,
    borderBottomColor: '#ECF1F4',
    borderBottomWidth: 0.5,
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  navigationContainer: {
    flex: 1,
  }
});


const NavigationItems = (props) => {
  const navigate = () => {
    props.navigation.navigate('LockScreen');
  }
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity>
        <Text style={[styles.NavigationItems,styles.activeItem]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={navigate}>
        <Text style={styles.NavigationItems}>Lock Screen Effect</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.NavigationItems}>Drink Beer Effect</Text>
      </TouchableOpacity>
   
      <TouchableOpacity>
        <Text style={styles.NavigationItems}>Broken Screen</Text>
      </TouchableOpacity>
    </View>
  )
}
const tabNavigator = createDrawerNavigator({
  Home: {
    screen: LockStack
  }
}, {
    drawerBackgroundColor: '#D80C2D',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: 'rgba(0,0,0,0.1)',
      inactiveBackgroundColor: 'transparent',


    }

  });

tabNavigator.path = '';

export default tabNavigator;
