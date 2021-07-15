import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import News from './News';
import Notifications from './Notifications';
import Button from '../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import {setUserData} from '../store/actions/loginAction';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class Auth extends Component{
    state = {
        loading: true,
    };

    componentDidMount(){
        AsyncStorage.getItem('userData')
        .then(data => {
            this.setState({loading: false});
            if(data){
                this.props.setUserData(JSON.parse(data));
            }
        })
        .catch(error => {
            this.setState({loading: false});
        })
    }

    render(){

        const {loading} = this.state;
        if(loading)return <Loader loading={loading}/>;

        const {user} = this.props;

        // if(user)return <Home />;
        // return <Login />;

        return (
            <NavigationContainer>
                {user ? (
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="News" component={News} />
                    <Stack.Screen name="Notifications" component={Notifications} />
                </Stack.Navigator>
                ) : (
                <Stack.Navigator>
                    <Stack.Screen 
                        options={{ headerShown: false }}
                        name="Login" 
                        component={Login} 
                    />
                </Stack.Navigator>
                )}
            </NavigationContainer>
        );
    };
};

// export default Auth;
const mapStateToProps = state => {
    return {
        user: state.loginReducer.user,
    };
};
export default connect(mapStateToProps,{setUserData})(Auth);

function HomeScreen({ navigation }) {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MenuPage1" component={MenuPage1} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
  
  function MenuPage1({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>MenuPage1</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  }