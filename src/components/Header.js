import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    const {title = 'Header', navigation, showBellIcon} = this.props;
    return (
      <View style={[styles.main]}>
        <TouchableOpacity
          style={[styles.iconLeft]}
          onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assests/images/menu.png')}
            style={[styles.iconImage]}
          />
        </TouchableOpacity>

        <Text style={[styles.headerTitle]}>{title}</Text>

        {showBellIcon ? (
          <TouchableOpacity
            style={[styles.iconRight]}
            onPress={() => this.props.navigation.navigate('Notifications')}>
            <Image
              source={require('../assests/images/bell.png')}
              style={[styles.iconImage]}
            />
          </TouchableOpacity>
        ) : (
          <View style={[styles.empty]} />
        )}
      </View>
    );
  }
}

export default connect(null)(Header);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'aliceblue',
    borderBottomWidth: 0.4,
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: 'center',
    flexGrow: 1,
    textAlign: 'center',
  },
  iconLeft: {},
  iconRight: {},
  iconImage: {
    width: 30,
    height: 30,
  },
  empty: {
    width: 30,
  },
});
