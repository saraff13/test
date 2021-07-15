import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import STYLES from '../utils/styles';
import {initLogout} from '../store/actions/logoutAction'
import Button from '../components/Button';
import Header from "../components/Header";

class Home extends Component{
    render(){
        return(
            <>
                <Header 
                    title='Home' 
                    showBellIcon
                    navigation={this.props.navigation}
                />
                <SafeAreaView  style={[STYLES.main,styles.main]}>
                    <Text>Welcome Home</Text>
                    <Button 
                        title="Sign out" 
                        onPress={() => this.props.initLogout()}
                    />
                    <Button 
                        title="Profile" 
                        onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button 
                        title="News" 
                        onPress={() => this.props.navigation.navigate('News')}
                    />
                </SafeAreaView>
            </>
        );
    };
};

export default connect(null,{initLogout})(Home);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
    },
});