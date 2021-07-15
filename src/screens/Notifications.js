import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Button from "../components/Button";
import STYLES from '../utils/styles';

class Notifications extends Component{
    render(){
        return(
            <SafeAreaView  style={[STYLES.main,styles.main]}>
                <Text>Notifications</Text>
                <Button title="Home" onPress={() => this.props.navigation.navigate('Home')}/>
            </SafeAreaView>
        );
    };
};

export default connect(null)(Notifications);

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});