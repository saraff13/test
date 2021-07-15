import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';
import Profile from './Profile';
import News from './News';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
