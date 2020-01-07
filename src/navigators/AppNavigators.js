

import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';


import MessageScreen from '../screens/MessageScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';



import Ionicons from 'react-native-vector-icons/Ionicons';
class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // If you're using react-native < 0.57 overflow outside of parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};



const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'ios-home'} size={25} style={{ color: tintColor }} />
        ),
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: '热搜',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'ios-search'} size={25} style={{ color: tintColor }} />
        ),
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'ios-mail'} size={25} style={{ color: tintColor }} />
        ),
      }
    },
    User: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'ios-person'} size={25} style={{ color: tintColor }} />
        ),
      }
    },

  },

  {
    tabBarOptions: {
      activeTintColor: '#FA9432',
      inactiveTintColor: 'gray',
    },
  }
);


const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: BottomTabNavigator,
  Auth: AuthStack,
},
  {
    initialRouteName: 'AuthLoading',
  });

export const AppStackNavigator = createStackNavigator({
  TabNav: {
    screen: BottomTabNavigator,
    navigationOptions: ({ navigation }) => ({


      title: `${navigation.state.routeName}`,
      // header: null,
    })
  }
}, {
  navigationOptions: {

  }
});

const AppContainer = createAppContainer(SwitchNavigator);

export default  AppContainer


